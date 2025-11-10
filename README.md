# Rae Cellann Portfolio

This is a single-page application built with React and Vite, showcasing the portfolio of Rae Cellann.

## Project Structure

```
raecellann.github.io
├── index.html          # Main HTML file
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
├── jsconfig.json       # JavaScript project configuration
├── .gitignore          # Files to ignore in Git
├── src
│   ├── main.jsx        # Entry point for the React application
│   ├── App.jsx         # Main App component
│   ├── pages
│   │   └── Home.jsx    # Home page component
│   ├── components
│   │   ├── Header.jsx   # Navigation bar component
│   │   ├── About.jsx    # About section component
│   │   ├── Gallery.jsx   # Gallery component
│   │   ├── Works.jsx     # Works section component
│   │   └── Footer.jsx    # Footer component
│   ├── styles
│   │   └── index.css     # Global styles
│   └── assets           # Static assets (images, fonts, etc.)
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/raecellann.github.io.git
   ```

2. Navigate to the project directory:
   ```
   cd raecellann.github.io
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Build

To create a production build of the application, run:
```
npm run build
```

This will generate a `dist` folder containing the optimized files for deployment.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.