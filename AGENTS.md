# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Hugo source for the Troupe 513 website. Structured content lives in `content/en/`, including shows, seasons, people, board members, FAQs, sponsors, and venues. Hugo templates are in `layouts/`, with reusable components under `layouts/partials/` and Markdown render hooks under `layouts/_default/_markup/`. Put files copied unchanged into `static/`; images are in `static/images/`. The Tailwind v4 entry point and custom design system are in `assets/css/main.css`, while editable site-wide links live in `data/site.yml`. Pages CMS is configured through `.pages.yml`. Do not commit generated `public/` or `resources/` directories.

## Build, Test, and Development Commands

- `npm install`: install the pinned Tailwind CSS build dependencies.
- `npm run dev`: run a local Hugo preview, including draft content, with live reload.
- `npm run build`: create the warning-free production build used by GitHub Actions.

Run commands from the repository root. A successful production build is the primary automated validation step.

## Coding Style & Naming Conventions

Use two-space indentation in Hugo HTML templates and TOML sections. Follow the existing Go-template spacing style (`{{ .Title }}`), keep reusable markup in partials, and avoid editing vendored social icons under `assets/ananke/socials/`. Use lowercase kebab-case for new content filenames and lowercase snake_case for image filenames. Markdown records should preserve the fields declared for their collection in `.pages.yml`. Reference static images with root-relative paths such as `/images/main_banner.png`.

## Testing Guidelines

There is currently no unit-test framework or coverage requirement. Before opening a pull request, run the production build and inspect affected pages through `hugo server -D`. Check navigation, external links, image loading, FAQ query links, and mobile layout. Treat Hugo warnings and broken resource references as failures.

## Commit & Pull Request Guidelines

Recent history uses short, imperative, change-focused subjects such as `updated sponsor logos` and `fix config.toml to remove publishDir`. Keep each commit scoped to one logical change. Pull requests should explain the user-visible result, list validation performed, and link any relevant issue. Include before/after screenshots for layout, styling, navigation, or image changes. Confirm that generated output is not included and that deployment-sensitive changes match `.github/workflows/deploy.yml`.
