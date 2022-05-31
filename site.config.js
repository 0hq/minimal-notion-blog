module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '32f60f9de1d9448896d10731ecf2db7b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'The Library of University Tunnels',
  domain: 'collegetunnels.com',
  author: 'Will DePue',

  // open graph metadata (optional)
  description: 'The Library of University Tunnels, recording stories from students across the globe since 2003.',
  socialImageTitle: 'The Library of University Tunnels',
  socialImageSubtitle: 'A repository of guides, maps, high tales and adventures underneath school grounds.',

  // social usernames (optional)
  twitter: 'willdepue',
  github: '0hq',
  linkedin: 'willdepue',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
