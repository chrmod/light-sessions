# Light Sessions

It is a browser extension for sharing open tabs via URL.

This is experimental software so please do not expect to much from it :-)

## How it works

Extensions read brower open tabs urls and save them in a form of **unhosted**
javascript application encoded as URL. You can send such URL to any browser
that have Light Sessions installed to restore your open tabs there.

On browser without Light Sessions extension, the url will simply render tabs
list as links.

Light Session URL is decoded via extreamly simple
[runtime for unhosted apps](https://github.com/chrmod/unhostedjs) as
[github page](https://chrmod.github.io/unhostedjs/v1.html) - in this way you
are sure no data is shared with with 3rd parties.

## Browser Support

Extension is build with WebExtensions APIs so should be supported with all
edge browser. I've tested it with:

* Chromium 43
* Firefox 44

## Installation

You will find packed extensions in repository `dist` folder.

For Firefox you will need set pref `xpinstall.signatures.required` to false,
in **about:config**.
