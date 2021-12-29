// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mohamed Adil Blog",
  tagline: "Welcome to my minimalist blog",
  url: "https://mohamedadil.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "madil4", // Usually your GitHub org/user name.
  projectName: "mohamedadil_website", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        // sidebarPath: require.resolve("./sidebars.js"),
        // Please change this to your repo.
        // editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        // },
        docs: false,
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Mohamed Adil blog",
        // logo: {
        //   alt: "Awatif logo",
        //   src: "img/logo.svg",
        // },
        // items: [
        //   {
        //     type: "doc",
        //     docId: "intro",
        //     position: "left",
        //     label: "Tutorial",
        //   },
        //   { to: "/blog", label: "Blog", position: "left" },
        //   {
        //     href: "https://github.com/facebook/docusaurus",
        //     label: "GitHub",
        //     position: "right",
        //   },
        // ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contact Info",
            items: [
              {
                label: "me@mohamedadil.com",
                href: "mailto:me@mohamedadil.com",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Awatif Engine`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: { defaultMode: "dark" },
    }),
};

module.exports = config;
