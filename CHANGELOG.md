# Changelog

All notable changes to the **Slides** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.1] - 2020-02-06

### Fixed

- In recent versions of VS Code, settings didn't have time to be saved before opening the slides, resulting in a non-functionning behavior. We now give enough time to the editor to save the settings before opening the slides, so *it works*™.

## [3.2.0] - 2019-12-09

### Changed

- If you set `previewMarkdownFiles` to `true`, all Markdown previews will open instead of the raw files when presentation starts. That means no more glitches when moving to the next slide 👌

![Demo of the improvement][preview-markdown-files-without-glitch]

## [3.1.0] - 2019-12-02

### Added

- New setting called `folder`. If you prefer to put your slides in a subfolder, you can configure the relative path to this folder.

- New setting called `previewMarkdownFiles`. When `true` it uses preview mode for Markdown slides. When the user moves away from the Markdown slide, the preview is closed and regenerated for the next Markdown file:

![Demo of preview markdown files setting][preview-markdown-files]

## [3.0.0] - 2019-11-23

### Changed

- **(Breaking)** Change keybinding for Windows and Linux users, so it doesn't conflict with VS Code defaults one. Now you'd use `Ctrl Shift Alt →` to go to the next slide and `Ctrl Shift Alt ←` to go to the previous one.

## [2.0.3] - 2019-11-19

### Fixed

- Workspace folder path on Windows, so the extension can work

## [2.0.2] - 2019-11-19

### Fixed

- Make path to settings OS agnostic, so the extension can work on Windows too

## [2.0.1] - 2019-11-03

### Fixed

- When you have a large number of slides (like 60+), Slides will open all of them in the correct order. It won't be instant, but it will be in the correct order (and still quite fast).

## [2.0.0] - 2019-10-26

### Breaking changes

- Leverage VS Code workspace data storage to persist the state. Slides won't create a `.vscode-slides.json` in your workspace anymore, which is great! But that means it won't rely on the existing ones, so **it will consider current settings to be the default ones**. You might need to reset them manually.

### Added

- Make **theme** and **font family** configurable.

## [1.0.0] - 2019-10-24

### Added

- Improve README instructions to get started with the Extension

## [0.2.1] - 2019-10-24

### Fixed

- Specify macOS shortcuts for navigation so they work too

## [0.2.0] - 2019-10-23

### Breaking changes

- Change navigation shortcuts to use `Ctrl` instead of `Alt`, so we don't override standard shortcuts as it's a less common combination.

### Fixed

- Make the extension work when workspace has no settings set.
- Gracefully handle when files can't be open.
- Give VS Code enough time so we're sure we open all slides & we focus on the first one.

## [0.1.0] - 2019-10-22

### Added

- **Toggle Slides mode**. It applies optimized settings for VS Code when activated, and reset original settings when deactivated.
- **Open all files in alphabetical order** when activated.
- **Shortcuts to navigate between slides** when activated.
- **Shortcut to deactivate Slides** when activated.

[unreleased]: https://github.com/nicoespeon/vscode-slides/compare/3.2.1...HEAD
[3.2.1]: https://github.com/nicoespeon/vscode-slides/compare/3.2.0...3.2.1
[3.2.0]: https://github.com/nicoespeon/vscode-slides/compare/3.1.0...3.2.0
[3.1.0]: https://github.com/nicoespeon/vscode-slides/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/nicoespeon/vscode-slides/compare/2.0.3...3.0.0
[2.0.3]: https://github.com/nicoespeon/vscode-slides/compare/2.0.2...2.0.3
[2.0.2]: https://github.com/nicoespeon/vscode-slides/compare/2.0.1...2.0.2
[2.0.1]: https://github.com/nicoespeon/vscode-slides/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/nicoespeon/vscode-slides/compare/1.0.0...2.0.0
[1.0.0]: https://github.com/nicoespeon/vscode-slides/compare/0.2.1...1.0.0
[0.2.1]: https://github.com/nicoespeon/vscode-slides/compare/0.2.0...0.2.1
[0.2.0]: https://github.com/nicoespeon/vscode-slides/compare/0.1.0...0.2.0
[0.1.0]: https://github.com/nicoespeon/vscode-slides/compare/8fdc599d586b5ad4614d038d232c840eeebe2412...0.1.0

<!-- Assets -->

[preview-markdown-files]: https://github.com/nicoespeon/vscode-slides/blob/master/assets/features/preview-markdown-files.gif?raw=true
[preview-markdown-files-without-glitch]: https://github.com/nicoespeon/vscode-slides/blob/master/assets/features/preview-markdown-files-without-glitch.gif?raw=true
