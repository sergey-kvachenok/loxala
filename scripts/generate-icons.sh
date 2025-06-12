#!/bin/bash

# Get icon name, size and color from arguments
ICON_NAME=$1
ICON_SIZE=${2:-16}
ICON_COLOR=${3:-"''"}

ERROR_ICON=❌
SUCCESS_ICON=✅
CONGRATS_ICON=🎉

if [ -z "$ICON_NAME" ]
then
  echo "$ERROR_ICON Error: Necessary to give the icon name"
  echo "Usage: ./scripts/generate-icons.sh <IconName> <size> <color>"
  echo "Example: ./scripts/generate-icons.sh HomeIcon 16 #7A58D0"
  exit 1
fi

ICON_TEMPLATE="import type { FC } from 'react';
import type { IconProps } from '../types';

export const "$ICON_NAME"Icon: FC<IconProps> = ({
  size = $ICON_SIZE,
  color = $ICON_COLOR,
  className,
}) => {
  return (
   
  );
};
"
ICON_FOLDER_PATH="../src/shared/ui/icons/$ICON_NAME"
ICON_FILE_PATH="$ICON_FOLDER_PATH/index.tsx"
ICON_INDEX_PATH="../src/shared/ui/icons/index.tsx"

# Get all existing icons
EXISTING_ICONS=$(ls ../src/shared/ui/icons/ | grep -v "types.ts"| grep -v "index.tsx")

# Check if icon already exists
for icon in $EXISTING_ICONS
do
  if [ $icon == $ICON_NAME ]
  then
    echo "$ERROR_ICON Error: Icon with name $ICON_NAME already exists"
    exit 1
  fi
done

# Create icon directory
mkdir $ICON_FOLDER_PATH

# Create icon file
touch $ICON_FILE_PATH

# Write icon template to file
echo "$ICON_TEMPLATE" > $ICON_FILE_PATH
echo "$SUCCESS_ICON Icon $ICON_NAME component folder created successfully"

# Add icon export to index.tsx if it doesn't exist
EXPORT_LINE="export { "$ICON_NAME"Icon } from './$ICON_NAME';"
grep  "$EXPORT_LINE" "$ICON_INDEX_PATH"
EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]
then
  echo "$ERROR_ICON Error: Icon $ICON_NAME already exists in index.tsx"
  exit 1
else
  echo $EXPORT_LINE >> $ICON_INDEX_PATH
  echo "$SUCCESS_ICON Icon $ICON_NAME added to index.tsx"
fi

echo "$CONGRATS_ICON Icon $ICON_NAME succesfully created"




