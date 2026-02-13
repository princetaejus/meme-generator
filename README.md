# Meme Generator

A simple meme generator web app that lets you pick an image, add custom text, and download or share the final meme.[web:52][web:53]


https://github.com/user-attachments/assets/e631f7e6-827e-4494-ad67-da557a5655c0




## Features

- Choose a meme template or upload your own image.[web:52]
- Add top and bottom text with live preview.
- Adjust font size, color, and alignment.
- Download the generated meme as an image file.[web:55]
- Mobile-friendly, works in modern browsers.

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Framework/Library: React (Vite + React)  <!-- adjust if different -->
- Build tools: npm / yarn

## Getting Started

### Prerequisites

- Node.js (LTS) and npm.
- Git (optional, for cloning).

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/meme-generator.git
cd meme-generator

# Install dependencies
npm install
```
### Run in Development
```bash
npm run dev
```
Open the printed local URL (usually http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
The optimized build will be in the dist/ folder, ready to deploy.

## Usage
   - Open the app in your browser.
   - Select a meme template or upload an image from your device.
   - Enter top and bottom text in the input fields.
   - Adjust styling options (font size, color, etc.) as needed.
   - Click Generate / Download to save your meme.

## Project Structure
```text
 .
├── src
│   ├── App.jsx
│   ├── index.jsx
│   ├── components
│   │   ├── Header.jsx
│   │   └── Main.jsx
│   └── images
│       └── troll-face.png
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
```
