# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.2.0] - 2016-11-30
### Added
- Added Snyk vulnerability monitoring and patching

### Changed
- Updated devDependencies and added Snyk scripts to [package.json]

## [2.1.2] - 2016-11-30
### Changed
- Updated from `node-uuid` to `uuid`, per the author
- Switched to using only `uuid/v4` for a smaller footprint

## [2.1.1] - 2016-11-13
### Added
- Add dist files to npm package

### Changed
- Add files list to [package.json]

## [2.1.0] - 2016-11-06
### Added
- Add browser support with Browserify as proposed by [voronianski](https://github.com/voronianski)
- Include `grunt-mkdir` to support build process
- Include `grunt-browserify` to support build process
- Include `grunt-contrib-uglify` to support build process
- Add example/index.html for Browserify demo
- Add various dotfiles for CodeClimate configs

### Changed
- Add to [gruntfile.js] for new modules
- Add to [package.json] for build command
- Add dist folder to [.gitignore]
- Update [revisions.md]
- Update [README.md] with Browserify details

## [2.0.0] - 2016-06-19
### Added
- Include `node-uuid` so we can generate our own UUIDs.
- Add `.new()` to the translator object to generate a translated v4 UUID.
- Add `.alphabet` to the translator object so you can inspect the alphabet.
- Expose `.uuid()` for v4 UUID generation on the export *and* on each translator, for convenience.
- Added this change log.
- Added [revisions.md] for tracking usage of old versions.
- Added tests for new UUID generation, defaults, and exposed alphabet.

### Changed
- Use a Constructor rather than needing to call .new() against the export.
- Default flickrBase58 alphabet if none is provided.
- Changed to IIFE for better minification.
- Changed tests for updated object format.

### Removed
- Remove the pre-built `.b58` library so we don't waste resources.
- Remove `.toHex()` and `.fromHex()` from the translators. Use `any-base` directly if needed.

## 1.0.0 - 2016-06-10
### Added
- Provide `.new()` to create a translator.
- Provide `.constants` for useful alphabets
 - `flickrBase58` is meant to reduce human transcription errors
 - `cookieBase90` provides the characters supported by cookies for the smallest cookie-safe UUIDs
- Provide `.fromUUID()` and `.toUUID()` from the translators.
- Provide `.toHex()` and `.fromHex()` from the translators.
- Provide the flickrBase58 translator by default as `.b58`

[2.0.0]: https://github.com/oculus42/short-uuid/compare/v1.0.0...v2.0.0
