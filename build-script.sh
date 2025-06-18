#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

APACHE_CONFIG_FILE="/etc/apache2/sites-enabled/000-default.conf"
FRONTEND_DIR="/var/frontend"
PROJECT_DIR_NAME="loxala-main" # The name of the directory after unzipping
GITHUB_REPO_ZIP="https://github.com/sergey-kvachenok/loxala/archive/refs/heads/main.zip"
NODE_VERSION="22"

INSERT_CONTENT="
	<Directory /var/www/html/>
		Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>
"

HTACCESS_CONTENT='
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
'

# --- Update and Install System Dependencies ---
echo "--- Updating system packages and installing dependencies ---"

apt update
sudo apt upgrade -y
sudo apt install -y unzip apache2 curl

# We'll use a subshell to ensure NVM is sourced for its commands.
echo "--- Installing NVM and Node.js v${NODE_VERSION} ---"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash


curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Source NVM in the current shell for the rest of the script's NVM-dependent commands
# This ensures that nvm, node, npm are available immediately after this line.
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion


nvm install 22
nvm use "$NODE_VERSION"

echo "Node version: $(node -v)"
echo "Nvm version: $(nvm current)"
echo "Npm version: $(npm -v)"

# --- Clone, Build, and Deploy Frontend ---
echo "--- Cloning, building, and deploying frontend ---"

sudo mkdir -p "$FRONTEND_DIR"
cd "$FRONTEND_DIR"

echo "Downloading frontend source code..."

sudo wget $GITHUB_REPO_ZIP -O main.zip
sudo unzip main.zip
sudo rm main.zip

cd $PROJECT_DIR_NAME

echo "Installing npm dependencies..."
npm install

echo "Building frontend application..."
npm run build

echo "Removing default Apache files and copying built application..."
# Ensure the dist folder exists before trying to copy from it
if [ -d "./dist" ]; then
    sudo rm -rf /var/www/html/* 
    sudo cp -r dist/* /var/www/html/
else
    echo "Error: 'dist' directory not found after build. Frontend build might have failed."
    exit 1
fi

# Start apache2 server
systemctl start apache2
systemctl enable apache2

a2enmod rewrite
sudo systemctl restart apache2

echo "Modifying AllowOverride setting in $APACHE_CONFIG_FILE..."

# Use awk to print lines until </VirtualHost>, then print the content, then the </VirtualHost> and rest
# This ensures it's inserted BEFORE </VirtualHost>
sudo awk -v insert="$INSERT_CONTENT" '/<\/VirtualHost>/ { print insert } { print }' "$APACHE_CONFIG_FILE" > /tmp/000-default.conf.new
sudo mv /tmp/000-default.conf.new "$APACHE_CONFIG_FILE"

echo "Creating .htaccess for SPA routing using tee..."
sudo tee /var/www/html/.htaccess > /dev/null <<EOF
$HTACCESS_CONTENT
EOF

echo "Verifying changes..."
if grep -q "AllowOverride All" "$APACHE_CONFIG_FILE"; then
    echo "Success: 'AllowOverride All' found in $APACHE_CONFIG_FILE."
else
    echo "Warning: 'AllowOverride All' not found after modification. Please check manually."
fi

sudo systemctl restart apache2
sudo rm -r /var/frontend