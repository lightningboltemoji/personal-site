<div align="center">

![Deploy to pages workflow](https://github.com/lightningboltemoji/personal-site/actions/workflows/deploy-to-pages.yml/badge.svg)

</div>

### Overview

Source for [cecchetti.xyz](https://cecchetti.xyz), my personal landing page. Written as a [Next.js](https://nextjs.org/) app, built on GitHub actions, and hosted on GitHub pages. These make for a great (and free!) way to build and host a tiny static site.

### Development

```bash
yarn # install dependencies
yarn dev # start dev server
```

### Memoji

First, I generated the memoji by recording in Messages and sending it to myself.

From there, I used the following `ffmpeg` to process the video. This will:

- Crop it into a square
- Strip the audio
- Convert it to lower quality H.264, which is smaller and more compatible than HEVC

```bash
ffmpeg -i memoji.mov -filter:v "crop=400:400:120:20" -an memoji.mp4
```

The crop is specified as `width:height:offset-x:offset-y`. I found that the memoji was slightly off-center (maybe just how I had my head tilted), which is reflected in the offsets above.

From there, I applied `border-radius: 50%` in CSS to give it a circular mask.
