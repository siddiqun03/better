'use strict';

/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home', ({strapi}) => ({
    async getAll(ctx) {
	const team = await strapi.entityService.findMany('api::team.team', {populate: 'img'});
	const home = await strapi.entityService.findMany('api::home.home', {populate: 'img'});
	const about_us = await strapi.entityService.findMany('api::about-us.about-us', {populate: 'img'});
	const our_product = await strapi.entityService.findMany('api::our-product.our-product', {populate: 'img'});
	const our_project = await strapi.entityService.findMany('api::our-project.our-project', {populate: 'img'});

	return strapi.customSuccess(ctx, { team, home, about_us, our_product, our_project });
    }
}));
