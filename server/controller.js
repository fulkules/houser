module.exports = {
    getList: (req, res) => {
        const db = req.body.get('db');

        db.get_all_homes().then(response => {
            res.status(200).send(response);
        })
    }
}