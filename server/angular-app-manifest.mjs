
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MyPortFolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MyPortFolio"
  },
  {
    "renderMode": 2,
    "route": "/MyPortFolio/about"
  },
  {
    "renderMode": 2,
    "route": "/MyPortFolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/MyPortFolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/MyPortFolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MyPortFolio",
    "route": "/MyPortFolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 960, hash: 'b26d1b434b8660f24d51f39fd981dedba8e80c2d3af26b0b59e3ed2191e163df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1240, hash: 'b36c79b78451277092b555e517e936b1a745c43625d70f11598aadebb1163705', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7045, hash: 'a0aa9c73e474054c7f2ab8897ab5b8c6611551af1b9deb715917fe93bf5c2234', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 7287, hash: 'abb9d24f7a37e932be6d40e21c921e0dc5a33eb1028f34705230d24b587e5b55', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 7092, hash: '9c85d24f6b7025f5160dad0f581cd3ca5da2a4162507b4ca4fafc722ab475138', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6322, hash: '1e5d2346fef85d9a2632ccf38d2435c4fc910469088d1bd243b5a3c29e9e0d6f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6362, hash: '5af14427cd0232425622ed37c067432547a54e4bdca0de8ba9b642609a8bbc5d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'main-IIO3AIVH.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-6TCJGFIX.css': {size: 26188, hash: '1OPNgwA6fzk', text: () => import('./assets-chunks/styles-6TCJGFIX_css.mjs').then(m => m.default)}
  },
};
