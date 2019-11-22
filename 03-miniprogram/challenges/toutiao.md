# Toutiao

Today we'll make the mobile version of this popular app!


## Core User Journey Pages

### Landing Page (Story Index)

Stories have name and content, some have photos or videos (optional).

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191005060348073.png)

### Story Page (Story Show)

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191005060601357.png)

Stories have comments.

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191005060723295.png)

Comments have name, content, votes.



### Click create icon -> Create Pages

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191005061013131.png)


Users can create a tweet type Story with Photo and Location:

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191005061159237.png)

We'll use these functions in later course... For now, our story is like the question type - just text.

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191005061114431.png)

Refer to this handy guide if you need:

[Documentation](https://doc.minapp.com/open-api/data/record.html)


## Landing (Index) Page

`INDEX`: 1ST ENDPOINT

For the landing page, we have the `index` page again, with data from the `index` endpoint.
Tip: Use your FML frontend as starting point to save time. They are very similar!

### 1. Use API token (or key)

Where to find and how to use a token? Refer to this [documentation](https://doc.minapp.com/open-api/authentication.html).

```js
Token: 7a82a2b76c38e309ae34ff3c83c87f8409748b0e
```

Inside the header, in the form of a "Bearer Token":

```js
header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
```

### 2. Specify endpoint


Restful Verb and Path

```
GET /oserve/v1/table/84988/record/
```

Combine with host: `https://cloud.minapp.com/`

Do you know what the endpoint is?

```js
const index_endpoint = YOUR_ANSWER
```


Then put into a json:


``` js
{
  url: index_endpoint,
  method: 'GET'
  header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'} // API key from Above
}
```
We don't need to send data, so we can send off this request!

### 4. Send a request and **wait** for response

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;

    // Your code from above defining the request JSON
    wx.request(request);
    }
    // Get api data
  }
  //...
```

Tip: Not Working? Check your WeChat permission in Settings -> Project Settings.


### 5. Receive data from response

Two ways to get response...

- Define a page function to be included in the request json:

```js
const request = {
  //... request json from above
  success: page.getRequestData
}
```

```js
// /pages/index/index.js

