# Troupe 513 Website

Source code and content for the [Westerville South Theatre](https://wshstheatre.org) website. The site uses Hugo, Tailwind CSS v4, Pages CMS, and GitHub Pages.

## Prerequisites

Install the following before working locally:

- Hugo Extended 0.164.0
- Node.js 22 or later
- Git

On macOS, Hugo can be installed with Homebrew:

```sh
brew install hugo
```

Verify that your shell is using the Extended edition:

```sh
hugo version
```

The output must include `+extended`. Tailwind is compiled through Hugo's CSS pipeline using the npm CLI dependency.

## Local Development

Clone the repository and start Hugo's development server:

```sh
git clone https://github.com/Westerville-South-Troupe-513/513_web_src.git
cd 513_web_src
npm install
hugo server -D
```

Open the local URL shown in the terminal, typically `http://localhost:1313`. Hugo watches source files and reloads the browser as changes are saved.

Create a production build with:

```sh
npm run build
```

The generated `public/` directory is ignored by Git and should not be committed.

## Repository Structure

```text
content/en/shows/     Current and archived show records
content/en/faqs/      Structured FAQ entries
content/en/           Other page and collection content
layouts/              Custom Hugo templates
layouts/partials/     Shared components
assets/css/           Tailwind entry point and design system
assets/js/            Minimal progressive enhancement scripts
static/images/        Images, posters, and sponsor artwork
data/site.yml         Editable site-wide links and contact settings
.pages.yml            Pages CMS collections and fields
.github/workflows/    Scheduled GitHub Pages deployment
```

## Updating Content

Nontechnical editors can update shows, seasons, people, board members, sponsors, FAQs, venues, and core pages through Pages CMS. GitHub remains the canonical content store, and CMS saves trigger the normal deployment workflow.

Show records live in `content/en/shows/`. A current show begins with structured front matter such as:

```yaml
---
title: "Lost Girl"
slug: "lost-girl"
season: "2026-27"
show_type: "Fall Play"
program: "main-stage"
production_format: "play"
opening_date: 2026-10-02
closing_date: 2026-10-04
date_display: "October 2–4, 2026"
---
```

Use `program` to place a production in the Main Stage, student-directed, one-act, or special-event presentation. Student productions can also include `student_directors`; one-act titles can be added later through the repeatable `works` field in Pages CMS.

Add images to `static/images/` and reference them as `/images/filename.png`. Pages CMS safely renames uploaded media.

## Validation

There is no automated test suite. Before submitting a change:

1. Run `npm run build` and resolve all errors or warnings. The build cleans stale generated output before rendering.
2. Preview affected pages with `hugo server -D`.
3. Check navigation, images, external links, and mobile layout.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow:

1. Checks out the repository.
2. Installs Node.js, Tailwind dependencies, and Hugo Extended 0.164.0.
3. Runs a warning-free production build.
4. Uses the repository `GITHUB_TOKEN` to publish `public/` to `gh-pages` and preserve the custom domain.

The workflow also runs daily so date-derived show statuses move from Coming Soon to Now Playing and Closed without requiring a content edit.

GitHub Pages serves the generated `gh-pages` branch at `wshstheatre.org`. The deployment action writes the required `CNAME` on each release.

Do not edit ordinary generated files on `gh-pages`; content and layout changes belong on `main`. To troubleshoot a failed release, open the repository's **Actions** tab, select **Build and Deploy Hugo to GH Pages**, and inspect the failed checkout, build, or deploy step. The workflow requires repository Actions to have permission to write contents so it can update `gh-pages`.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, validation, and pull request instructions. Project contributors and community acknowledgements are listed in [contributors.md](contributors.md). Repository-specific conventions are documented in [AGENTS.md](AGENTS.md).

## License

This repository is made available under the [CC0 1.0 Universal](LICENSE) dedication.
