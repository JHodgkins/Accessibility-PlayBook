# Deployment

## GitHub Pages

The public site is published at https://jhodgkins.github.io/Accessibility-PlayBook/.
In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**.
Use the committed workflow; do not add GitHub's suggested Next.js template alongside it.

`.github/workflows/ci-deploy.yml` (displayed as **Check and deploy playbook**) runs
quality checks on pushes and pull requests. It then builds and tests the static
export. Successful pushes to `main` publish `out/` through the `github-pages`
environment. Other branches and pull requests run checks without publishing.
The workflow can also be started from the Actions tab using **Run workflow** on `main`.
Deployment uses GitHub's built-in token; no personal token is needed.

The Pages build uses `/Accessibility-PlayBook` as its base path and generates the
search index in `out/_pagefind`. Neither `public/` nor `.next/` is the complete Pages
website. Build output is generated in CI and is not committed.

### Updating documentation

1. With a clean working tree, run `git switch main` and `git pull --ff-only`.
2. Run `npm ci`, then `npm run build` to generate the local search index.
3. Run `npm run dev` and open http://localhost:3000.
4. Edit `.mdx` files in `content/`. Update the section's `_meta.js` when adding pages.
   Saved content updates the preview; rebuild to refresh search results.
5. Review the content and links. Stop the development server, install Chromium with
   `npx playwright install chromium` if needed, then run `npm run check`.
6. For deployment changes, also run `npm run build:pages` and `npm run test:pages`.
   The latter serves the export temporarily and checks every route, links and search.
7. Review the diff, stage the intended files, commit with a descriptive message and
   push to `main`. For team review, use a pull request and merge after approval.
8. Watch **Actions → Check and deploy playbook**. Open the published site after the
   deployment succeeds and review the changed pages.

Failed checks prevent publishing; the existing site remains available. Open the failed
job's logs, fix the issue and push again. Saving locally or creating an unmerged pull
request does not update the public site. Automated checks do not replace content review
or manual accessibility evaluation.

The Pages build replaces the local `.next` output. Run `npm run build` again before
using `npm run start` for the ordinary Node preview.

For rollback, revert the problematic commit and push the revert to `main`; the same
checks and deployment process publish the restored content.

See GitHub's [custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
and Next.js [static exports](https://nextjs.org/docs/15/app/guides/static-exports).

## Vercel

For alternative hosting, `vercel.json` selects Next.js, `npm ci` and the complete
build command, including Pagefind. Leave `PLAYBOOK_PAGES` unset for Vercel or Node hosting.

1. Import `JHodgkins/Accessibility-PlayBook`.
2. Use Node.js 22 and the repository root as the project directory.
3. Set `VERCEL_DEEP_CLONE=true` for complete Git timestamps.
4. Run the configured build. Do not replace it with `next build`, which omits search indexing.
5. Review the preview with the manual checklist in [Testing and accessibility](TESTING.md) before promotion.

No application secrets or external services are required. The project is designed
for the domain root; a subpath deployment needs separate route/search configuration.

## Node hosting

Run `npm ci`, `npm run build`, then `npm run start`. Preserve `.next`, `public`,
`node_modules` and the package files together. Serve the application through the
host's normal HTTPS proxy and process manager. Do not deploy only `.next`: the
Pagefind assets live in `public/_pagefind`.

## Quality gate and rollback

Run `npm run check` before deployment. CI uploads browser traces and reports even
when checks fail. Configure the hosting/repository protection settings to require
the quality job; the workflow file alone does not enforce branch protection.

After deployment, check the homepage, both deep dives, navigation and a search for
“modal”. For rollback, redeploy the previous known-good commit including its generated
search index. Record outstanding accessibility findings before promoting a release.
