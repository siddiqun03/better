'use strict';

/**
 * connect-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::connect-us.connect-us');