Page({
  //...
  getRequestData: function (res) {
    console.log(res)
  },
  onLoad: function (options) {
    //...
  },
  //...
```

- or

```js
const request = {
  //... request json from above
  success(res) { console.log(res) }
}
```
A successful request show in the console.

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191006191759359.png)

Either way, after you console log the response, find and extract the stories data from the successful response. It could be one or two layers deep! E.g. `res.key1.key2`

```js
const stories = res.FIND_YOUR_DATA
```

Then you can pass the stories data to the next step.


Note:  Records now have extra data. That's ok - we're using a whole new backend system. You'll learn more about that soon. Focus on the data from columns you created and do not worry about the system data.


### 6. Handle the data

We can now set the data of the index page to the stories

```js
// /pages/index/index.js

  // after successful response, find stories from res:
  const stories = res.FIND_YOUR_DATA

  // Update local stories data
  page.setData({
    stories: stories
  });
```

Be careful where the code above is put - can you retrace the steps and find the right place?

Note the stories' IDs are not used - why are they there? You'll see next.

## Show Story

Getting data to show one story is very similar to getting all the stories for the index page. However the endpoint is different because of a different Restful API:

```
GET /oserve/v1/table/84988/record/:id/
```

This means your request will need a constant called id that is the same id as your story. With it you can make a request json at this endpoint

```js
{
  url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
  method: 'GET',
  header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'
}
```

But where do we get the `id` in the first place?

`id` can be found in the `options` of `onLoad` function:


```js
// /pages/show/show.js
Page({
  //...

  onLoad: function (options) {
    const id = options.id
    //...
  },
//...
```

This requires the navigation to include the `id` as a `param` in the `url` like below:


```js
// pages/index/index.js

Page({
  //...

  // binded to clicking on a story
  showStory(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },

```

But how do we know which story to show?

We take the `id` of the click event from `data-id` attribute of the story that was clicked in `index.xml`

For example:
```xml
<!-- /pages/index/index.wxml -->
<view data-id=3 bindtap="showStory" > Story 3 </view>
```
Remember in your actual `index.xml` to use mustache syntax to replace what was hard coded e.g.  `{{story.id}}` and `{{story.content}}`. You'll be looping over all the stories as well!

With this, you should be able to make a request to the show story endpoint!
Don't forget to set the data with the response:

```js
// in the request
success(res) {
  page.setData({
    story: res.data.objects
  })
}
```

Try to see if you can show the story when clicked from the story `index` page.


Now that we can show the story, its comments should follow. We want also be able to delete any comments we don't like ;-)

### Comments Index

You can **follow the same steps** for getting the all stories data to show all the comments. Only difference is that the `comments` Restful path is:

`/oserve/v1/table/85188/record/`

But how do we make sure that the comments belong to the story being shown?

We can use functions below to filter by comment's story! Use the code below as is. Filtering will be explained in detail in a future lecture!

```js
//in request json for all the comments
const request = {
  url: 'https://cloud.minapp.com/oserve/v1/table/85188/record/',
  method: 'GET',
  header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },

  data: {
    where: { // filtering comments for a specific story
      "story_id": { "$eq": id } // story id
    }
  },
  //... Don't forget to set the page data to comments from the response
}

```

Now we need the story `id` before we can request comments for it. We get that from the page in `onload` as before, both requests can go in there.



### Comments Delete

Restful API again gives us the endpoint address

```
DELETE /oserve/v1/table/85188/record/:id
```

Now we need the id of the comment to be used in the address above.

We add a `deleteComment` function to listen for the comment delete action.


```js
// pages/show/show.js

Page({
  //...

  // binded to delete button
  deleteComment(event) {
    const data = event.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above

      success() {
        // no need for response data
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  },
  //...
```

Where do we bind the id of comment to the event?

Hint: what DOM element is sending the event when delete is clicked?

Make sure you include the `data-id` attribute in each of the comments when you show them on the page!

```xml
<!-- pages/show/show.xml -->
<!-- in a loop over your comments -->
<view> {{comment.content}}
  <view data-id="{{comment.id}}" bindtap="deleteComment" > x </view>
</view>
```


### Comments Update

When the user clicks vote on a comment, its voting number should increase. Notice we have a `votes` field in the comments data:

![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191006192021558.png)



When you set the page data, the comments data also is stored into your page data.

Tip: `AppData` tab in the console is a good way to see and play with the data on your page!



![](https://github.com/dounan1/china-product/raw/master/03-miniprogram/challenges/images/image-20191006192344973.png)


So now we can get the votes if we add a `data-votes` attribute to our view

```xml
<!-- pages/show/show.xml -->
<!-- in a loop over your comments -->
<view> {{comment.content}}
  <!-- other comment fields -->
  <view data-id="{{comment.id}}" data-votes="{{comment.votes}}" bindtap="voteComment" > votes: {{comment.votes}} </view>
</view>
```


```js
// pages/show/show.js

Page({
  //...

  // binded to vote button
  voteComment(event) {
    page = this

    const data = event.currentTarget.dataset;
    votes = data.votes;
    const new_votes = { votes: votes + 1 }


    // make a PUT request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      data: new_votes,

      success(res) {
        // set comment data
        console.log(res)

      }
    });
  }
  //...
```

You see that a successful request returns the edited comment back in the response data. Now we can update this comment in our page.

Unfortunately, to update one comment, we need to update all the comments in the page data together. So 4 steps:

1. make a new comment from the response
2. get all the page comments
3. find the comment to be updated from 2.
4. update that comment with the new comment
5. get the page comments again


```js
// in success function above

success(res) {

  // new comment from response
  const new_comment = res.data

  // all the page comments
  let comments = page.data.comments

  // find the comment from page comments to update based on unique id
  let comment = comments.find(comment => comment._id == new_comment.id)

  // update comment
  comment.votes = new_comment.votes

  // update the page comments
  page.setData({comments: comments})

}

```

Pro Tip: Just on this particular api [from Minapp (more info)](https://doc.minapp.com/open-api/data/record.html#数据原子性更新), you can also tell it to subtract or add for you. That works for numbers and letters!

For numbers, you can do this for example to de-vote!

```js
  data: {
    "votes": {
      "$incr_by": -1
  }},
```


## Create Story
Now we're ready to create a new story

Using Restful API again

```
POST /oserve/v1/table/84988/record/

```

Find the endpoint

```js
const create_endpoint = YOUR_ENDPOINT_ADDRESS
```
  header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'} // API key from Above


Now we need to send data in the request like this

```js
wx.request({
  url: create_endpoint,
  method: 'POST',
  header: AUTHENTICATE_API_BEAR_TOKEN,
  data: story
  //...
})
```

So we find the form data from the submission event that comes automatically  when a form is submitted

```js
// pages/new/new.js

Page({
  //...

  // New Story Submission
  bindSubmit: function (event) {
    //...

    let name = event.detail.value.name;
    let content = event.detail.value.content;

    let story = {
      name: name,
      content: content
    }

    // Post data to API
    wx.request({
      url: create_endpoint,
      method: 'POST',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above

      data: story,
      success() {
        // no need for response data
        // reload index page when done
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    });
  }
  //...
```

We don't need to handle the response, but instead redirect back to the stories index page. Test it to see if works!

That should be all for today! Congratulations on making a complete Wechat Mini Program all in one day!
