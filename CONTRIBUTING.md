# Contributing

Use `templates/package/` as a starting point. Write for a bounded task, identify evidence requirements, and state capability limits. Keep credentials, personal data, private paths, executable payloads, and undeclared dependencies out of packages. Supporting references must be in the package directory and linked using relative paths from `SKILL.md`.

Run `npm test` in this repository before opening a pull request. Validate a complete store catalog with `talia-store/tools/talia-catalog-pack.cjs build --format 3`. Preserve the source license and include `LICENSE`, `NOTICE`, `README.md`, and `SKILL.md` in each distributable package. Shared general skills are selected explicitly by Talia desktop and the store; adding a skill here does not automatically bundle or publish it.
