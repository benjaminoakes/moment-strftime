(function () {
  var moment, replacements;

  if (typeof require !== "undefined" && require !== null) {
    moment = require('moment');
  } else {
    moment = this.moment;
  }

  replacements = {
    a: 'ddd',
    A: 'dddd',
    b: 'MMM',
    B: 'MMMM',
    d: 'DD',
    e: 'D',
    F: 'YYYY-MM-DD',
    H: 'HH',
    I: 'hh',
    j: 'DDDD',
    k: 'H',
    l: 'h',
    m: 'MM',
    M: 'mm',
    p: 'A',
    S: 'ss',
    u: 'E',
    w: 'd',
    W: 'WW',
    y: 'YY',
    Y: 'YYYY',
    z: 'ZZ',
    Z: 'z',
    '%': '%'
  };

  moment.fn.strftime = function (format) {
    var momentFormat, value;

    momentFormat = format;

    Object.keys(replacements).forEach(function (key) {
      value = replacements[key];
      momentFormat = momentFormat.replace("%" + key, value);
    });

    return this.format(momentFormat);
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = moment;
  } else {
    this.moment = moment;
  }
}).call(this);
