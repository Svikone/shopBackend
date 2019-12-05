const Modules = require("../model/marca");

exports.addMarc = (req, res) => {
    const marc = {
        // body: req.body.body,
        name: req.body.marca,
        url_img: "qwe",
        selector: "marcs"
    }
    Modules(marc).save().then(result => {
        res.sendStatus(200);
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
