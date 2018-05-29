const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./goal.arguments');
const controller = require('./goal.controller');

let write_only_scopes = write_scopes('Goal');
let read_only_scopes = read_scopes('Goal');

let commonArgsArray = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resourceArgsArray = Object.getOwnPropertyNames(resource_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_args[arg_name]));

const resourceAllArguments = [
	route_args.VERSION,	...commonArgsArray, ...resourceArgsArray,
];

let routes = [
	{
		type: 'get',
		path: '/:version/goal',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getGoal
	},
	{
		type: 'post',
		path: '/:version/goal/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getGoal
	},
	{
		type: 'get',
		path: '/:version/goal/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getGoalById
	},
	{
		type: 'post',
		path: '/:version/goal',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createGoal
	},
	{
		type: 'put',
		path: '/:version/goal/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateGoal
	},
	{
		type: 'delete',
		path: '/:version/goal/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteGoal
	}
];

/**
 * @name exports
 * @summary Goal config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.GOAL
	},
	routes
};
