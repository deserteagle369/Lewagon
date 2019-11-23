## Setup

Let copy our profile to its own location and version it with `git` as a separate project.

```bash
cp -r profile ~/code/$GITHUB_USERNAME
cd ~/code/$GITHUB_USERNAME/profile
```

## Create the Github repo

If not done yet, let's install the `hub` to create a Github repo from your terminal without opening your browser (very useful when you are lazy 😉)

You can find and install from its [repo](https://github.com/github/hub/releases)

Now you can **init**(ialize) a git repository, commit your changes, and create the associated Github repo:

```bash
git init
git add .
git commit -m "my profile page"
hub create # this creates the associated repo on Github!
```

To open the Github repo from your browser you can run:

```bash
hub browse
```

## Github Pages

[Github Pages](https://pages.github.com/) is a sub-service of Github that makes it easy to deploy any **static website** in 10 seconds (static == not a Rails app). It is based on a "magic" branch, called `gh-pages`. When Github detects this branch, it puts your website online. Awesome right? Let's create this magic branch and push it. ✨🌿✨

```bash
git co -b gh-pages
git push origin gh-pages # we push the gh-pages branch, not master!
```

Now you can build the URL `http://YOURUSERNAME.github.io/profile/` (this is the URL built automatically by Github) and have a look at your masterpiece online!
