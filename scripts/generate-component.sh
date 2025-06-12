#! /bin/bash
DEFAULT_COMPONENT_PATH="/shared/ui/components"

ERROR_ICON=❌
SUCCESS_ICON=✅
CONGRATS_ICON=🎉

COMPONENT_NAME=$1
COMPONENT_PATH="../src/${2:-$DEFAULT_COMPONENT_PATH}"

if [ -z "$COMPONENT_NAME" ]
then
  echo "$ERROR_ICON Error: Necessary to give the component name"
  echo "Usage: ./scripts/generate-component.sh <ComponentName> <Path>"
  exit 1
fi

# Types file template
COMPONENT_TYPES_TEMPLATE="export interface "$COMPONENT_NAME"Props {

}
";

# Component file template
COMPONENT_TEMPLATE="import type { FC } from 'react';
import type { "$COMPONENT_NAME"Props } from './types';

export const $COMPONENT_NAME: FC<"$COMPONENT_NAME"Props> = ({
}) => {
  return (
  
  );
};"

if [ -d "$COMPONENT_PATH/$COMPONENT_NAME" ]
then
  echo "$ERROR_ICON Error: Component with name $COMPONENT_NAME already exists"
else
  mkdir -p "$COMPONENT_PATH/$COMPONENT_NAME"
  echo "$COMPONENT_TEMPLATE" > "$COMPONENT_PATH/$COMPONENT_NAME/index.tsx"

  echo "$COMPONENT_TYPES_TEMPLATE" > "$COMPONENT_PATH/$COMPONENT_NAME/types.ts"

  echo "$SUCCESS_ICON Component $COMPONENT_NAME created successfully"
fi

echo "$CONGRATS_ICON Component $COMPONENT_NAME succesfully created"