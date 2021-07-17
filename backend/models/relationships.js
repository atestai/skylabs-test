'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	
	class Relationships extends Model {
		
		static associate(models) {
			// define association here
		}
	};

	Relationships.init({
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

    	modelName: 'Relationships',
		tableName : 'relationships'
	});

	return Relationships;
};