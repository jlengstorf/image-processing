# Parallelized Image Processing in Gatsby

This site is designed to make Gatsby work _really_ hard to process images. To do that, it:

1. Has 200+ images ranging from 1–5MB committed to the repo to put additional memory strain on Sharp
2. Loads all of the images in one page at a small, fixed size
3. Loads each image on its own page at a different, fluid sizes

This makes Gatsby earn it — on a 2017 MacBook Pro with 16GB of memory, it takes upwards of 5 minutes to process these images.

The goal of this repo is to show the benefits of using the parallel processing enabled through `gatsby-plugin-sharp` and Gatsby’s support for running as a child process sending jobs out to the parent. This helps demonstrate how much faster our build times can be if we add a cloud-based Sharp processing pipeline.

## Setup and Installation

If you’d like to run this demo yourself, follow these steps:

### 1. Fork this repo

If you want to deploy this to Netlify, you’ll need your own copy of this repo to point to.

However, if you just want to see the difference locally, you don’t need to fork.

### 2. Clone and install dependencies

```sh
# clone your fork of the repo
git clone git@github.com:<your_username>/image-processing.git

# or you can clone this repo directly for local testing
git clone git@github.com:jlengstorf/image-processing.git

# move into the directory
cd image-processing/

# install dependencies
npm install
```

### 3. Run a build _without_ the parallel runner

```sh
# use this repo’s copy of the `gatsby` command
./node_modules/.bin/gatsby build
```

### 4. Set up Google Cloud and get credentials

To use `gatsby-parallel-runner`, you’ll need a Google Cloud account with Cloud Pub/Sub, Cloud Functions, and the Cloud Storage JSON API enabled.

Create a service account with the “Storage Admin” and “Pub/Sub Editor” roles, then generate a key as JSON.

For a full walkthrough of this process, follow the tutorial on adding `gatsby-parallel-runner` to your projects.

> TODO: link to this walkthrough once it’s published 😅

### 5. Deploy the required Google Cloud services using `gatsby-parallel-runner`

Make sure to replace `./path/to/creds.json` with the actual relative path to your Google Cloud credentials downloaded in the previous step.

It is recommended to choose a unique `TOPIC` value for each site to avoid issues if two sites are building at the same time on your account.

```sh
GOOGLE_APPLICATION_CREDENTIALS=./path/to/creds.json TOPIC=unique-id-for-my-site WORKER_TOPIC=gatsby-parallel-runner ./node_modules/.bin/gatsby-parallel-runner deploy
```

### 5. Build the site using `gatsby-parallel-runner`

The build will look just like a standard Gatsby build, except the image generation step will be _much_ faster! 🎉

```sh
GOOGLE_APPLICATION_CREDENTIALS=./path/to/creds.json TOPIC=unique-id-for-my-site WORKER_TOPIC=gatsby-parallel-runner ./node_modules/.bin/gatsby-parallel-runner
```
