## Background & Objectives

A simple challenge to manipulate basic HTML tags and create a profile card with headers, text, lists, and images.

## Setup

For ALL exercises for today, download this [boilerplate](https://github.com/dounan1/china-product/raw/master/01-design/exercises/CSS.zip) to get started!

Navigate inside `CSS/` and create a new repo on Github:


```bash
hub create # this creates the associated repo on Github!
```

Jump into your `profile` and create an `images` directory to store all your pictures:


```bash
cd CSS/01-Profile-content/profile
mkdir images
stt
```

## Local server

- Your file system can function as a server! Just open up the file in your web browser.
- ⚠️ Modern browsers cache the **file** returned by a given **url**. It keeps in memory a version of your HTML , CSS and even of your images! Sometimes, the older version remains and your newest code is not taken into consideration. To fix this, use `cmd(or ctrl) + shift + r` to **hard refresh** your page (this clears the cache in the process) . You can also hold down `shift` and click the refresh button.👌

## Specs

Build a simple HTML profile page with the following elements (use the right HTML tags):

- an image of yourself
- a header and sub-header with your name and your job title (you can put programmer now 💻)
- a description of yourself
- a button
- a list of your social links

A picture is worth a thousand words, [so here is what you should build in this challenge](https://lewagon.github.io/html-css-challenges/01-profile-content-new/)

## Further suggestions & resources

### Find **good** pictures

Prepare your profile image file before starting to code. For this exercise You can use your **profile picture from Facebook**, and save it in the `images` folder.

### HTML tips

- Don't forget the basic skeleton tags `<html>`, `<body>`, `<head>`.
- Don't forget the page `<title>` in the `<head>` section, and other important metatags like `<meta charset="utf-8">`.
- You can use [Font Awesome](https://fontawesome.com/icons) to find cool icons (e.g. for social networks). It's a super useful library because all of the icons are **fonts**, making it really easy to resize them, change their color, and even add animations to them!. To import Font Awesome, simply add this link into your `<head>`:

```html
<!-- Fontawesome Stylesheet -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
```

- You can use the `target="_blank"` attribute on your links to open them on new tabs once clicked.

## Indent or die

**Take your time to indent your HTML carefully**. HTML code has a lot of nesting - way more than ruby. If you don't indent, it's game over for your code!

Which code is easier to understand?

This one:

```html
<ul>
    <li><a href="#">
        <i class="fab fa-facebook-f"></i> Facebook
  </a>
</li><li>
  <a href="#">
    <i class="fab fa-linkedin-in"></i> Linkedin
      </a></li>
<li>  <a href="#">
  <i class="fab fa-twitter"></i> Twitter
    </a>
  </li>
    </ul>
```

Or this one:

```html
<ul>
  <li>
    <a href="#">
      <i class="fab fa-facebook-f"></i> Facebook
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fab fa-linkedin-in"></i> Linkedin
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fab fa-twitter"></i> Twitter
    </a>
  </li>
</ul>
```

Indent your HTML! Your code should look like a [V formation of ducks](https://upload.wikimedia.org/wikipedia/commons/0/0b/Eurasian_Cranes_migrating_to_Meyghan_Salt_Lake.jpg) 🦆🦆🦆!

## Finished?

Once you've finished you can push your work online:

```bash
# Push to your github
git add .
git commit -m "Added content to my profile page"
git push origin master
```



