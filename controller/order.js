const Modules = require("../model/order");

exports.getOrder = (req, res) => {
    const order = {
        user_name: req.body.user_name,
        phone: req.body.phone,
        status_confirm: 'false',
        status_payment: 'false'
    }
console.log(req.body.user_name)
    Modules(order).save().then(result => {
        console.log(result)
        res.sendStatus(200);

    }).catch(err => {
        res.sendStatus(500)

    })
}