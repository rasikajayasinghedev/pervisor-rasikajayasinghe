# Draggable User Cards - Next.js App

This project is a **Next.js 13+ App Router** application that showcases a grid of **draggable user profile cards**. Built using **TypeScript**, **Tailwind CSS**, and the **@dnd-kit** drag-and-drop library.

## ✨ Features

- Responsive grid layout of user profile cards
- Drag-and-drop functionality to reorder cards
- Smooth animations and blur effects
- Modular component structure

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@dnd-kit](https://dndkit.com/) for drag-and-drop

## 📁 Project Structure

```
src/
├── app/
│   └── page.tsx               # Entry point for the page
├── components/
│   ├── UserCard.tsx           # Single draggable card component
│   ├── UserCardGrid.tsx       # Drag-and-drop grid container
│   └── users.ts               # Static user data
public/
└── avatar1.jpg ... avatar8.jpg # User profile images
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/draggable-user-cards.git
cd draggable-user-cards
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

## 🧑‍🎨 Customization

- **Change User Data:** Edit the array in `src/components/users.ts`
- **Replace Images:** Put your images in `public/` and update paths in `users.ts`
- **Tailwind Styling:** Modify styles directly in `UserCard.tsx` or `UserCardGrid.tsx`

## 📌 Notes

- Works best in modern browsers that support `backdrop-blur` CSS.
- This app uses `use client` directive to enable drag interactions in the browser.

## 📄 License

MIT License. Feel free to use and adapt for your own projects.
