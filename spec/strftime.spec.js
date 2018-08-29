var moment = require('../lib/moment-strftime');

describe('strftime', function () {
  var january17, december2, fraction;

  beforeEach(function () {
    moment.locale('en');                            // Setting locale to `en` for locale specific tests
    january17 = moment('2012-01-17T19:54:20');      // Tuesday
    december2 = moment.utc('2029-12-02T01:02:03Z'); // Sunday
    fraction = moment('2012-01-17T19:54:20.123');   // Tuesday with microseconds
  });

  describe('given %a', function () {
    it('gives the abbreviated weekday name ("Sun")', function () {
      expect(january17.strftime('%a')).toEqual('Tue');
    });
  });

  describe('given %A', function () {
    it('gives the  full  weekday  name ("Sunday")', function () {
      expect(january17.strftime('%A')).toEqual('Tuesday');
    });
  });

  describe('given %b', function () {
    it('gives the abbreviated month name ("Jan")', function () {
      expect(january17.strftime('%b')).toEqual('Jan');
    });
  });

  describe('given %B', function () {
    it('gives the  full  month  name ("January")', function () {
      expect(january17.strftime('%B')).toEqual('January');
    });
  });

  describe('given %c', function () {
    it('gives appropriate date and time representation for the locale', function () {
      expect(january17.strftime('%c')).toEqual('Jan 17, 2012 7:54 PM');
    });
  });

  describe('given %d', function () {
    it('gives day of the month (01..31)', function () {
      expect(january17.strftime('%d')).toEqual('17');
      expect(december2.strftime('%d')).toEqual('02');
    });
  });

  describe('given %-d', function () {
    it('gives day of the month (1..31)', function () {
      expect(january17.strftime('%-d')).toEqual('17');
      expect(december2.strftime('%-d')).toEqual('2');
    });
  });

  describe('given %e', function () {
    it('gives day of the month (1..31)', function () {
      expect(january17.strftime('%e')).toEqual('17');
      expect(december2.strftime('%e')).toEqual('2');
    });
  });

  describe('given %H', function () {
    it('gives hour of the day, 24-hour clock (00..23)', function () {
      expect(january17.strftime('%H')).toEqual('19');
      expect(december2.strftime('%H')).toEqual('01');
    });
  });

  describe('given %-H', function () {
    it('gives hour of the day, 24-hour clock (00..23)', function () {
      expect(january17.strftime('%-H')).toEqual('19');
      expect(december2.strftime('%-H')).toEqual('1');
    });
  });

  describe('given %I', function () {
    it('gives hour of the day, 12-hour clock (01..12)', function () {
      expect(january17.strftime('%I')).toEqual('07');
      expect(december2.strftime('%I')).toEqual('01');
    });
  });

  describe('given %-I', function () {
    it('gives hour of the day, 12-hour clock (01..12)', function () {
      expect(january17.strftime('%-I')).toEqual('7');
      expect(december2.strftime('%-I')).toEqual('1');
    });
  });

  describe('given %j', function () {
    it('gives day of the year (001..366)', function () {
      expect(january17.strftime('%j')).toEqual('017');
    });
  });

  describe('given %-j', function () {
    it('gives day of the year (001..366)', function () {
      expect(january17.strftime('%-j')).toEqual('17');
    });
  });

  describe('given %k', function () {
    it('gives hour of the day, 24-hour clock (0..23)', function () {
      expect(january17.strftime('%k')).toEqual('19');
      expect(december2.strftime('%k')).toEqual('1');
    });
  });

  describe('given %l', function () {
    it('gives hour of the day, 12-hour clock (1..12)', function () {
      expect(january17.strftime('%l')).toEqual('7');
      expect(december2.strftime('%l')).toEqual('1');
    });
  });

  describe('given %m', function () {
    it('gives month of the year (01..12)', function () {
      expect(january17.strftime('%m')).toEqual('01');
    });
  });

  describe('given %-m', function () {
    it('gives month of the year (01..12)', function () {
      expect(january17.strftime('%-m')).toEqual('1');
    });
  });

  describe('given %M', function () {
    it('gives minute of the hour (00..59)', function () {
      expect(december2.strftime('%M')).toEqual('02');
    });
  });

  describe('given %-M', function () {
    it('gives minute of the hour (00..59)', function () {
      expect(december2.strftime('%-M')).toEqual('2');
    });
  });

  describe('given %p', function () {
    it('gives meridian indicator ("AM"  or  "PM")', function () {
      expect(january17.strftime('%p')).toEqual('PM');
    });
  });

  describe('given %P', function () {
    it('gives meridian indicator ("am"  or  "pm")', function () {
      expect(january17.strftime('%P')).toEqual('pm');
    });
  });

  describe('given %S', function () {
    it('gives second of the minute (00..60)', function () {
      expect(december2.strftime('%S')).toEqual('03');
    });
  });

  describe('given %-S', function () {
    it('gives second of the minute (00..60)', function () {
      expect(december2.strftime('%-S')).toEqual('3');
    });
  });

  describe('given %u', function () {
    it('gives day of the week (Sunday is 7, 1..7)', function () {
      expect(january17.strftime('%u')).toEqual('2');
      expect(december2.strftime('%u')).toEqual('7');
    });
  });

  describe('given %w', function () {
    it('gives day of the week (Sunday is 0, 0..6)', function () {
      expect(january17.strftime('%w')).toEqual('2');
      expect(december2.strftime('%w')).toEqual('0');
    });
  });

  describe('given %W', function () {
    it('gives the week number (00-53)', function () {
      expect(january17.strftime('%W')).toEqual('03');
      expect(december2.strftime('%W')).toEqual('48');
    });
  });

  describe('given %x', function () {
    it('gives appropriate date representation for the locale', function () {
      expect(january17.strftime('%x')).toEqual('Jan 17, 2012');
    });
  });

  describe('given %X', function () {
    it('gives appropriate time representation for the locale', function () {
      expect(january17.strftime('%X')).toEqual('7:54:20 PM');
    });
  });

  describe('given %y', function () {
    it('gives year without a century (00..99)', function () {
      expect(january17.strftime('%y')).toEqual('12');
    });
  });

  describe('given %Y', function () {
    it('gives year with century', function () {
      expect(january17.strftime('%Y')).toEqual('2012');
    });
  });

  describe('given %Z', function () {
    it('gives an empty string because it is deprecated', function () {
      expect(january17.strftime('%Z')).toEqual('');
    });

    it('gives "UTC" for a moment.utc object', function () {
      expect(december2.strftime('%Z')).toEqual('UTC');
    });
  });

  describe('given %z', function () {
    it('gives the UTC offset', function () {
      expect(january17.strftime('%z')).toMatch(/[\-+]\d{4}/);
    });
  });

  describe('given %f', function () {
    it('gives the micro-seconds', function () {
      expect(fraction.strftime('%f')).toEqual('123');
    });
  });

  describe('given %%', function () {
    it('gives "%" character', function () {
      expect(january17.strftime('%%')).toEqual('%');
    });
  });

  describe('given an unknown token', function() {
    it('gives the same token unreplaced', function() {
      expect(january17.strftime('%Q')).toEqual('%Q');
    });
  });

  describe('given %d of month %m', function () {
    it('gives "%d of month %m"', function () {
      expect(january17.strftime('%d of month %m')).toEqual('17 of month 01');
    });
  });

  describe('given any non-parametrized text', function () {
    it('gives the same text', function () {
      expect(january17.strftime('hello world')).toEqual('hello world');
    });
  });

  describe('given a compound format', function() {
    it('formats correctly with distinct tokens', function () {
      expect(january17.strftime('%m/%d/%y %I:%M %p')).toEqual('01/17/12 07:54 PM');
    });

    it('formats correctly with tokens surrounding other letters', function() {
      expect(january17.strftime('%Y-%m-%dT%H:%M')).toEqual('2012-01-17T19:54');
    });

    it('formats correctly with tokens within words', function() {
      expect(january17.strftime('a code is month%m%Yyear')).toEqual('a code is month012012year');
    });
  });
});
