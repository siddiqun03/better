'use strict';

/**
 * connect-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::connect-us.connect-us', ({strapi}) => ({
    async getAll(ctx) {
    	const connectUsRecords = await strapi.entityService.findMany('api::connect-us.connect-us', { _sort: 'createdAt:asc' } );
	console.log(connectUsRecords);
	const updatePromises = connectUsRecords.map(record =>
  	strapi.query('api::connect-us.connect-us').update({ where: { id: record.id }, data: { isActive: true } })
	);
	const results = await Promise.all(updatePromises);

	return strapi.customSuccess(ctx, { connect_us: results.sort() });
    },
	
    async getInActive(ctx) {
	 const count = await strapi.query('api::connect-us.connect-us').count({ filters: { isActive: false } });
    	 
	 return strapi.customSuccess(ctx, {count});
    }
}));
