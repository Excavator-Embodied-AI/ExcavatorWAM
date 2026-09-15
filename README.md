# ExcavatorWAM Project Page

Static anonymous project page for **ExcavatorWAM: A Unified Multimodal Model for Autonomous Loading**.

## Local preview

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. The site has no build step and no runtime dependencies.

## GitHub Pages

The site uses relative URLs and can be deployed directly from the repository root:

1. Push the tracked website files to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, then `main` and `/ (root)`.

## Anonymous-release policy

The current page intentionally omits authors, affiliations, email addresses, external repositories, dataset links, and BibTeX. Paper, code, dataset, and citation controls remain marked **Coming soon** until the anonymous-review constraint is lifted.

Before a public push, confirm that only `index.html`, `README.md`, `.nojekyll`, `.gitignore`, and `assets/` are tracked. The source-material directories contain large files and local tooling and must stay ignored.

## Asset policy

- `assets/images/` contains web-optimized figures and poster frames.
- `assets/videos/` contains web-optimized video derivatives only.
- Original videos, slides, diagrams, experiment records, and local scripts are excluded by `.gitignore`.

The technical-overview video omits an earlier sentence about partial sensor failure because the manuscript does not report a real sensor-failure experiment.
