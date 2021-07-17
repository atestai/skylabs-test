module.exports = {

    getAll : (req, res) => {

        const {offset=undefined} = req.query;
        const {count:limit=undefined} = req.query;

        

        console.log({
            offset, 
            limit
        });


        //offset e count


        res.status(200).send({
            meta: {
                offset,
                limit
            },
            data: []
        });
    }
}