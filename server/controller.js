module.exports = {
    getList: (req, res) => {
        const db = req.app.get('db');

        db.get_all_homes().then(response => {
            res.status(200).send(response);
        })
    },
    addHome: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zipcode } = req.body;
        console.log(req.body)

        db.add_home([name, address, city, state, zipcode]).then(response => {
            res.status(200).send(response);
        })
    },
    deleteHome: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_home([id]).then(response => {
            res.status(200).send(response)
        })
    },
    updateHome: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { home } = req.body;

        db.update_home([id, home]).then(response => {
            res.status(200).send(response)
        })
    }
}