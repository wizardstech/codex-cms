const netlifyBuildHook = require('./netlify-build-hook');

const defaultHooks = {
  afterCreate: netlifyBuildHook,
  afterUpdate: netlifyBuildHook,
  afterDestroy: netlifyBuildHook,
};

module.exports = defaultHooks;
