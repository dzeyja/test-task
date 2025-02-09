module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
       "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary-color)',
        }
      },
    },
    plugins: [],
  };