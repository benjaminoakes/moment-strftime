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
	// Extract strftime tokens
	var pattern = /\%([a-z|A-Z]+)/g;
	var formatTokens = format.match(pattern);
	
	if(formatTokens != null){
		var parse = [], momentString = "";
		
		// Build a string to format
		for (var i in formatTokens){
			parse[formatTokens[i]] = replacements[formatTokens[i].replace('%', '')];
			momentString += replacements[formatTokens[i].replace('%', '')] + "::";
		}
		momentString = momentString.substring(0, momentString.length - 2);
		
		// Format string and build array, the indexes of the array will be the same as formatTokens
		var momentResult = this.format(momentString);
		var parsed = momentResult.split("::");
		
		// Replace tokens with the formatted value
		var result = format;
		for (var i in formatTokens){
			result = result.replace(formatTokens[i], parsed[i]);
		}
	}
	else{
		// There is no tokens to format
		result = format;
	}
	
	// Replace twice % with one single %
	result = result.replace(/\%\%/g, "%");
	return result;
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = moment;
  } else {
    this.moment = moment;
  }
}).call(this);
