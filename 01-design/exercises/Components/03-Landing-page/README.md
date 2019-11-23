## Background & Objectives

Now that we have had some practice building some basic components, let's see how we can use them and combine them to make a real landing page! Any website has to have a **beautiful landing page**. They are important as they're the first page visitors will see and it needs to be good enough to convert them into clients 💰.
In this challenge you will reproduce a classic landing page design like [this one](https://arthur-littm.github.io/startup-landing/)!

Again for ALL exercises today, start with the template that you can download from the first exercise!

Your landing page should **at least** include:

- A **Hero / Banner** section presenting your product with a call to action.
- A **How it works** section (what components could be used to break down the different aspects of your product/service) .
- A **Footer**.

## Mockup

⚠️ **Never start coding a page without knowing how it will look!**


In the coming weeks you will learn how to mockup your pages like a pro using [Figma](https://www.figma.com/), but for today you can use a pen and paper to design the different sections of your page.

For this exercise, you should have something like this.

<div class="text-center">
  <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/startup-landing-drawing.png" alt="" width="100%">
</div>

⚠️ If you're not 100% certain you have the right structure drawn, ask a teacher to confirm before starting to code!

## Specs

Build a landing page with the following elements:

- A **Hero / Banner** section presenting your product.
- A **How it works** section.
- A **Footer**.

## Further suggestions & resources

- [Flexbox](https://kitt.lewagon.com/knowledge/cheatsheets/flexbox)
- [Good google fonts pairs](https://fontpair.co/)
- [Startup illustrations](https://undraw.co/illustrations)
- [Icons](https://www.flaticon.com/)
- [Coolors](https://colorhunt.co/)

## Finished?

Once you've finished you can push your page to [Github pages](https://pages.github.com) once again:

First, copy the project out of `CSS/` so we can track it as a separate `git` project:

```bash
cp -r ../03-Landing-page/landing ~/code/$GITHUB_USERNAME
cd ~/code/$GITHUB_USERNAME/landing
```

Then, start tracking the project with `git` and push to a `gh-pages` branch:

```bash
git init
git add .
git commit -m "my landing page"
hub create
git push origin master # push to master first
# then puts to a `gh-pages` branch
git co -b gh-pages
git push origin gh-pages
```
