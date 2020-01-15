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
    console.log(req.body.img)
    const catalog = {
        name: req.body.name,
        marca: req.body.marca,
        model: req.body.model,
        catalog: req.body.category,
        price: req.body.price,
        country: req.body.country,
        url_img: req.files[0].filename
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

exports.getProductsByCart = (req, res) => {
    const product = req.body.productsId;
    console.log(product)
    Modules.find({'_id': {$in: product}}).then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.searchCategorys = (req, res) => {
    console.log("test")
    Modules.find({ $text: {$search: req.body.searchText}}).then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}