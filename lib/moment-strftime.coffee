moment = require('moment')

replacements =
  Z: 'z'
  Y: 'YYYY'

moment.fn.strftime = (format) ->
  momentFormat = format

  for key, value of replacements
    momentFormat = momentFormat.replace("%#{key}", value)

  @format(momentFormat)

module.exports = moment
