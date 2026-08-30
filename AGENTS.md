# AGENTS.md

## Project

This repository is a static portfolio built with HTML, CSS, and vanilla JavaScript. It has no framework, npm configuration, bundler, build system, or compilation step.

## Working rules

- Inspect the relevant HTML, CSS, JavaScript, translation, and asset files before modifying them.
- Prefer the smallest change that satisfies the request.
- Do not refactor or reformat unrelated code.
- Do not introduce frameworks, npm, package managers, bundlers, build systems, or other dependencies unless explicitly requested and approved.
- Preserve compatibility with GitHub Pages and static hosting.
- Preserve the existing directory structure and root-relative URL behavior unless a requested change requires otherwise.
- Preserve the English/Spanish translation system in `translations/en.json`, `translations/es.json`, and `js/translations.js`.
- When changing translated user-facing content, keep both translation dictionaries consistent with the relevant `data-translate` attributes.
- Do not modify Google Analytics, Hotjar, EmailJS, Tableau, Power BI, CDN resources, or other external integrations without approval.
- Ask before deleting files, moving multiple files, or making broad structural changes.

## Validation

- Validate changes using the existing static project structure; there is no build command.
- Check affected local paths, links, selectors, translation keys, and asset references.
- When browser validation is needed, serve the repository root through a local HTTP server rather than opening files through `file://`.
- Do not add validation tooling or dependencies without approval.

## Sensitive files

- Do not modify secrets, credentials, environment files, or deployment configuration unless explicitly requested and approved.

## Reporting

- After making changes, summarize exactly which files changed and why.
- Report any validation that was performed and any remaining uncertainty.

## Git and deployment

- Do not commit automatically.
- Do not push.
- Do not merge.
- Do not deploy.
