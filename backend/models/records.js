'use strict';

const {Model} = require("sequelize");


module.exports = (sequelize, DataTypes) => {
	
	class Records extends Model {};

	Records.init({
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},

		age					: DataTypes.INTEGER,
		workclass_id 		: DataTypes.INTEGER,
		education_level_id 	: DataTypes.INTEGER,
		education_num 		: DataTypes.INTEGER,
		marital_status_id 	: DataTypes.INTEGER,
		occupation_id 		: DataTypes.INTEGER,
		relationship_id 	: DataTypes.INTEGER,
		race_id 			: DataTypes.INTEGER,
		sex_id 				: DataTypes.INTEGER,
		capital_gain 		: DataTypes.INTEGER,
		capital_loss 		: DataTypes.INTEGER,
		hours_week			: DataTypes.INTEGER,
		country_id			: DataTypes.INTEGER,
		over_50k			: DataTypes.BOOLEAN,


	}, {
		sequelize,
		timestamps: false,

    	modelName: 'Records',
		tableName : 'records'
	});


	return Records;
};