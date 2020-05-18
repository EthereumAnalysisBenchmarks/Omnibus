/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hljsDefineSolidity = require('highlightjs-solidity');

const siteConfig = {
  title: 'Overview',
  tagline: 'Smart Contract Weakness Classification and Test Cases',
  url: 'http://swcregistry.io',
  baseUrl: '/',
  projectName: 'SWC-registry',
  organizationName: 'SmartContractSecurity',
  customDocsPath: 'website/docs',
  headerLinks: [
    { doc: 'SWC-100', label: 'Registry' },
    { href: 'https://github.com/SmartContractSecurity/SWC-registry', label: 'Github' },
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#4d504e',
    secondaryColor: '#205C3B',
  },
  headerIcon: '',
  copyright: `Copyright © ${new Date().getFullYear()} SmartContractSecurity`,
  highlight: {
    theme: 'default',
    defaultLang: 'javascript',
    hljs: function(hljs) {
      return hljsDefineSolidity(hljs);
    }
  },
  cname: 'swcregistry.io',
  algolia: {
    apiKey: '064ab94cd5d5382009d9640000aeea98',
    indexName: 'smartcontractsecurity',
  },
  scripts: [],
  footerscripts: [
    'https://cdn.jsdelivr.net/gh/SmartContractSecurity/SWC-registry@website/website/scripts/lineNumbers.js',
  ],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
  repoUrl: 'https://github.com/SmartContractSecurity/SWC-registry',
  gaTrackingId: 'UA-64552723-12'
};

module.exports = siteConfig;
