const withTM = require('./lib/next-transpile-modules')(['shared', 'shared-ts', 'shared-ui', 'lodash-es'], {
  unstable_webpack5: true
});

module.exports = withTM({});
