const axios = require('axios');

const netlifyBuildHook = async entry => {
  axios
    .post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
    .catch(() => {
      // Ignore
    });
};

module.exports = netlifyBuildHook;
