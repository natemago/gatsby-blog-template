const config = {
  // Site info
  siteTitle: "Flashreads", // Site title.
  siteTitleShort: "Flashreads", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Flashreads blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://theflashreads.com/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Flashreads blogs", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-7", // GA tracking ID.
  googleSiteVerification: "w8QmqtnEf96t3O1LZ1oe-ShyFPKLK14SW4c9kqnB5PE", //Google search console
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  author: "Author: ",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "template", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  //searchEngineID: "9ybvtnkbt7o",
  hasSearch: false,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: "",
      url: ""
    }
  ],
  userLinks: [
    {
      label: "Website",
      url: "https://theflashreads.com/",
      iconClassName: "fas globe"
    }
  ],
  // Use for navigation
  navTitle: "Flashreads",
  navLinks: [
    { label: "Info", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    { 
      label: "GitHub",
      url: "https://github.com/flashreads/blogs",
      iconClassName: "Github blogs"
    },
    {
      label: "RSS",
      url: "https://theflashreads.com/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" }
  ],
  copyright: "Copyright © 2019-2020 Flashreads. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
