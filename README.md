# eslint-plugin-fw-react

ESLint plugin to enforce custom rules for our React applications.

## Installation

```sh
pnpm add -D eslint-plugin-fw-react
```

## Usage

Add `fw-react` to the plugins section of your `.eslintrc` configuration file. Then, configure the rules you want to use under the rules section.

```json
{
  "plugins": ["fw-react"],
  "rules": {
    "fw-react/tailwind-class-suggestionr": "warn"
  }
}
```

OR

You can extend our recommended config

```json
{
  "extends": [
    // ...
    "plugin:fw-react/recommended"
  ]
}
```
