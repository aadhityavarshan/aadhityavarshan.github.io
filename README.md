# Aadhitya Varshan | Portfolio

## How to Run Locally (with Live Reload)

1. Make sure you have Node.js installed.
2. Open a terminal in your project folder.
3. Run the following command to install dependencies:
   ```powershell
   npm install
   ```
4. Start the development server:
   ```powershell
   npm run dev
   ```
5. Open your browser and go to [http://localhost:5173](http://localhost:5173) (default Vite port).
6. Any changes you make to your code will automatically update the website in your browser.

## Project Structure
```
index.html                  # Redirects to datascience/home.html
src/
  main.js                   # Frontend scripts
  style.css                 # Global styles
datascience/
  home.html                 # Landing page with interactive terminal
  about.html                # Background, experience, skills
  projects.html             # Expandable project cards with code snippets
  contact.html              # Contact info
  tasks.html                # Private task manager (hidden)
package.json
README.md
```

## Features

- Terminal-themed UI with JetBrains Mono font
- Typing animation on the home page
- Interactive terminal that accepts commands (`help`, `ls`, `whoami`, `skills`, `projects`, `contact`, `date`, `secret`)
- Expandable project cards with syntax-highlighted code snippets
- Light/dark theme toggle (persists via localStorage)
- Matrix rain background animation
- Mobile responsive

## About

Personal portfolio website focused on data science and machine learning projects. Visitors are automatically redirected to the data science portfolio page. Powered by Vite for instant updates as you code.
