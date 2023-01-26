// https://nuxt.com/docs/api/configuration/nuxt-config
mode: 'universal'

export default {
  head: {
    title: 'Nuxt3 PWA',
    charset: 'utf-8',
    meta: [
      { name: 'theme-color', content: '#ffdd67' }
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/png', href: '/logo_x32.png' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/logo_x180.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  css: [    
        // Load a Node.js module directly (here it's a Sass file)
        // CSS file in the project
        '@/assets/main.css',
        '@/assets/info.min.css',
        '@/assets/248.css',
        '@/assets/segmentify.css',
        '@/assets/aa0f4a923f7afd330b6fc77e40d886.css',
        // SCSS file in the project
      ],
      telemetry: false,
}
