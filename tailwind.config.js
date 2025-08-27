/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}", // 如果你的页面在 pages 目录
    "./*.{html,js,jsx,ts,tsx}",     // 根目录的文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}