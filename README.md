# The Silvertones

Band site for The Silvertones — a duo from St. Louis, MO.

Built with React + Vite, deployed to GitHub Pages at https://silvertoneslive.com.

## Development

```bash
nvm use     # uses Node 24 from .nvmrc
npm ci
npm run dev
```

Before editing locally, pull the latest changes from GitHub. Test your changes locally with `npm run dev` and `npm run build`.

## Publishing

Push changes to `main`, or merge a pull request into `main`. GitHub Actions builds and publishes the website automatically; your computer can be off. Pull requests run the build check without publishing.

Source code stays on `main`. Generated files stay out of `main` and are copied to `gh-pages` for reference. The workflow publishes the same build directly using GitHub Pages Actions, because automated branch pushes with `GITHUB_TOKEN` do not trigger branch-based Pages publishing.

Check the **Actions → Build and publish website** run for build and deployment status. To retry publishing the current `main`, select **Run workflow** on that workflow, or run `npm run deploy` with the authenticated GitHub CLI installed. This publishes the GitHub version of `main`, not uncommitted local changes.

Repository **Settings → Pages → Source** must be **GitHub Actions**. Keep the custom domain `silvertoneslive.com` and HTTPS enabled.

## Phone updates

In Codex cloud, select `sjamesadkins/music-site` and start from `main`. Attach an image or provide a YouTube link and describe the change. Review the pull request, confirm its build passes, and merge it into `main` to publish.
