# William Guiñansaca Portfolio

This repository contains William Guiñansaca's personal portfolio website. It is a static, bilingual site that presents professional information and individual project case studies.

The site is implemented directly with HTML, CSS, and browser JavaScript. It does not use a frontend framework, backend, package manager, bundler, build step, or automated test suite.

## Technology stack

- HTML5
- CSS3 with responsive media queries
- Vanilla JavaScript
- JSON translation dictionaries for English and Spanish
- Static hosting compatible with GitHub Pages

The site also loads several external browser services and resources:

- EmailJS for contact-form delivery
- Bootstrap Icons and Font Awesome
- Google Fonts
- Google Analytics and Hotjar
- Tableau and Power BI content embedded in project pages

These external resources require an internet connection to work during local development.

## Repository structure

```text
.
├── index.html          # Main portfolio page
├── main.css           # Styles for the main page
├── script.js          # Main-page menu and contact-form behavior
├── css/
│   └── projects.css   # Shared styles for project pages
├── js/
│   ├── translations.js
│   ├── menu-header.js
│   └── flechas-desplazamiento.js
├── projects/          # Standalone HTML project case studies
├── translations/
│   ├── en.json
│   └── es.json
├── images/            # Site images, icons, diagrams, and presentation assets
├── docs/              # Portfolio strategy, restructuring plan, and case-study guidance
└── templates/         # Generic documentation templates; not authoritative project architecture
```

The main page contains the home, technology stack, about, portfolio, and contact sections. Each file in `projects/` is an independent project-detail page that shares `css/projects.css` and selected scripts from `js/`.

## Local development

Clone the repository, change into its root directory, and serve it with a local HTTP server. For example, with Python 3:

```bash
git clone https://github.com/guinansacaw/guinansacaw.github.io.git
cd guinansacaw.github.io
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Run the server from the repository root. The site uses root-relative paths such as `/images/...`, `/projects/...`, and `/translations/...`, and the translation dictionaries are loaded with `fetch()`. Opening `index.html` directly through `file://` will not reproduce the intended environment and may prevent translations from loading.

There is no dependency-installation command and no development server supplied by the project.

## Translations

User-facing content is connected to translation entries through `data-translate` attributes in the HTML. The browser loads either `translations/en.json` or `translations/es.json` through `js/translations.js`, and the selected language is stored in `localStorage`.

When changing translated content, keep the HTML translation keys and both JSON dictionaries consistent.

## Build and validation

There is no build command. The checked-in HTML, CSS, JavaScript, JSON, and assets are the deployable site.

For manual validation:

1. Start a local HTTP server from the repository root.
2. Open the main page and any affected files under `projects/`.
3. Check navigation, local asset paths, responsive layout, and browser-console errors.
4. If translated content changed, verify both English and Spanish.

There are no npm scripts, linters, or automated tests configured in the repository.

## Project documentation

The `docs/` directory contains strategy and restructuring documents. Some items described there are planned work and are not necessarily implemented in the current website. This README documents the repository as it exists now.

Files under `templates/` are generic working templates and should not be treated as descriptions of this site's technology or architecture.
