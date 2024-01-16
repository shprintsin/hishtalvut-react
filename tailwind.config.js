/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        heebo:"Heebo",
        opensans:"Open Sans",
        secular:"Secular One",
        rubik:"Rubik",
        alef:"Alef"
      },
      colors:{prime:"#26426c",secondary:"#5b7895",third:"#5b7895"}
    },
  },
  plugins: [],
}