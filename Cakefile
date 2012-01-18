{exec} = require('child_process')

callback = (err, stdout, stderr) ->
  throw err if err
  console.log(stdout + stderr)

task 'spec', 'Run Jasmine specs in spec/', ->
  exec 'node_modules/.bin/jasmine-node --coffee spec/', callback
