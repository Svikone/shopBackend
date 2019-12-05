const Modules = require("../model/catalog");

exports.getCatalogs = (req, res) => {
    Modules.find({
        marca: req.body.marc, 
        model: req.body.model, 
        catalog: req.body.catalog 
    }).then(result => {
        // console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}