# Greengeo front-end

## Quick start

~~~sh
$ npm install    # Install npm packages and grunt plugins
$ bower install  # Install bower packages
~~~

Afterwards, depending on what you need:

* `grunt serve` to serve the project locally and open your browser, with livereload and sass sourcemaps for active development
* `grunt serve --allow-remote` to allow outside connections (e.g. for testing with mobile devices using your dev machine's IP address)
* `grunt build` to compile everything into the dist directory (concatenation/minification of javascript, CSS and HTML; and optimization of images)
* `grunt serve:dist` is basically `grunt build` but also sets the webserver up to serve the built website directly (no livereload)
* `grunt sync` compiles everything and then rsyncs the `dist` dir to whatever host is specified in the [gruntfile](Gruntfile.js#L419-L421)

## Requirements

* [git](http://git-scm.com) 2.0+
* [ruby](http://www.ruby-lang.org) 2.0+ with [sass](http://sass-lang.com/) installed (`gem install sass`)
* [node.js](https://nodejs.org) v0.10.x+ or [io.js](https://iojs.org) v1.0.0+
* [grunt](http://gruntjs.com) and [bower](http://bower.io) (`npm install -g grunt bower`)

## Other notes

On Windows, make sure that the following commands are available to you in the command prompt: `npm`, `bower`, `grunt`, `sass`, and `git`.

It is always a good idea to run `npm install` and `bower install` after each update (or `git pull` or similar), to make sure all dependencies are up-to-date and properly installed.

Install new grunt plugins and node modules with `npm install --save-dev <package>`, and new bower packages with `bower install --save <package>`. If `grunt serve` is already running, wiredep will automatically insert the scripts and stylesheets into the jade templates; otherwise, run `grunt wiredep`.
