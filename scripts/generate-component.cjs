#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const hasTypes = args.includes('--types');
const componentPath = args
  .find((arg) => arg.startsWith('--path='))
  ?.split('=')[1];

// Find component name (first argument that is not a flag)
const componentName = args.find((arg) => !arg.startsWith('--'));

if (!componentName) {
  console.error('❌ Error: need to add a path');
  console.log(
    'Usage: node scripts/generate-component.js <ComponentName> [--types] [--path=folder/path]',
  );
  console.log('Example: node scripts/generate-component.js Button --types');
  console.log(
    'Example: node scripts/generate-component.js Modal --types --path=modals',
  );
  process.exit(1);
}

// Define path to component
const basePath = 'src/shared/ui/components';
const fullPath = componentPath
  ? path.join(basePath, componentPath, componentName)
  : path.join(basePath, componentName);

// Create directory if it doesn't exist
if (!fs.existsSync(fullPath)) {
  fs.mkdirSync(fullPath, { recursive: true });
}

// Main component template with types in separate file
const componentWithTypesTemplate = `import type { FC } from 'react';
import type { ${componentName}Props } from './types';

export const ${componentName}: FC<${componentName}Props> = ({
}) => {
  return (
  
  );
};
`;

// Main component template without types file
const componentTemplate = `import type { FC } from 'react';

interface ${componentName}Props {
}

export const ${componentName}: FC<${componentName}Props> = ({
}) => {
  return (
    <div>
      {/* Реализация ${componentName} компонента */}
      <h1>${componentName} Component</h1>
    </div>
  );
};
`;

// Types file template
const typesTemplate = `export interface ${componentName}Props {

}
`;

// Create main component file
const indexPath = path.join(fullPath, 'index.tsx');
const componentContent = hasTypes
  ? componentWithTypesTemplate
  : componentTemplate;

fs.writeFileSync(indexPath, componentContent);
console.log(`✅ File created: ${indexPath}`);

// Create types file if --types flag is provided
if (hasTypes) {
  const typesPath = path.join(fullPath, 'types.ts');
  fs.writeFileSync(typesPath, typesTemplate);
  console.log(`✅ File created: ${typesPath}`);
}

console.log(
  `🎉 Component ${componentName} successfully created in ${fullPath}`,
);
