# Parallelized Image Processing in Gatsby

This site is designed to make Gatsby work _really_ hard to process images. To do that, it:

1. Has 200+ images ranging from 1–5MB committed to the repo to put additional memory strain on Sharp
2. Loads all of the images in one page at a small, fixed size
3. Loads each image on its own page at a different, fluid sizes

This makes Gatsby earn it — on a 2017 MacBook Pro with 16GB of memory, it takes upwards of 5 minutes to process these images.

The goal of this repo is to show the benefits of using the parallel processing enabled through `gatsby-plugin-sharp` and Gatsby’s support for running as a child process sending jobs out to the parent. This helps demonstrate how much faster our build times can be if we add a cloud-based Sharp processing pipeline.
