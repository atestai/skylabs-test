
const RecordsModel = require('../models').Records;
const {Workclasses, EducationLevels,  MaritalStatuses, Occupations, Relationships, Races, Sexes, Countries } = require("../models");


RecordsModel.belongsTo(Workclasses, {
    as: 'workclass',
    foreignKey: 'workclass_id',
    constraints: false
});

RecordsModel.belongsTo(EducationLevels, {
    as: 'education_levels',
    foreignKey: 'education_level_id',
    constraints: false
});

RecordsModel.belongsTo(MaritalStatuses, {
    as: 'marital_status',
    foreignKey: 'marital_status_id',
    constraints: false
});

RecordsModel.belongsTo(Occupations, {
    as: 'occupation',
    foreignKey: 'occupation_id',
    constraints: false
});


RecordsModel.belongsTo(Relationships, {
    as: 'relationship',
    foreignKey: 'relationship_id',
    constraints: false
});


RecordsModel.belongsTo(Races, {
    as: 'race',
    foreignKey: 'race_id',
    constraints: false
});


RecordsModel.belongsTo(Sexes, {
    as: 'sex',
    foreignKey: 'sex_id',
    constraints: false
});


RecordsModel.belongsTo(Countries, {
    as: 'country',
    foreignKey: 'country_id',
    constraints: false
});



const Records = {

    async getAll(req, res){

        const attributes = ['id', 'age', 'education_num', 'capital_gain', 'capital_loss', 'hours_week', 'over_50k'];     
        
        const {offset=undefined} = req.query;
        const {count:limit=undefined} = req.query;
        const where = undefined;
    

        const total = await RecordsModel.count({where});

        const data = await RecordsModel.findAll({
            attributes, 

            include: ['workclass', 'education_levels', 'marital_status', 'occupation', 'relationship', 'race', 'sex', 'country'],

            where,
            offset,
            limit
        });

       
        res.status(200).json({
            meta: {
                total,
                offset,
                limit
            },
            data
        });
    }
}

module.exports = Records;
