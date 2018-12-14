# Changelog

## 1.0.4

- Upgrades `@types/node`, `@types/supertest`, and `husky` to latest versions
- Uses `canary` version of `@now/node`
- Adds `routes[0].dest` and `github.autoJobCancelation` in `now.json`
- Adds requests’ path to `Location` header for better redirection and to avoid `404`s from Now
- Tweaks tests to account for the above
- Adds `test` to `.nowignore`
- Adds additional commands to `readme.md`

## 1.0.3

- Adds unit testing, snapshots, and code coverage reporting using `ava`, `codecov`, `env-cmd`, `nyc`, and `supertest` (**note:** `CODECOV_TOKEN` might be moved in future from `.env` file to `now.json` if/when Now 2.0 supports CI testing; then `.env` file and `env-cmd` can be removed)
- Adds `codecov` badge to `readme.md`
- Adds `pre-commit` and `pre-push` Git hooks to `husky` to run tests and upload code coverage

## 1.0.2

- Updates `readme.md` and `contributing.md`
- Renames this project from `redirects` to `domain-redirects`
- Adds [FOSSA](https://github.com/fossas/fossa-cli) integration
- Adds `@types` for `micro` and `node`

## 1.0.1

- Improves [`readme.md`](readme.md) instructions

## 1.0.0

- Initial release
