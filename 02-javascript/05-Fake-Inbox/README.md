## Background & Objectives

Famously Google built gmail in JS, one of the first application built entirely frontend! So we pay tribute to the early days of frontend web apps.

Think about the Gmail inbox interface. Do you need to refresh the page for new mail to show up? The answer is **no** of course! Sites like Gmail periodically fetch new emails and add them to the top of the list. So it's adding new content to the _DOM_ **after** the initial page load.

## Specs

We haven't seen APIs yet, so we'll simulate email fetching for now. We have given you a skeleton in `lib/inbox.js` to get you started. Download the [template](https://github.com/dounan1/china-product/blob/master/02-javascript/challenges/05-Fake-Inbox.zip) and open this file in Sublime.

- Implement the method `hasNewMessage()` that has a 20% probability of returning `true` (the rest of the time, it returns `false`).
- Implement the method `newMessage()` which should return a random object (i.e. a new email) with `subject` and `sender` keys. For instance:

```js
{
  sender: 'GitHub Team',
  subject: 'Welcome to GitHub'
}
```

or

```js
{
  sender: 'Arnold Schwarzenegger',
  subject: "I'm Back"
}
```


Now, we'll work by opening the `index.html` file and testing the code in the browser.



### Build a mailbox

Implement the method `appendMessageToDom(message)` which takes an object with `subject` and `sender` keys as parameters, and appends a new line for this message to the HTML markup. Inspect the `index.html` file to find examples for `unread` and `read` rows



### Check the mail

Then, let's glue everything together. As you can see at the bottom of the file, the `refresh` method is called every `1000` milliseconds. Implement your `hasNewMessage()` method, and if there is a new message, add it (`newMessage()`) to the top of the inbox (`appendMessageToDom(message)`). Remember to update the counter in the `h1` title

Update the [web page document title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) so that the unread message counter appears in your tab title like a real inbox!



### Get real server data

In the `newMessage()` function, instead of returning dummy data, we want to show data from a service on the internet. These are call **servers**. They are computers that you can connect to on the web.

How does this work? Open this address in your browser: `fml.shanghaiwogeng.com/api/v1/stories`





![image-20191011021144672](https://github.com/dounan1/china-product/tree/master/02-javascript/challenges/05-Fake-Inbox/images/image-20191011021144672.png)

Can you see the data? It looks just like a Javascript object that you've been using to store data like the dummy messages. The object is called a  **JSON**. It's meant for machines to read. That's why it's not like a web page with style and UI. Turns out your browser can access these **"web pages" for machines** too!



So applications (or apps) can pass data to each other over the web with JSON. The app that stores the data is called a **Backend**. The app that uses the data and interfaces with users is called a **Frontend**.

In particular, a backend app that sends (and receives) JSON is commonly called an **API**. Its web address is called an **API endpoint**. It looks just like a website address.



So we can use this API data as our emails!

Notice  `name` and `text` values match the `sender` and `subject`.

Adapt your code for this new data labeling but same format, so not much changes!

How do you request an API for data in your code?

With a [function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) called `.fetch()`:

```js
// request API for data (endpoint is the url)
fetch(url).then((response) => {
  // Do something once API response data is received
});
```

For our API endpoint:

```js
fetch("https://fml.shanghaiwogeng.com/api/v1/stories")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
```

Now you can return this data in `newMessage()`:

```js
const newMessage = () => {
  fetch("https://fml.shanghaiwogeng.com/api/v1/stories")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    // Add your code to get `name` and `text` values from data and put into the `sender` and `subject` message object.

    return message; //give message object to next function
  });
};
```

Before you run this, you might want to allow local files to call APIs. The browser blocks this for security reasons, but we can disable that by running the browser with this command in the terminal:


On Windows 10:
```bash
 "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --allow-file-access --allow-cross-origin-auth-prompt
```

On Mac OSX:

```bash
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --allow-file-access-from-files --allow-file-access --allow-cross-origin-auth-prompt
```

In an upcoming challenge, you and your classmates will be posting your own content to this API backend! Open up this email app again then and see live messages come up!



