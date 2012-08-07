(function() {
    var moment, strftimeFormats = {};

    if (typeof require !== "undefined" && require !== null) {
        moment = require('moment');
    } else {
        moment = this.moment;
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
            default:
                return item;
        }
    }

    moment.fn.strftime = function(format) {
        if (!strftimeFormats[format]) {
            strftimeFormats[format] = format.replace(/%?.|%%/g, translateStrftimeToMoment);
        }
        return this.format(strftimeFormats[format]);
    }

    if (typeof module !== "undefined" && module !== null) {
        module.exports = moment;
    } else {
        this.moment = moment;
    }
}).call(this);
