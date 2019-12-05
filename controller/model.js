const Modules = require("../model/model");

exports.addModel = (req, res) => {
    const model = {
        // body: req.body.body,
        name: req.body.model,
        marca: req.body.marc,
        url_img: "qwe",
        selector: "models"
    }
    Modules(model).save().then(result => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.getModel = (req, res) => {

    Modules.find({marca: req.body.id}).then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}