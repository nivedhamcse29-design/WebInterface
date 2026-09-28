# Hobby Card

A React + Vite app that displays six hobby cards, each built from the same
`HobbyCard` component and driven by props.

## Folder structure

```
Hobby-Card/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx / App.css
    ├── index.css
    ├── components/
    │   ├── HobbyCard.jsx      # title + description, driven by props
    │   └── HobbyCard.css
    └── data/
        └── hobbies.js         # the six hobby entries
```

## The six cards

1. Music
2. Painting
3. Writing
4. Reading Books
5. Photography
6. Cooking

## Run it locally

```bash
cd Hobby-Card
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).
