const Modules = require("../model/catalog");

exports.getCatalogsByCondition = (req, res) => {
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

exports.addCatalogs= (req,res) => {
    const catalog = {
        name: req.body.name,
        marca: req.body.marca,
        model: req.body.model,
        catalog: req.body.category,
        price: req.body.price,
        country: req.body.country,
    }
    Modules(catalog).save().then(result => {
        // console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.getCatalogs = (req, res) => {
    Modules.find().then(result => {
        // console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}