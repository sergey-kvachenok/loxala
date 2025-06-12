#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const iconName = args.find((arg) => !arg.startsWith('--'));

if (!iconName) {
  console.error('❌ Error: Necessary to give the icon name');
  console.log(
    'Usage: node scripts/generate-icon.cjs <IconName> [--size=16] [--color=#7A58D0]',
  );
  console.log(
    'Example: node scripts/generate-icon.cjs ArrowIcon --size=24 --color=#000000',
  );
  process.exit(1);
}

// Remove "Icon" from name if it already exists
const baseName = iconName.replace(/Icon$/, '');
const iconComponentName = `${baseName}Icon`;
const folderName = baseName;

// Define path to icon
const iconsPath = 'src/shared/ui/icons';
const iconPath = path.join(iconsPath, folderName);

// Create directory if it doesn't exist
if (!fs.existsSync(iconPath)) {
  fs.mkdirSync(iconPath, { recursive: true });
}

// Шаблон иконки
const iconTemplate = `import type { FC } from 'react';
import type { IconProps } from '../types';

export const ${iconComponentName}: FC<IconProps> = ({
  size = ${size} | 16,
  color = '',
  className,
}) => {
  return (
   
  );
};
`;

// Создаем файл иконки
const iconFilePath = path.join(iconPath, 'index.tsx');
fs.writeFileSync(iconFilePath, iconTemplate);
console.log(`✅ File created: ${iconFilePath}`);

// Update index.tsx in icons folder
const iconsIndexPath = path.join(iconsPath, 'index.tsx');
let iconsIndexContent = '';

if (fs.existsSync(iconsIndexPath)) {
  iconsIndexContent = fs.readFileSync(iconsIndexPath, 'utf8');
}

// Add export of new icon if it doesn't exist
const exportLine = `export { ${iconComponentName} } from './${folderName}';`;
if (!iconsIndexContent.includes(exportLine)) {
  iconsIndexContent += `${exportLine}\n`;
  fs.writeFileSync(iconsIndexPath, iconsIndexContent);
  console.log(`✅ Export added to: ${iconsIndexPath}`);
}

console.log(`🎉 Icon ${iconComponentName} successfully created in ${iconPath}`);
