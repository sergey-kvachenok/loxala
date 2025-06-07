# Generators

Scripts for automatic generation of new React components and icons in the project.

## Component Generator

## Usage

```bash
# Create a simple component
npm run generate:component <ComponentName>

# Create a component with separate types file
npm run generate:component:types <ComponentName>
```

### Direct usage:

```bash
# Simple component
node scripts/generate-component.js <ComponentName>

# Component with types in separate file
node scripts/generate-component.js <ComponentName> --types

# Component in specified subfolder
node scripts/generate-component.js <ComponentName> --path=subfolder
```

## Examples

```bash
# Create simple Button component
npm run generate:component Button

# Create Modal component with separate types file
npm run generate:component:types Modal

# Create Card component in cards folder
node scripts/generate-component.js Card --types --path=cards
```

## Generated component structure

### Simple component:

```
src/ui/components/ComponentName/
├── index.tsx
```

### Component with types:

```
src/ui/components/ComponentName/
├── index.tsx
└── types.ts
```

## Templates

### Simple component (without --types):

- Only `index.tsx` is created
- Types are defined in the component itself
- Suitable for simple components

### Component with types (with --types):

- Creates `index.tsx` and `types.ts`
- Types are extracted to separate file
- Suitable for complex components with multiple types

## Options

- `--types` - create separate types file
- `--path=folder/path` - create component in specified subfolder

After creating a component, don't forget to add its export to the corresponding index.tsx file if needed.

## Icon Generator

### Via npm script (recommended):

```bash
# Create icon with default parameters
npm run generate:icon <IconName>
```

### Direct usage:

```bash
# Create icon with default parameters
node scripts/generate-icon.cjs <IconName>

# Create icon with custom parameters
node scripts/generate-icon.cjs <IconName> --size=24 --color=#000000
```

### Examples:

```bash
# Create HomeIcon
npm run generate:icon HomeIcon

# Create icon with 24px size and black color
node scripts/generate-icon.cjs ArrowIcon --size=24 --color=#000000

# Create icon with blue color
node scripts/generate-icon.cjs StarIcon --color=#3B82F6
```

### Generated icon structure:

```
src/ui/icons/IconName/
├── index.tsx
```

### Features:

- Automatically adds "Icon" to name if missing
- Creates folder without "Icon" suffix (e.g., `Home` for `HomeIcon`)
- Automatically adds export to `src/ui/icons/index.tsx`
- Uses template with placeholder SVG content
- Supports custom sizes and colors

### Options:

- `--size=<number>` - icon size (default: 16)
- `--color=<hex>` - default color (default: '')
