'use strict';
module.exports = function (server, cb) {
  server.register([
    // Good console.
    {
      register: require('good'),
      options: {
        reporters: [{
          reporter: require('good-console'),
          events: {
            response: '*',
            log: '*'
          }
        }]
      }
    },
    {
      register: require('h2o2')
    }
    // Plugin registration done.
  ], (err) => cb(err));
};
