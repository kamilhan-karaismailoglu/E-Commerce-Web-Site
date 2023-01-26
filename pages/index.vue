<template>
  <client-only placeholder="loading...">
    <head>
      <title>Twist | Stil Giyim, Ayakkabı ve Aksesuar Markası</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
    </head>
    <body>

      <div class="ga3">
        <the-banner-1 />
        <the-banner-2 />
      </div>
      <the-banner-3 />
      <the-banner-4 />

    </body>
  </client-only>
</template>

<script setup lang="ts">
if (process.client) {
  window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }

    navigator.serviceWorker.register('/sw.js')
  })
}
</script>

<style scoped>
.center {
  text-align: center;
}
img {
  width: 100%;
  max-width: 760px;
}
</style>