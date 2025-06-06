# Генераторы

Скрипты для автоматической генерации новых React компонентов и иконок в проекте.

## Генератор компонентов

## Использование

### Через npm скрипты (рекомендуется):

```bash
# Создать простой компонент
npm run generate:component <ComponentName>

# Создать компонент с отдельным файлом типов
npm run generate:component:types <ComponentName>
```

### Прямое использование:

```bash
# Простой компонент
node scripts/generate-component.js <ComponentName>

# Компонент с типами в отдельном файле
node scripts/generate-component.js <ComponentName> --types

# Компонент в указанной подпапке
node scripts/generate-component.js <ComponentName> --path=subfolder
```

## Примеры

```bash
# Создать простой компонент Button
npm run generate:component Button

# Создать компонент Modal с отдельным файлом типов
npm run generate:component:types Modal

# Создать компонент Card в папке cards
node scripts/generate-component.js Card --types --path=cards
```

## Структура создаваемых компонентов

### Простой компонент:

```
src/ui/components/ComponentName/
├── index.tsx
```

### Компонент с типами:

```
src/ui/components/ComponentName/
├── index.tsx
└── types.ts
```

## Шаблоны

### Простой компонент (без --types):

- Создается только `index.tsx`
- Типы определены в самом компоненте
- Подходит для простых компонентов

### Компонент с типами (с --types):

- Создается `index.tsx` и `types.ts`
- Типы выносятся в отдельный файл
- Подходит для сложных компонентов с множеством типов

## Опции

- `--types` - создать отдельный файл типов
- `--path=folder/path` - создать компонент в указанной подпапке

После создания компонента не забудьте добавить его экспорт в соответствующий index.tsx файл при необходимости.

## Генератор иконок

### Через npm скрипт (рекомендуется):

```bash
# Создать иконку с параметрами по умолчанию
npm run generate:icon <IconName>
```

### Прямое использование:

```bash
# Создать иконку с параметрами по умолчанию
node scripts/generate-icon.cjs <IconName>

# Создать иконку с кастомными параметрами
node scripts/generate-icon.cjs <IconName> --size=24 --color=#000000
```

### Примеры:

```bash
# Создать иконку HomeIcon
npm run generate:icon HomeIcon

# Создать иконку с размером 24px и черным цветом
node scripts/generate-icon.cjs ArrowIcon --size=24 --color=#000000

# Создать иконку с синим цветом
node scripts/generate-icon.cjs StarIcon --color=#3B82F6
```

### Структура создаваемых иконок:

```
src/ui/icons/IconName/
├── index.tsx
```

### Особенности:

- Автоматически добавляет "Icon" к имени если отсутствует
- Создает папку без "Icon" суффикса (например, `Home` для `HomeIcon`)
- Автоматически добавляет экспорт в `src/ui/icons/index.tsx`
- Использует шаблон с placeholder SVG контентом
- Поддерживает кастомные размеры и цвета

### Опции:

- `--size=<number>` - размер иконки (по умолчанию: 16)
- `--color=<hex>` - цвет по умолчанию (по умолчанию: #7A58D0)

После создания иконки замените placeholder SVG контент на реальные пути вашей иконки.
