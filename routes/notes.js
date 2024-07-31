
var express = require('express');
var router = express.Router();

//レスポンスのデータ（ノート全件）
const responseObjectDataALL = {
    testObject1 :{
        id:1,
        title: 'ノート１のタイトルです',
        subtitle: 'ノート１のサブタイトル',
        bodyText: 'ノート１の本文',
    },

    testObject2 :{
        id:2,
        title: 'ノート2のタイトルです',
        subtitle: 'ノート2のサブタイトル',
        bodyText: 'ノート2の本文',
    },
};

/**
 * メモを全件取得するAPI
 * @returns {object} data
 * @returns {number} data.id - ID
 * @returns {string} data.title -　タイトル
 * @returns {string} data.text -内容
 * */


router.get('/', function(req, res, next) {
  res.json(responseObjectDataALL);
})

module.exports = router;