(function (root) {
    var moment, strftimeFormats = {}, phpFormats = {};

    if (typeof require !== "undefined" && require !== null) {
        moment = require('moment');
    } else {
        moment = root.moment;
    }

    function translatePhpFormat(item) {
        if (item.charAt(0) === "\\") {
            return item.replace("\\", "");
        }

        console.log(item, "-");

        switch (item) {
            case "D":
                return "ddd";
            case "l":
                return "dddd";
            case "M":
                return "MMM";
            case "F":
                return "MMMM";
            case "j":
                return "D";
            case "m":
                return "MM";
            case "A":
                return "A";
            case "a":
                return "a";
            case "s":
                return "ss";
            case "i":
                return "mm";
            case "H":
                return "HH";
            case "g":
                return "h";
            case "h":
                return "hh";
            case "w":
                return "d";
            case "W":
                return "ww";
            case "y":
                return "YY";
            case "o":
            case "Y":
                return "YYYY";
            case "O":
                return "ZZ";
            case "z":
                return "DDD";
            case "d":
                return "DD";
            case "n":
                return "M";
            default:
                return item;
        }
    }

    function translateStrftimeToMoment(item) {
        if (item.substring(0, 2) === "%%") {
            return item.replace("%%", "%");
        }

        switch (item) {
            case "%a":
                return "ddd";
            case "%A":
                return "dddd";
            case "%h":
            case "%b":
                return "MMM";
            case "%B":
                return "MMMM";
            case "%c":
                return "LLLL";
            case "%d":
                return "D";
            case "%j":
                return "DDDD";
            case "%e":
                return "Do";
            case "%m":
                return "MM";
            case "%p":
                return "A";
            case "%P":
                return "a";
            case "%S":
                return "ss";
            case "%M":
                return "mm";
            case "%H":
                return "HH";
            case "%I":
                return "hh";
            case "%w":
                return "d";
            case "%W":
            case "%U":
                return "ww";
            case "%x":
                return "LL";
            case "%X":
                return "LT";
            case "%g":
            case "%y":
                return "YY";
            case "%G":
            case "%Y":
                return "YYYY";
            case "%z":
                return "ZZ";
            case "%Z":
                return "z";
            default:
                return item;
        }
    }

    moment.fn.strftime = function(format) {
        if (!strftimeFormats[format]) {
            strftimeFormats[format] = format.replace(/%?.|%%/g, translateStrftimeToMoment);
        }
        return this.format(strftimeFormats[format]);
    };

    moment.fn.phpFormat = function(format) {
        if (!phpFormats[format]) {
            phpFormats[format] = format.replace(/\\?./g, translatePhpFormat);
        }
        return this.format(phpFormats[format]);
    };

    if (typeof module !== "undefined" && module !== null) {
        module.exports = moment;
    } else {
        root.moment = moment;
    }
}(this));
