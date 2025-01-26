const express = require('express');
const { siparisOlustur, siparisleriGetir, siparisDetay } = require('../controllers/orderController');
const router = express.Router();

router.post('/siparisler', siparisOlustur);
router.get('/siparisler', siparisleriGetir);
router.get('/siparisler/:id', siparisDetay);

module.exports = router;