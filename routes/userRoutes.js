const express = require('express');
const { kayitOl, girisYap, profilGor, profilGuncelle } = require('../controllers/userController');
const router = express.Router();

router.post('/kayit', kayitOl);
router.post('/giris', girisYap);
router.get('/profil', profilGor);
router.put('/profil', profilGuncelle);

module.exports = router;