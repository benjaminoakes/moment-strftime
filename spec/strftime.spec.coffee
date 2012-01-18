moment = require('../lib/moment-strftime')

describe 'strftime', ->
  beforeEach ->
    @o = moment('2012-01-18T01:54:20.620Z')

  # describe 'given %a', ->
  #   it 'gives the abbreviated weekday name ("Sun")', ->

  # describe 'given %A', ->
  #   it 'gives the  full  weekday  name ("Sunday")', ->

  # describe 'given %b', ->
  #   it 'gives the abbreviated month name ("Jan")', ->

  # describe 'given %B', ->
  #   it 'gives the  full  month  name ("January")', ->

  # describe 'given %c', ->
  #   it 'gives the preferred local date and time representation', ->

  # describe 'given %d', ->
  #   it 'gives day of the month (01..31)', ->

  # describe 'given %H', ->
  #   it 'gives hour of the day, 24-hour clock (00..23)', ->

  # describe 'given %I', ->
  #   it 'gives hour of the day, 12-hour clock (01..12)', ->

  # describe 'given %j', ->
  #   it 'gives day of the year (001..366)', ->

  # describe 'given %m', ->
  #   it 'gives month of the year (01..12)', ->

  # describe 'given %M', ->
  #   it 'gives minute of the hour (00..59)', ->

  # describe 'given %p', ->
  #   it 'gives meridian indicator ("AM"  or  "PM")', ->

  # describe 'given %S', ->
  #   it 'gives second of the minute (00..60)', ->

  # describe 'given %U', ->
  #   it 'gives week  number  of the current year, starting with the first Sunday as the first day of the first week (00..53)', ->

  # describe 'given %W', ->
  #   it 'gives week  number  of the current year, starting with the first Monday as the first day of the first week (00..53)', ->

  # describe 'given %w', ->
  #   it 'gives day of the week (Sunday is 0, 0..6)', ->

  # describe 'given %x', ->
  #   it 'gives preferred representation for the date alone, no time', ->

  # describe 'given %X', ->
  #   it 'gives preferred representation for the time alone, no date', ->

  # describe 'given %y', ->
  #   it 'gives year without a century (00..99)', ->

  describe 'given %Y', ->
    it 'gives year with century', ->
      expect(@o.strftime('%Y')).toEqual('2012')

  describe 'given %Z', ->
    it 'gives time zone name', ->
      expect(@o.strftime('%Z')).toEqual('EST')

  # describe 'given %%', ->
  #   it 'gives "%" character', ->
