const Modules = require("../model/marca");

exports.addMarc = (req, res) => {
    const marc = {
        // body: req.body.body,
        url_img: req.files[0].filename,
        name: req.body.marca,
        selector: "marcs"
    }
    Modules(marc).save().then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}


exports.getMarcs = (req, res) => {
    Modules.find().then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}
