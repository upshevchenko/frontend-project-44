import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": [
        "error", 
        { 
          "vars": "all",
          "args": "after-used",
          "ignoreRestSiblings": true,
          "varsIgnorePattern": "^_", 
          "argsIgnorePattern": "^_"  
        }
      ]
    }
  },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { globals: globals.node } 
  },
]);