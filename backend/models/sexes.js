'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	
	class Sexes extends Model {
		
		static associate(models) {
			// define association here
		}
	};

	Sexes.init({
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

    	modelName: 'Sexes',
		tableName : 'sexes'
	});

	return Sexes;
};