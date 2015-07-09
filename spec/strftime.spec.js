var moment = require('../lib/moment-strftime');

describe('strftime', function () {
  var january17;

  beforeEach(function () {
    january17 = moment('2012-01-17T19:54:20');
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
  
  describe('given %d', function () {
    it('gives day of the month (01..31)', function () {
      expect(january17.strftime('%d')).toEqual('17');
    });
  });
  
  describe('given %H', function () {
    it('gives hour of the day, 24-hour clock (00..23)', function () {
      expect(january17.strftime('%H')).toEqual('19');
    });
  });
  
  describe('given %I', function () {
    it('gives hour of the day, 12-hour clock (01..12)', function () {
      expect(january17.strftime('%I')).toEqual('07');
    });
  });
  
  describe('given %j', function () {
    it('gives day of the year (001..366)', function () {
      expect(january17.strftime('%j')).toEqual('017');
    });
  });
  
  describe('given %m', function () {
    it('gives month of the year (01..12)', function () {
      expect(january17.strftime('%m')).toEqual('01');
    });
  });
  
  describe('given %M', function () {
    it('gives minute of the hour (00..59)', function () {
      expect(january17.strftime('%M')).toEqual('54');
    });
  });
  
  describe('given %p', function () {
    it('gives meridian indicator ("AM"  or  "PM")', function () {
      expect(january17.strftime('%p')).toEqual('PM');
    });
  });
  
  describe('given %S', function () {
    it('gives second of the minute (00..60)', function () {
      expect(january17.strftime('%S')).toEqual('20');
    });
  });
  
  describe('given %w', function () {
    it('gives day of the week (Sunday is 0, 0..6)', function () {
      expect(january17.strftime('%w')).toEqual('2');
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
  });
  
  describe('given %z', function () {
    it('gives the UTC offset', function () {
      expect(january17.strftime('%z')).toMatch(/[\-+]\d{4}/);
    });
  });
  
  describe('given %%', function () {
    it('gives "%" character', function () {
      expect(january17.strftime('%%')).toEqual('%');
    });
  });

  it('formats correctly with a compound format', function () {
    expect(january17.strftime("%m/%d/%y %I:%M %p")).toEqual('01/17/12 07:54 PM');
  });
});
