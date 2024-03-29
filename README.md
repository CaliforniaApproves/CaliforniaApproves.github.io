# CaliforniaApproves.org

React Based Website for CaliforniaApproves.org.

## Run Locally

```bash
npm install
npm run dev
```

available on localhost:3000

## Deployment

Deploy by pushing commits to the appropriate repository branch:

- main branch at `github.com:CaliforniaApproves/CaliforniaApproves.github.io`
- main branch at `github.com:CaliforniaApproves/californiaapproves.org`

Configuration is in `.github/workflows`.

### Set up the remotes

Your git remotes should look like this:

```bash
git remote -v
origin   git@github.com:CaliforniaApproves/CaliforniaApproves.github.io (fetch)
origin	git@github.com:CaliforniaApproves/CaliforniaApproves.github.io (push)
prod	git@github.com:CaliforniaApproves/californiaapproves.org (fetch)
prod	git@github.com:CaliforniaApproves/californiaapproves.org (push)
```

Add the prod repository with:

```bash
git remote add prod git@github.com:CaliforniaApproves/californiaapproves.org
```

### Deploy to Staging (californiaapproves.github.io)

1. Push to `main` in the staging repo, e.g. `git push origin main`
2. Observe the workflow progress on the [Actions page](https://github.com/CaliforniaApproves/CaliforniaApproves.github.io/actions)
3. Check that `californiaapproves.github.io` has your changes

### Production (californiaapproves.org)

**WARNING: This will update the main website! Test your changes on staging first!**

1. `git push prod main`
2. Observe the workflow progress on the [Actions page](https://github.com/CaliforniaApproves/californiaapproves.org/actions)
3. Check that `californiaapproves.org` has your changes
