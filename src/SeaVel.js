const { PythonShell } = require('python-shell');
const path = require('path');

/**
 *
 * @param {location} param0
 */
module.exports = {
  SeaVel({ lon, lat, city, date, freq }) {
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
            const { ENSO, seaLevel, globalTemp, fileName } = JSON.parse(output);

            resolve({
              enso: ENSO,
              seaLevel,
              globalTemp,
              fileName
            });
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  }
};
