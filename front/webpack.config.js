const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const productionConfig = require('./webpack.production.config');
const developmentConfig = require('./webpack.development.config');

module.exports = (env, args) => {
  console.log(env);

  if (env.production) {
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
