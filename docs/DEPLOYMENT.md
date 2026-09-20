# Deployment

The project deploys as a Next.js application. `vercel.json` selects Next.js, `npm ci`
and the complete build command, including the Pagefind search index.

## Vercel

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
