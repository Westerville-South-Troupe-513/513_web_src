# Troupe 513 Website

Source code and content for the [Westerville South Troupe 513](https://wshstheatre.org) website. The site is built with [Hugo](https://gohugo.io/) and the Ananke theme, then published to GitHub Pages.

## Prerequisites

Install the following before working locally:

- Hugo Extended
- Go 1.24 or later (used to resolve the theme module)
- Git

On macOS, Hugo can be installed with Homebrew:

```sh
brew install hugo
```

Verify that your shell is using the Extended edition:

```sh
hugo version
```

The output must include `+extended`. If it does not, check for another installation with `which -a hugo`, then reinstall the Homebrew build with `brew reinstall hugo` and restart the shell (or run `hash -r`). The Ananke theme uses LibSass and cannot build with Hugo's standard edition.

## Local Development

Clone the repository and start Hugo's development server:

```sh
git clone https://github.com/Westerville-South-Troupe-513/513_web_src.git
cd 513_web_src
hugo server -D
```

Open the local URL shown in the terminal, typically `http://localhost:1313`. Hugo watches source files and reloads the browser as changes are saved.

Create a production build with:

```sh
hugo --minify -d public
```

The generated `public/` directory is ignored by Git and should not be committed.

## Repository Structure

```text
content/en/           Page content and front matter
layouts/              Hugo templates and theme overrides
layouts/partials/     Shared header, footer, and navigation markup
assets/ananke/css/    Custom site styles
static/images/        Images, icons, and sponsor artwork
config.toml           Hugo and site-wide configuration
.github/workflows/    GitHub Pages deployment workflow
```

## Updating Content

Each page is stored as an `index.md` file in `content/en/`. For example, upcoming productions are maintained in `content/en/upcoming_shows/index.md`. Preserve the YAML front matter at the top of each file:

```yaml
---
title: "Upcoming Shows"
description: "Check out our upcoming productions!"
featured_image: "/images/upcoming_banner_1.png"
menu:
  main:
    weight: 5
---
```

Add images to `static/images/` and reference them from content as `/images/filename.png`. Use lowercase snake_case filenames to match the existing convention.

## Validation

There is no automated test suite. Before submitting a change:

1. Run `hugo --minify -d public` and resolve all errors or warnings.
2. Preview affected pages with `hugo server -D`.
3. Check navigation, images, external links, and mobile layout.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow:

1. Checks out the full Git history and submodules.
2. Installs the latest Hugo Extended release.
3. Runs `hugo --minify -d public`.
4. Uses the repository `GITHUB_TOKEN` to publish `public/` to `gh-pages`.

GitHub Pages serves the generated `gh-pages` branch at the custom domain configured by its `CNAME` file: `wshstheatre.org`. That file currently exists only on `gh-pages`; it is not generated from `main` or explicitly configured in the workflow. After a deployment, confirm that the custom domain remains configured. If it is removed, restore it in the repository's Pages settings and update the deployment workflow to preserve the CNAME.

Do not edit ordinary generated files on `gh-pages`; content and layout changes belong on `main`. To troubleshoot a failed release, open the repository's **Actions** tab, select **Build and Deploy Hugo to GH Pages**, and inspect the failed checkout, build, or deploy step. The workflow requires repository Actions to have permission to write contents so it can update `gh-pages`.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, validation, and pull request instructions. Project contributors and community acknowledgements are listed in [contributors.md](contributors.md). Repository-specific conventions are documented in [AGENTS.md](AGENTS.md).

## License

This repository is made available under the [CC0 1.0 Universal](LICENSE) dedication.
