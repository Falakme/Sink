export default defineAppConfig({
  title: 'Falak Link',
  email: '',
  github: '',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: 'A Secure Link Shortener with Analytics.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300,
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
