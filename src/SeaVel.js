const { PythonShell } = require('python-shell');
const path = require('path');
const memoize = require('memoizee');

/**
 *
 * @param {location} param0
 */
module.exports = {
  SeaVel: memoize(
    function({ lon, lat, city, date, freq }) {
      let options = {
        mode: 'text',
        pythonPath: path.resolve(__dirname, '..', 'venv', 'python.exe'),
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '.',
        args: [
          JSON.stringify({
            lon,
            lat,
            city,
            date,
            freq
          })
        ]
      };

      return new Promise((resolve, reject) => {
        PythonShell.run(
          path.resolve(__dirname, 'SeaVel-maps.py'),
          options,
          (err, output) => {
            if (err) {
              reject(err);
            }

            try {
              const result = JSON.parse(output);

              resolve(result);
            } catch (error) {
              reject(error);
            }
          }
        );
      });
    },
    {
      normalizer: function(args) {
        // args is arguments object as accessible in memoized function
        console.log('Memoize args: ', args);
        return JSON.stringify(args[0]);
      }
    }
  )
};
