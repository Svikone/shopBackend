const Modules = require("../model/category");

exports.addCategory = (req, res) => {
    const category = {
        // body: req.body.body,
        category: req.body.category,
        category_ru: req.body.category_ru,
        url_img: req.files[0].filename,
        selector: "category"
    }
    Modules(category).save().then(result => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.getCategorys = (req, res) => {
    Modules.find({}).then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.removeCategorys = (req, res) => {
    Modules.deleteOne({_id: req.body.id}).then(result => {
        console.log(result)
        res.sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.getCategorysId = (req, res) => {
    Modules.find({_id: req.body.id}).then(result => {
        console.log(result)
        res.sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.updateCategorysId = (req, res) => {
    const category = {
        name: req.body.category,
        name_ru: req.body.category_ru,

    }
    if(req.files.length) {
        category.url_img = req.files[0].filename
    }
    Modules.findOne({_id: req.body.id}).updateOne(category).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

