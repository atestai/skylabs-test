'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	
	class Workclasses extends Model {
		
		static associate(models) {
			// define association here
		}
	};

	Workclasses.init({
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

    	modelName: 'Workclasses',
		tableName : 'workclasses'
	});

	return Workclasses;
};