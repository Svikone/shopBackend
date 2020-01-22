const Modules = require("../model/marca");

exports.addMarc = (req, res) => {
    const marc = {
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

exports.getMarcsId = (req, res) => {
    Modules.find({_id: req.body.id}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.updateMarcs = (req, res) => {
    const marc = {
        name: req.body.name,
    }
    if(req.files.length) {
        marc.url_img = req.files[0].filename
    }
    Modules.findOne({_id: req.body.id}).updateOne(marc).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.removeMarcsId = (req, res) => {
    Modules.deleteOne({_id: req.body.id}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

