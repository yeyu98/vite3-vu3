module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "airbnb-base",
    "plugin:prettier/recommended", // 添加 prettier 插件,
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    // 强制驼峰写法
    camelcase: "warn",
  },
};
