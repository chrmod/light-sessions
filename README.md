# Light Sessions (work in progress)

It is a browser extension that keep your open tab in sync across different
browser/devices without sharing your private data with any 3rd-party.

## How it works

Extensions read your open tabs urls and save them in a form form of **unhosted**
javascript application in a form of a URL. You can send such URL to any browser
that have Light Sessions installed to restore your open tabs there.

On browser without Light Sessions extension, the url will simply render tabs
list as links.

## Browser Support

Extension is build with WebExtensions API which is currently supported via:

* Chromium (and Google Chrome)
* Firefox > 44 (or maybe 43, didn't test it yet)

## Installation

You will find packed extensions in repository `dist` folder.

For Firefox you will need set pref `xpinstall.signatures.required` to false,
in **about:config**.
