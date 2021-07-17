'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	
	class Occupations extends Model {
		
		static associate(models) {
			// define association here
		}
	};

	Occupations.init({
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

    	modelName: 'Occupations',
		tableName : 'occupations'
	});

	return Occupations;
};