# 🌍 Countries App

Интерактивное приложение на базе **Next.js 15 (App Router)** для просмотра подробной информации о странах мира.

🔗 [**Смотреть демо на Vercel**](https://countries-app-eta-three.vercel.app/)

## 🚀 Функции

- 🔍 Поиск страны по названию
- 🌐 Фильтрация по региону (Africa, Asia, Europe и т.д.)
- 🔢 Сортировка по алфавиту и населению
- 🇺🇳 Страница страны с подробной информацией:
  - Название (общее и официальное)
  - Флаг, столица, регион, подрегион
  - Население, площадь, язык(и), валюта(ы), часовой пояс
- 🌓 Поддержка тёмной темы
- 🧭 SSR и ISR (Incremental Static Regeneration)

## 🧱 Архитектура

Проект построен по **Feature-Sliced Design** (FSD):

```
src/
├── app/                # Next.js layout/pages routing
├── widgets/            # Компоненты страницы (например, Header, CountryGrid)
├── features/           # Функции: фильтр, сортировка, поиск, навигация
├── entities/           # Сущности: Country
├── shared/             # Переиспользуемые модули, стили, утилиты
```

## 🛠️ Стек технологий

- **Next.js 15** + **App Router**
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Zustand** для состояния
- **Framer Motion** — анимации
- **REST API:** https://restcountries.com/

## 📦 Установка

```bash
git clone https://github.com/your-user/countries-app.git
cd countries-app
yarn install
yarn dev
```

## 🖼 Превью

![Превью](public/og-image.jpg)

## 📄 Лицензия

MIT — свободно используйте и улучшайте.
