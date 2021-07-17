'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	
	class MaritalStatuses extends Model {
		
		static associate(models) {
			// define association here
		}
	};

	MaritalStatuses.init({
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},

		name: DataTypes.STRING

	}, {
		sequelize,
		timestamps: false,

    	modelName: 'MaritalStatuses',
		tableName : 'marital_statuses'
	});

	return MaritalStatuses;
};