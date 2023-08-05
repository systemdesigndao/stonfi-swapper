const IN_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    require('tailwindcss')(),
    require('autoprefixer')(),
    IN_PRODUCTION && require('cssnano')(),
  ]
}