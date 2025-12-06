import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.app.json",
        tsconfigRootDir: process.cwd(),
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      prettier,
    },

    rules: {
      // ======= React =======
      "react/no-unstable-nested-components": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "react/prop-types": "off",
      "react/jsx-key": "error",
      "react/destructuring-assignment": "off",
      "react/jsx-no-useless-fragment": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",

      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",

      "no-mixed-spaces-and-tabs": "error",
      "no-console": "warn",
      "no-alert": "error",
      "no-multi-spaces": "error",
      semi: "error",
      "no-duplicate-imports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "consistent-return": "off",
      "no-param-reassign": "off",

      "jsx-a11y/no-static-element-interactions": "off",

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],

      "max-len": [
        "error",
        {
          code: 100,
        },
      ],

      "comma-dangle": [
        "error",
        {
          arrays: "only-multiline",
          objects: "only-multiline",
          imports: "only-multiline",
          exports: "only-multiline",
          functions: "never",
        },
      ],

      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@shared/*/*",
            "@entities/*/*",
            "@features/*/*",
            "@widgets/*/*",
            "@pages/*/*",
            "@processes/*/*",
            "@app/*/*",
          ],
        },
      ],
    },
  },

  {
    files: ["src/**/*.test.*"],
    rules: {
      "import/no-extraneous-dependencies": "off",
    },
  },

  {
    files: ["src/**/*.slice.ts"],
    rules: { "no-param-reassign": "off" },
  },

  {
    files: ["src/shared/assets/**/*"],
    rules: { "max-len": "off" },
  },
];
