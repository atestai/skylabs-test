'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	
	class Races extends Model {
		
		static associate(models) {
			// define association here
		}
	};

	Races.init({
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

    	modelName: 'Races',
		tableName : 'races'
	});

	return Races;
};