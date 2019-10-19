const { PythonShell } = require('python-shell');

PythonShell.run('./SeaVel-maps.py', null, (err, output) => {
  if (err) {
    console.error(err);
  }

  console.log('Python output: ', output);
});
