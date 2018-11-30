# Redirects [![Status](https://img.shields.io/website-up-down-green-red/https/www.anthony.codes.svg?label=status&style=flat-square)](https://www.anthony.codes) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/) [![Renovate](https://img.shields.io/badge/renovate-enabled-1f8ceb.svg?style=flat-square)](https://renovatebot.com/) [![Latest Release](https://img.shields.io/github/release/4cm4k1/redirects/all.svg?style=flat-square)](https://github.com/4cm4k1/redirects/releases) [![License](https://img.shields.io/github/license/4cm4k1/redirects.svg?style=flat-square)](license)

Redirects for my domains.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [License](#license)

## Prerequisites

- [Node](https://github.com/nodejs/node)
- [Now](https://github.com/zeit/now-cli) _(optional, if you want to deploy)_
- [Yarn](https://github.com/yarnpkg/yarn)

## Installation

```shell
git clone https://github.com/4cm4k1/redirects # clones this repo
cd redirects # changes directories
yarn # installs dependencies
```

## Usage

```shell
yarn dev # serves in dev mode at http://localhost:3000

yarn prettier # runs `prettier` on source files

now # deploys to Now (requires Now)
now alias # points `aliases` in `now.json` to deployment (requires Now)
```

## [Code of Conduct](.github/code_of_conduct.md)

## [Contributing](.github/contributing.md)

## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |

## [Changelog](changelog.md)

## License

[MIT](license) © [Anthony Maki](https://anthony.codes)
