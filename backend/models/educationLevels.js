'use strict';

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class EducationLevels extends Model {
		
		static associate(models) {
			// define association here
		}
	};

	EducationLevels.init({
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

    	modelName: 'EducationLevels',
		tableName : 'education_levels'
	});

	return EducationLevels;
};