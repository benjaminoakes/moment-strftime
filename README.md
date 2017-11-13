# moment-strftime

[![Build Status](https://secure.travis-ci.org/benjaminoakes/moment-strftime.png)](http://travis-ci.org/benjaminoakes/moment-strftime)
[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=benjaminoakes&url=https://github.com/benjaminoakes/moment-strftime&title=moment-strftime&language=en_GB&tags=github&category=software)

[Moment.js](https://github.com/timrwood/moment) is a great, lightweight date-manipulation library.  It also has a very approachable date format syntax that would be familiar to most people who have ever had to fill out a form (e.g., guess what `'YYYY-MM-DD'` means).

Most programmers however, are familiar with other date formatting syntax.  The Unix-style `strftime` is commonly found in many languages' standard libraries.  Unfortunately, it is still absent in JavaScript.

Moment.js helps with a lot of the pain associated with `Date` handling in JavaScript, but it doesn't handle `strftime` (nor will it, [it seems](https://github.com/timrwood/moment/issues/49)).  If you are working in a language that does have `strftime`, it seems awkward to have to use another format when using JavaScript (especially if you're trying to keep formats consistent between languages).

That's unfortunate.  There are [too](https://github.com/loopj/commonjs-date-formatting) [many](https://github.com/loopj/commonjs-date-formatting) ([abandoned, buggy](http://hacks.bluesmoon.info/strftime/)) [solutions](https://github.com/zaius/jdate) for date handling in JavaScript.  Moment.js has the most steam behind it because of all the other features it has going for it.

But... if Moment.js just had `strftime` and friends, why would you need anything else?  Enter `moment-strftime`.

## Installation

### Browser

It's preferred that you use Bower, but you can also [download the raw JavaScript](https://raw.githubusercontent.com/benjaminoakes/moment-strftime/master/lib/moment-strftime.js).

### Node.js

`moment-strftime` is available as a Node.js package.  The JavaScript itself should work as a CommonJS module, but it has only been tested in Node.js.

    npm install moment-strftime

## Usage

`moment-strftime` is a tiny plugin for Moment.js that adds a `strftime` method.  It's simple:

```js
moment().strftime("%m/%d/%y %I:%M %p %Z"); // => '01/17/12 08:54 PM EST'
```

In Node.js:

```js
// Gets you everything in Moment.js too
var moment = require('moment-strftime');
moment().strftime("%m/%d/%y %I:%M %p %Z"); // => '01/17/12 08:54 PM EST'
```

## Known Issues

Compatibility: stable Chrome, stable Firefox, stable Safari, IE9+

I've only developed `moment-strftime` as far as I need it right now, rather than implementing features I don't need yet.  I've noticed that implementing "unused" features often leads to bugs, so the plan is to implement on an as-needed basis.

If you run into an issue or unimplemented feature that you need, please [open an issue](https://github.com/benjaminoakes/moment-strftime/issues) or (preferably) make a pull request.

## Contributing

To get up and running:

    docker-compose build
    docker-compose run test

## Resources

* [cheat strftime](http://errtheblog.com/posts/21-cheat)
* [C strftime](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html)

## License

MIT (see `LICENSE`)
