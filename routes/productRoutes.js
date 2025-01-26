const express = require('express');
const { urunleriGetir, urunDetay } = require('../controllers/productController');
const router = express.Router();

router.get('/urunler', urunleriGetir);
router.get('/urunler/:id', urunDetay);

module.exports = router;