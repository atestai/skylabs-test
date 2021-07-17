const EducationLevelsModel = require('../models').EducationLevels;

const EducationLevels = {

    async getAll(req, res){

        const {offset=undefined} = req.query;
        const {count:limit=undefined} = req.query;
        
        const where = undefined;

        const total = await EducationLevelsModel.count({where});

        const data = await EducationLevelsModel.findAll({
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

module.exports = EducationLevels;