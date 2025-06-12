source "$(dirname "$0")/common.sh"

ICON_NAME=$1

# Check if icon name is provided
if [ -z "$ICON_NAME" ]
then
  echo "❌ Error: Necessary to give the icon name"
  echo "Usage: ./scripts/remove-icon.sh <IconName>"
  exit 1
fi

ICON_FOLDER_PATH="../src/shared/ui/icons/$ICON_NAME"
ICON_INDEX_PATH="../src/shared/ui/icons/index.tsx"
EXPORT_LINE="export { "$ICON_NAME"Icon } from './$ICON_NAME';"

# Check if icon exists
if [ -d "$ICON_FOLDER_PATH" ]
then
rm -rf "$ICON_FOLDER_PATH"
echo "$SUCCESS_ICON Icon $ICON_NAME removed successfully"
else
  echo "$ERROR_ICON Error: Icon $ICON_NAME not found"
  exit 1
fi

# Remove export line if icon is exported in index.tsx
grep  "$EXPORT_LINE" "$ICON_INDEX_PATH" > /dev/null
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]
then 
  echo "$(cat $ICON_INDEX_PATH | grep -v "$EXPORT_LINE")" > $ICON_INDEX_PATH
  echo "$SUCCESS_ICON Success: Export of $ICON_NAME removed from index.tsx"
else
  echo "$ERROR_ICON Icon $ICON_NAME hasn't been found in index.tsx"
  exit 1
fi

echo "$CONGRATS_ICON Icon $ICON_NAME succesfully removed"








