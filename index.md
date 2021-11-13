---
layout: landing

user: Project PAP ☕
profile: https://github.com/coffeebank
avatar: https://avatars3.githubusercontent.com/u/23473065

bio: "Looking out into the starry sky, sipping a nice cup of coffee..."

badges:
  - bname: Lofi Listener 🎧
    burl: /soju

sitelist:
  - sname: Wysc
    ssubline: Virtual Study Cafe
    surl: /wysc
    simage: /home/media/wysc02.jpg
    sdesc: "For students striving to be better, Wysc is the study Discord server that delivers a cohesive, global online studying experience, as the first Discord server to present an edu-social cafe experience to an audience of hundreds."
    sdescurl: https://wysc.us.to
    sbadges:
      - Jekyll
      - Bootstrap
      - Documentation
    ssection:
      - ssname: Wysc&#12539;Virtual Study Cafe
        ssurl: "https://wysc.us.to"
        ssimage: /home/media/wyscsite_min.jpg
        ssdesc: A web app built to inform and impress. Uses deferred content loading techniques to load pages quickly and polyfills to extend browser support. Equipped with Open Graph tags for social media, Widgetbot for live chat support, and progressive web app support for iOS, Android, and Chrome. Hosted on GitHub Pages in Jekyll.
        ssbadges:
          - PWA
          - Bootstrap
          - Browser Support
          - Live chat widget

      - ssname: Wysc Blog
        ssurl: "https://wysc.us.to/blog"
        ssimage: /home/media/wyscsiteblog01_min.jpg
        ssdesc: A blog system made for Wysc that leverages Jekyll to recreate a live experience on a static website. Features a static json API that can be easily updated, which is connected to the Wysc Blog homepage by Fetch API to reflect status updates. Latest three blog posts are shown, with a "Load more posts" button. Comes with an RSS feed updated automatically by Jekyll.
        ssbadges:
          - Jekyll
          - Json API
          - Fetch API
          - RSS Feed
          
      - ssname: Wysc Docs
        ssurl: "https://wysc.us.to/docs"
        ssimage: /home/media/wyscsitedocs01_min.jpg
        ssdesc: A documentation system made for Wysc that leverages Jekyll to create an easy-to-update repository. Features an alert system with Fetch API, local search with Lunr.js, and light/dark theme built in SCSS. Uses Simple-DataTable for quick, searchable bot command lists. SEO enhancements including breadcrumbs, redirects, and og:tags.
        ssbadges:
          - Sass/SCSS
          - Light/Dark Theme
          - Fetch API
          - Command Lists

      - ssname: Work &middot; Studying &middot; Chilling
        ssurl: "https://wysc.us.to/joinwsc"
        ssimage: /home/media/wyscjoinwsc_min.jpg
        ssdesc: (Deprecated) Provides a simple front-end webpage for WSC (Work &middot; Studying &middot; Chilling), geared towards funnelling users to the WSC Discord. Features parallax images, Discord widget, and elements fading in on scroll, organized in an informative fashion.
        ssbadges:
          - Weebly
          - Landing page

  - sname: Myaa
    ssubline: Designing a premium showcase with deep integrations
    surl: /myaa
    simage: "/home/media/bailey-zindel-NRQV-hBF10M-unsplash_c02.jpg"
    sdesc: "A custom-built personal showcase that explores APIs from services to create a best-in-class user experience, unifying services and displaying fresh content to represent Myaa."
    sdescurl: https://myaa.netlify.app
    sbadges:
      - Vue.js
      - Tailwind
      - PWA
    ssection:
      - ssname: Music
        ssurl: /myaa/music
        ssimage: /home/media/am03.jpg
        ssdesc: UI design inspired by Spotify. Backend is a simple list of playlist IDs. Retrieves user playlist images, song data, and music samples directly from Spotify Web API. UX considerations include playlist song counts, autostop when playing new sample, and visual indicators for no-sample songs.
        ssbadges:
          - Vue.js
          - Spotify Web API
          - HTML5 Audio

      - ssname: Anime
        ssurl: /myaa/anime
        ssimage: /home/media/am02.jpg
        ssdesc: Integrates recently watched/read feeds in a mobile-adaptive format. Backend is a simple list in the Vuex store. Data is lazily fetched, live from AniList, as user navigates through each page. Careful attention to UX through placeholders and responsive interface as data loads.
        ssbadges:
          - CSS Scroll Snap
          - GraphQL REST API
          - Transitions
          - Vuex store

      - ssname: Emotes
        ssurl: /myaa/emotes
        ssimage: /home/media/am04.jpg
        ssdesc: A frontend for a saved archive of liked Discord emotes. Easily click to copy image URLs with a satisfying app-like experience. Performance enhancements include swipe to switch tabs, lazy loaded images, and click-to-play for animated emotes.
        ssbadges:
          - Vuetify JS
          - Javascript
          - Sheepicon

  - sname: Personal Projects
    ssubline: Python scripts, Web Apps, and Landing Pages
    surl: /
    simage: /home/media/aaron-lau-EOnlL3L3IgQ-unsplash_min.jpg
    sdesc: "Trying out a handful of technologies to create progressive web apps, landing pages, services, and more. Drop by my Github and say hi!<br><br>Current portfolio site built using Jekyll and Tailwind. Modals powered by Micromodaljs, icons by Feather Icons, images from Jaro Bielik and Aaron Lau (no affiliation)."
    sdescurl: https://github.com/coffeebank
    sbadges:
      - Free/Open Source
      - Landing page
    ssection:
      - ssname: coffee-cogs
        ssurl: "https://github.com/coffeebank/coffee-cogs"
        ssimage: https://raw.githubusercontent.com/coffeebank/coffee-cogs/master/CAFq0pv9HjY_01.jpg
        ssdesc:  A collection of Discord Bot extensions ("cogs") built for users with a self-hosted instance of Red Discord Bot. Uses webhooks, APIs, attachments, JSON/dictionary manipulation, and MongoDB/databases. Object oriented programming, higher order functions, and list comprehension.
        ssbadges:
          - Python
          - APIs
          - Data processing
          - Databases

      - ssname: Soju for Spotify
        ssurl: /soju
        ssimage: https://raw.githubusercontent.com/coffeebank/soju/master/public/media/preview.png
        ssdesc: Soju lets you play music samples/listen to song previews from Spotify on any device -- no downloading apps, no trackers, and fast load times. Uses Node.js API and Amazon AWS Lambda; environment variables for securing Spotify API keys; and URL queries to process links automatically on load. 
        ssbadges:
          - Vue JS
          - Node.js
          - Web authentication
          - Spotify API

      - ssname: Moonrise MC
        ssurl: /moonrise
        ssimage: /home/media/crispmc.jpg
        ssdesc: A simple, lightweight, responsive landing page template for a Minecraft server. Server name and IP can be easily changed. IP background changes when server goes offline. Integrates Discord via Widgetbot, and Minecraft server status with Mcsrvstat.us.
        ssbadges:
          - Free/Open Source
          - Tailwind
          - Fetch API
          - Minecraft

      - ssname: Sheepicon
        ssurl: /sheepicon
        ssimage: /home/media/sheepicon.jpg
        ssdesc: A quick, clean dashboard for saving and copying image links easily, including Discord emotes. Thanks to Markdown, links are easy to add, save, and publish. Responsively designed, caches for offline use, and includes a REST API for those making custom frontends!
        ssbadges:
          - Free/Open Source
          - Jekyll
          - Tailwind
          - Javascript

      - ssname: Arland - Minecraft Server
        ssurl: /arland
        ssimage: /home/media/arlandpwa_min.jpg
        ssdesc: The primary landing page for all things Arland. Modernizes Arland's web properties by utilizing MaterializeCSS to implement a material design look and feel that is responsive across all screen sizes. Experiments with noscript fallbacks, <code>position:sticky</code>, z-index, and animated scrolling to page anchors.
        ssbadges:
          - PWA
          - MaterializeCSS
          - Material Design
          - GitHub API

---
