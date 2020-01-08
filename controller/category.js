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