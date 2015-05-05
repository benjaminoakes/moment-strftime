{exec} = require('child_process')
fs = require('fs')
rmrf = require('rimraf')

callback = (err, stdout, stderr) ->
  throw err if err
  console.log(stdout + stderr)

task 'clean', 'Clean generated files', ->
  rmrf.sync('build')
  rmrf.sync('node_modules')

task 'spec', 'Run Jasmine specs in spec/', ->
  exec 'jasmine-node --coffee spec/', callback

task 'build', 'Build to minified JavaScript', ->
  exec 'coffee --output build --compile lib/moment-strftime.coffee', (err, stdout, stderr) ->
    callback(err, stdout, stderr)
    exec 'uglifyjs --output build/moment-strftime.min.js build/moment-strftime.js', callback

task 'release', 'Generate release files', ->
  packageInfo = JSON.parse(fs.readFileSync('package.json'))

  ['moment-strftime.js', 'moment-strftime.min.js'].forEach (filename) ->
    suffix = filename.split('.')
    suffix.shift()
    suffix = suffix.join('.')

    versioned = "#{packageInfo.name}-#{packageInfo.version}.#{suffix}"

    fs.writeFileSync("build/#{versioned}", fs.readFileSync("build/#{filename}"))

  console.log('Run `npm publish` when ready.')
