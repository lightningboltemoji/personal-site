<div align="center"

Source for **[cecchetti.xyz](https://cecchetti.xyz)**, my personal landing page 
# 👨‍💻
     
</div>

### Overview

Written as a [Next.js](https://nextjs.org/) app, built on GitHub actions, and hosted on GitHub pages.

This stack is a great (and free!) way to build and host a tiny static site.

### Development

```bash
yarn # install dependencies
yarn dev # start dev server
```

### Memoji

First, I generated the memoji by just messing around within Messages and sending it to myself. 

From there, I used `ffmpeg` to process the video. To crop it into a square, strip audio, and convert it to a H.264, which is smaller and more compatible than the HEVC that Messages produces:

```bash
ffmpeg -i memoji.mov -filter:v "crop=400:400:120:20" -an memoji.mp4
```

The crop is specified as `width:height:offset-x:offset-y`. I found that the memoji was slightly off-center (probably how I had my head tilted), which is reflected in the example offsets above.

From there, I applied `border-radius: 50%` in CSS to give it a circular mask.