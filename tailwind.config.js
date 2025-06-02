module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // 👈 this line is important
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // 👈 add this plugin
  ],
};
