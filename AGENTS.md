# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Hugo source for the Troupe 513 website. Site content lives in `content/en/`; each page uses a directory with an `index.md` file, such as `content/en/upcoming_shows/index.md`. Hugo template overrides are in `layouts/`, with shared components under `layouts/partials/` and Markdown render hooks under `layouts/_default/_markup/`. Put files that should be copied unchanged into `static/`; current images are in `static/images/` and sponsor art is in `static/images/sponsors/`. Custom theme CSS is maintained in `assets/ananke/css/main.css`. Site-wide settings belong in `config.toml`. Do not commit generated `public/` or `resources/` directories.

## Build, Test, and Development Commands

- `hugo server -D`: run a local preview, including draft content, with live reload.
- `hugo --minify -d public`: create the production build used by GitHub Actions.
- `hugo mod get -u`: update the Ananke theme dependency; review changes to both `go.mod` and `go.sum` before committing.
- `hugo mod tidy`: remove unused module dependencies after dependency changes.

Run commands from the repository root. A successful production build is the primary automated validation step.

## Coding Style & Naming Conventions

Use two-space indentation in Hugo HTML templates and TOML sections. Follow the existing Go-template spacing style (`{{ .Title }}`), keep reusable markup in partials, and avoid editing vendored social icons under `assets/ananke/socials/`. Use lowercase snake_case for content directories and image filenames (for example, `past_shows` and `main_banner.png`). Markdown pages should begin with YAML front matter containing at least `title`, `description`, and, where appropriate, `featured_image` and `menu.main.weight`. Reference static images with root-relative paths such as `/images/main_banner.png`.

## Testing Guidelines

There is currently no unit-test framework or coverage requirement. Before opening a pull request, run the production build and inspect affected pages through `hugo server -D`. Check navigation, external links, image loading, FAQ query links, and mobile layout. Treat Hugo warnings and broken resource references as failures.

## Commit & Pull Request Guidelines

Recent history uses short, imperative, change-focused subjects such as `updated sponsor logos` and `fix config.toml to remove publishDir`. Keep each commit scoped to one logical change. Pull requests should explain the user-visible result, list validation performed, and link any relevant issue. Include before/after screenshots for layout, styling, navigation, or image changes. Confirm that generated output is not included and that deployment-sensitive changes match `.github/workflows/deploy.yml`.
