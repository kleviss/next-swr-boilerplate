/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "babel-plugin-module-resolver",
  "eslint-plugin-import",
  "eslint-import-resolver-babel-module",
  "babel-preset-react-app",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: "loose" },
});
