if require?
  moment = require('moment')
else
  moment = this.moment

replacements =
  a: 'ddd'
  A: 'dddd'
  b: 'MMM'
  B: 'MMMM'
  d: 'DD'
  H: 'HH'
  I: 'hh'
  j: 'DDDD'
  m: 'MM'
  M: 'mm'
  p: 'A'
  S: 'ss'
  Z: 'z'
  # U: 'ww' # Monday or Sunday?
  w: 'd'
  # W: 'ww' # Monday or Sunday?
  y: 'YY'
  Y: 'YYYY'
  '%': '%'

moment.fn.strftime = (format) ->
  momentFormat = format

  for key, value of replacements
    momentFormat = momentFormat.replace("%#{key}", value)

  @format(momentFormat)

if module?
  module.exports = moment
else
  this.moment = moment
