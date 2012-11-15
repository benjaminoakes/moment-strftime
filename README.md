# moment-tokens

(Formerly `moment-strftime` -- we're  changing names to reflect forthcoming feature additions)

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=benjaminoakes&url=https://github.com/benjaminoakes/moment-tokens&title=moment-tokens&language=en_GB&tags=github&category=software)

[Moment.js](https://github.com/timrwood/moment) is a great, lightweight date-manipulation library.  It also has a very approachable date format syntax that would be familiar to most people who have ever had to fill out a form (e.g., guess what `'YYYY-MM-DD'` means).

Most programmers however, are familiar with other date formatting syntax.  The Unix-style `strftime` is commonly found in many languages' standard libraries.  Unfortunately, it is still absent in JavaScript.

Moment.js helps with a lot of the pain associated with `Date` handling in JavaScript, but it doesn't handle `strftime` (nor will it, [it seems](https://github.com/timrwood/moment/issues/49)).  If you are working in a language that does have `strftime`, it seems awkward to have to use another format when using JavaScript (especially if you're trying to keep formats consistent between languages).

That's unfortunate.  There are [too](https://github.com/loopj/commonjs-date-formatting) [many](https://github.com/loopj/commonjs-date-formatting) ([abandoned, buggy](http://hacks.bluesmoon.info/strftime/)) [solutions](https://github.com/zaius/jdate) for date handling in JavaScript.  Moment.js has the most steam behind it because of all the other features it has going for it.

But... if Moment.js just had `strftime` and friends, why would you need anything else?  Enter `moment-tokens`.

## Installation

### Browser

Pre-compiled for easy use with the rest of your JavaScript:

  * [Development](http://cloud.github.com/downloads/benjaminoakes/moment-tokens/moment-strftime.js)
  * [Production](https://github.com/downloads/benjaminoakes/moment-tokens/moment-strftime.min.js)

### Node.js/CommonJS

`moment-tokens` (and the former `moment-strftime`) are available as Node.js packages.  The JavaScript itself should work as a CommonJS module, but it has only been tested in Node.js.

    npm install moment-strftime
    # NOTE: the current moment-tokens module is a fork that's in process of being merged

## Usage

`moment-tokens` is a tiny plugin for Moment.js that adds a `tokens` method.  It's simple:

    moment().strftime("%m/%d/%y %I:%M %p %Z"); // => '01/17/12 08:54 PM EST'

In Node.js:

    // Gets you everything in Moment.js too
    moment = require('moment-strftime');
    moment().strftime("%m/%d/%y %I:%M %p %Z"); // => '01/17/12 08:54 PM EST'

## Known Issues

I've only developed `moment-tokens` as far as I need it right now, rather than implementing features I don't need yet.  I've noticed that implementing "unused" features often leads to bugs, so the plan is to implement on an as-needed basis.

If you run into an issue or unimplemented feature that you need, please [let me know](https://github.com/benjaminoakes/moment-strftime/issues).  Contributions are welcome as well.

## Contributing

The library and specs are written in CoffeeScript (NOTE: we're moving to JavaScript).  You'll need Node.js for development.

To get up and running:

    npm install
    cake

If everything is set up correctly, you should see:

    Cakefile defines the following tasks:
    
    [...]

## Resources

* [cheat strftime](http://cheat.errtheblog.com/s/strftime/)
* [C strftime](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html)

## License

MIT (see `LICENSE`)
