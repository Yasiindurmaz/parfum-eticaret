const express = require('express');
const { sepetGor, sepetEkle, sepetGuncelle, sepetSil } = require('../controllers/cartController');
const router = express.Router();

router.get('/sepet', sepetGor);
router.post('/sepet', sepetEkle);
router.put('/sepet/:urunId', sepetGuncelle);
router.delete('/sepet/:urunId', sepetSil);

module.exports = router;