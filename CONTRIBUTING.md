# Contributing to the Troupe 513 Website

Thank you for helping maintain the Westerville South Troupe 513 website. Contributions may include updating show information, correcting content, adding sponsor assets, improving templates, or refining documentation.

## Before You Begin

Install Git, Go 1.24 or later, and Hugo Extended. Confirm that `hugo version` includes `+extended`; the Ananke theme's styles cannot be built with Hugo's standard edition.

Create a focused branch from the latest `main`:

```sh
git switch main
git pull
git switch -c update/upcoming-shows
```

## Making Changes

- Edit page content under `content/en/`.
- Put images in `static/images/` and use lowercase snake_case filenames.
- Keep shared templates in `layouts/partials/`.
- Maintain custom styles in `assets/ananke/css/main.css`.
- Do not commit generated `public/`, `resources/`, or `.hugo_build.lock` files.
- Do not edit `gh-pages`; GitHub Actions generates that branch from `main`.

Preserve existing front matter when editing Markdown pages. Reference static images with root-relative paths such as `/images/show_logo.png`.

## Validate Your Work

Start a local preview:

```sh
hugo server -D
```

Check affected pages at the local URL printed by Hugo. Verify navigation, images, links, and responsive layout. Then run the production command used by GitHub Actions:

```sh
hugo --minify -d public
```

The current Ananke dependency may emit Hugo language API deprecation warnings. These warnings are known; build errors must be resolved before submitting a change.

## Commits and Pull Requests

Use short, descriptive commit subjects and keep each commit focused on one logical change. In a pull request:

- Explain the user-visible result.
- List the checks you performed.
- Link any relevant issue.
- Include before-and-after screenshots for visual changes.

After deployment-related changes, confirm that GitHub Pages still serves `wshstheatre.org` and that the `CNAME` remains present on `gh-pages`.

## Contributor Recognition

Contributors are acknowledged in [contributors.md](contributors.md). Include an update when a new contributor should be recognized or when an existing description needs correction.
