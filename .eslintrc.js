module.exports = {
  root: true,
  env: {
    // 提供预设的全局变量，避免eslint检查报错，例如window
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json"],
  },
  rules: {
    "react/function-component-definition": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/no-danger": "off",
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "prettier/prettier": [
      "error",
      {
        singleAttributePerLine: false, // 不强制要求一个属性占一行
      },
    ],
  },
};

//     "@typescript-eslint/eslint-plugin": "^6.8.0",
// "@typescript-eslint/parser": "^6.8.0",
//     "eslint": "^8.52.0",
