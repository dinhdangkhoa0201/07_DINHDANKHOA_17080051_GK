const express = require('express');
const route = express.Router();
const AWS = require('./aws');

route.get('', (req, res) => {
    AWS.getAll(res);
})

route.post('', (req, res) => {
    let mamay =  req.body.mamay;
    let ten = req.body.ten;
    let hang = req.body.hang;
    let gia = req.body.gia;
    let thongsokythuat = req.body.thongsokythuat;

    console.log('mamay : ', mamay,', ten : ', ten,', hang : ', hang,', gia : ', gia,', thongsokythuat : ', thongsokythuat);

    AWS.createItem(mamay, ten, hang, gia, thongsokythuat, res);
})

module.exports = route;