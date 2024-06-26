# NextGram

This is a sample Next.js application that takes advantage of the advanced routing capabilities.

The photo route can be attached to _two distinct_ components:

1. When navigating within the application, it is rendered as a modal
2. When the page is refreshed, it is rendered as a standalone page

## Parallel routing Issue

If the connection is slow and the user has time to click on the photo before the hydration completes, 
then next/Link will act as tag \<a href=‘/photos/[id]’>, which will cause the page to reload completely instead of showing a modal window.

[demo.mp4](https://raw.githubusercontent.com/a-k-kord/nextgram-with-img/main/demo.mp4)

## Demo

[https://nextgram-with-img.vercel.app](https://nextgram-with-img.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextgram-with-img)
