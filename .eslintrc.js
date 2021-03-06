module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "React": "writable"
    },
    //config cho Absolute import
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["./"]
              }
        },
    },
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "jsx-a11y/anchor-is-valid": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": 0,
        "linebreak-style": 0,
        "import/order":"off"

    }
};