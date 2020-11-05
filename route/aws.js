const AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-southeast-1",
    accessKeyId: "AKIASQ7E75LEARAPLMV7",
    secretAccessKey: "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"
})

let docClient = new AWS.DynamoDB.DocumentClient();

function getAll(res) {
    let params = {
        TableName: "maytinhs"
    }
    docClient.scan(params, ((err, data) => {
        if (err) {
            console.log('err , ', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                err: 'Loi khong the truy cap du lieu'
            }))
        } else {
            let maytinhs = [];
            data.Items.forEach((item, index) => {
                maytinhs.push(item);
            });
            res.render('index', {
                maytinhs: maytinhs,
            })
        }
    }));
}

function createItem(mamay, ten, hang, gia, thongsokythuat, res) {
    let params = {
        TableName: 'maytinhs',
        Item: {
            mamay: mamay,
            ten: ten,
            hang: hang,
            gia: gia,
            thongsokythuat: thongsokythuat
        }
    }

    docClient.put(params, ((err, data) => {
        if (err) {
            console.log('err , ', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                err: 'Loi khong the them du lieu'
            }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: 'Them san pham thanh cong',
                maytinh: {
                    mamay: mamay,
                    ten: ten,
                    hang: hang,
                    gia: gia,
                    thongsokythuat: thongsokythuat
                }
            }));
            // res.redirect('index')
        }
    }));
}

module.exports = {
    getAll: getAll,
    createItem: createItem
}