const Modules = require("../model/model");

exports.addModel = (req, res) => {
    const model = {
        // body: req.body.body,
        name: req.body.model,
        marca: req.body.marc,
        url_img: req.files[0].filename,
        selector: "models"
    }
    Modules(model).save().then(result => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.getModelsByMarc = (req, res) => {

    Modules.find({marca: req.body.id}).then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.getModels = (req, res) => {
    Modules.find().then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.removeModels = (req, res) => {
    Modules.deleteOne({_id: req.body.id}).then(result => {
        console.log(result)
        res.sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.getModelsById = (req, res) => {
    Modules.find({'_id': {$in: req.body.id}}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.updateModels = (req, res) => {
    const model = {
        name: req.body.name,
        marca: req.body.marca
    }
    if(req.files.length) {
        model.url_img = req.files[0].filename
    }
    Modules.findOne({_id: req.body.id}).updateOne(model).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}