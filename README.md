# Loxala - React + Vite + TypeScript + TailwindCSS

Современное React приложение, созданное с использованием лучших практик разработки.

## 🚀 Технологии

- **React 19** - Библиотека для создания пользовательских интерфейсов
- **TypeScript** - Строго типизированный JavaScript
- **Vite** - Быстрый инструмент сборки
- **TailwindCSS** - Utility-first CSS фреймворк
- **ESLint** - Линтер для JavaScript/TypeScript

## 📦 Установка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd loxala

# Установить зависимости
npm install
```

## 🛠️ Разработка

```bash
# Запустить сервер разработки
npm run dev

# Проверить типы TypeScript
npm run type-check

# Запустить линтер
npm run lint

# Исправить ошибки линтера автоматически
npm run lint:fix
```

## 🏗️ Сборка

```bash
# Создать production сборку
npm run build

# Предварительный просмотр production сборки
npm run preview
```

## ✨ Особенности

- 🎨 Современный и отзывчивый дизайн
- ♿ Поддержка доступности (ARIA-атрибуты, навигация с клавиатуры)
- 🔧 Настроенный ESLint с лучшими практиками
- 📱 Mobile-first подход
- 🎭 Плавные анимации и переходы
- 🔥 Hot Module Replacement (HMR)

## 📁 Структура проекта

```
loxala/
├── public/          # Статические файлы
├── src/
│   ├── assets/      # Изображения, иконки
│   ├── components/  # React компоненты
│   ├── App.tsx      # Главный компонент
│   ├── main.tsx     # Точка входа
│   └── index.css    # Глобальные стили
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Лучшие практики

Этот проект использует следующие лучшие практики:

- **Компоненты как const functions** вместо function declarations
- **Descriptive naming** для переменных и функций
- **Event handlers** с префиксом "handle"
- **Early returns** для улучшения читаемости
- **Accessibility features** - tabindex, aria-label, keyboard navigation
- **TypeScript** для типобезопасности
- **TailwindCSS** для utility-first стилизации

---

Создано с ❤️ используя современные веб-технологии
