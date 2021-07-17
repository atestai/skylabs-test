
const RecordsModel = require('../models').Records;


const Records = {

    async getAll(req, res){

        const {offset=undefined} = req.query;
        const {count:limit=undefined} = req.query;
        
        const where = undefined;

        const total = await RecordsModel.count({where});

        const data = await RecordsModel.findAll({
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
