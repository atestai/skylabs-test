
const sequelize = require('sequelize');
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


const purge = x => JSON.parse(JSON.stringify(x));


const getData = async (query) =>{

    const attributes = ['id', 'age', 'education_num', 'capital_gain', 'capital_loss', 'hours_week', 'over_50k'];     
    
    const {offset=undefined} = query;
    const {count:limit=undefined} = query;
    const where = undefined;


    const total = await RecordsModel.count({where});

    const data = await RecordsModel.findAll({
        attributes, 
        include: ['workclass', 'education_levels', 'marital_status', 'occupation', 'relationship', 'race', 'sex', 'country'],
        where,
        offset,
        limit
    });

    return {
        meta :{ 
            total,
            count: data.length,
            offset, 
            limit
        } , 
        data};
};

const Records = {

    
    async getAll(req, res){

        const {meta, data} = await getData(req.query);
       
        res.status(200).json({
            meta,
            data
        });
    },


    async getCsv(req, res){

        const fs = require('fs');
        const os = require('os');
        const createCsvWriter = require('csv-writer').createObjectCsvWriter;

        const {data} = await getData(req.query);
       
        const filename = os.tmpdir() + '/' + new Date().getTime() + ".csv" ;

        console.log(filename);
        console.log(data.length);

        if (!data.length){
            return res.status(204).json();
        }
        
        const header = [];
        const schema = purge(data[0]);

        for (const key in schema) {
            header.push({
                id : key,
                title : key
            });
        }

        //console.log(header);

        const record = data.map( record => {

            const item = purge(record);
            const ret = {};
            
            for (const key in item) {

                if (Object.hasOwnProperty.call(item[key], 'name')){
                    ret[key] = item[key].name;
                }
                else{
                    ret[key] = item[key];
                }
            }
           
            return ret;
        })


        const csvWriter = createCsvWriter({
            path: filename,
            header

        });
        
        await csvWriter.writeRecords(record)
        

        res.download(filename, () => {
            try {
                fs.unlinkSync(filename)
            } catch(err) {
                console.error(err)
            }
        });       
    },


    async getStats(req, res){

        //console.log(req.params);

        const {aggregationType=undefined} = req.params;
        const {aggregationValue:aggregationFilter=undefined} = req.params;

        if (!["age", "education_level_id", "occupation_id"].includes(aggregationType)) {
            return res.status(422).json({
                code : 1,
                message : 'aggregationType missing or invalid'
            });    
        }

        if (aggregationFilter === undefined) {
            return res.status(422).json({
                code : 2,
                message : 'aggregationValue missing or invalid'
            });    
        }

        
        const where = {};
        where[aggregationType] = aggregationFilter;

        const data = await RecordsModel.findOne({
            attributes :[ 
                [sequelize.fn('sum', sequelize.col('capital_gain')), 'capital_gain_sum'],
                [sequelize.fn('avg', sequelize.col('capital_gain')), 'capital_gain_avg'],
                [sequelize.fn('sum', sequelize.col('capital_loss')), 'capital_loss_sum'],
                [sequelize.fn('avg', sequelize.col('capital_loss')), 'capital_loss_avg'],
            ],
            where
        });

        //console.log(data.dataValues);

        where.over_50k = true;
        const over_50k_count = await RecordsModel.count({
            where
        });    

        //console.log(data_over50k);

        where.over_50k = false;
        const under_50k_count = await RecordsModel.count({
            where
        });    


        res.status(200).json({
            aggregationType,
            aggregationFilter : parseInt(aggregationFilter),
            ...data.dataValues,
            over_50k_count,
            under_50k_count
        });
    }
}

module.exports = Records;
