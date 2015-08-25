# Haxe and Node.js

I wanted to do a quick prototype with Node.js and my favorite programming language Haxe.  
But I couldn't find any documentation on how to start.  
I knew there used to be a website (really old, when Haxe was spelled "haXe") that got you started.

But that is no more. So I decided to get some of that back.
Based upon the information from the old site and my own need to document this.

### Visit the [http://matthijskamstra.github.io/haxenode/](http://matthijskamstra.github.io/haxenode/) !


## How to contribute?

Read more about that [here](contribute.md).  
But really it boils down to: **JUST DO IT!**



## How to build?

I will be using [Gitbook](https://github.com/GitbookIO/gitbook#how-to-use-it) to export to static html.
You need to install Node.js and then you automatically have NPM:

Install gitbook

```
npm install gitbook-cli -g
```

Export everything to html

```
gitbook build
```

----

### What is Gitbook?
I will be using [gitbook](https://github.com/GitbookIO/gitbook) to generate the website.

Primarily reason for this: I have never used it, it uses markdown as input files and it also generates a static html site.

### What is Markdown
A familiar way to write documentation for developers.  
This should make it easier to **contribute**!

**Markdown** is a plain text formatting syntax created by John Gruber, aiming to provide a easy-to-read and feasible markup. The original Markdown syntax specification can be found [here](http://daringfireball.net/projects/markdown/syntax).

**MacDown** is created as a simple-to-use editor for Markdown documents. It renders your Markdown contents real-time into HTML, and display them in a preview panel. You can download it [here](http://macdown.uranusjr.com/).


### Original Haxenode.org?
The original data is found at github account [theRemix](https://github.com/theRemix/haxenode.org/tree/ajaxloaded/views) in `.jade` files
