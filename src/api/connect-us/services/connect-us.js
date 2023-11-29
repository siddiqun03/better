'use strict';

/**
 * connect-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connect-us.connect-us');
