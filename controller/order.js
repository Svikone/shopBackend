const orderModules = require("../model/order");
const catalogModules = require("../model/catalog");
const orderItemModules = require("../model/order_item");



exports.getOrder = (req, res) => {
    const order = {
        user_name: req.body.user_name,
        phone: req.body.phone,
        status_confirm: false,
        status_payment: false
    }
    const products = req.body.catalogs;

    orderModules(order).save().then(first => {
                // console.log(first)

        products.forEach(product => {
            catalogModules.findById(product.id).then(second => {
                // console.log(second)
                const items = {
                    id: second._id,
                    order_id: first._id,
                    price: second.price,
                    full_price: second.price * product.number,
                    number: product.number,
                    name: second.name

                }


                orderItemModules(items).save().then(third => {
                    console.log(third)
                })
            })
        })
        res.sendStatus(200);

    }).catch(err => {
        res.sendStatus(500)

    })
}

exports.getAllOrder = (req, res) => {
    orderModules.find().then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}

exports.orderById = (req, res) => {

    orderItemModules.find({order_id: req.body.id}).then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500)
    })
}