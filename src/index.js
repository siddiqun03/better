'use strict';

const { customError, customSuccess } = require('./utils/app-response')

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  async register({ strapi }) {
    try {
	strapi.customError = await customError;
     strapi.customSuccess = await customSuccess;
    } catch (err) {
      strapi.log.error("error while initializing Redis client, error: ", err);
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
