**Parfüm E-Ticaret Projesi**

Bu proje, bir parfüm e-ticaret sitesi için geliştirilmiştir. Proje, Node.js ve Express.js kullanarak geliştirilmiştir.

**Dosya Yapısı**

Projenin dosya yapısı aşağıdaki gibidir:
```markdown
parfum-ecommerce/
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
├── app.js
├── package.json
```
**Sunucu**

Sunucu, `app.js` dosyasında tanımlanmıştır. Sunucu, Express.js kullanarak oluşturulmuştur ve 5000 portunda çalışmaktadır.

**Kullanıcı Yönetimi**

Kullanıcı yönetimi, `userController.js` dosyasında tanımlanmıştır. Kullanıcı kaydı, giriş, profil görüntüleme ve profil güncelleme işlemleri bu controller tarafından yönetilmektedir.

**Ürün Yönetimi**

Ürün yönetimi, `productController.js` dosyasında tanımlanmıştır. Ürün listesi, ürün detayı ve ürün ekleme işlemleri bu controller tarafından yönetilmektedir.

**Sepet Yönetimi**

Sepet yönetimi, `cartController.js` dosyasında tanımlanmıştır. Sepet görüntüleme, sepet ekleme, sepet güncelleme ve sepet silme işlemleri bu controller tarafından yönetilmektedir.

**Sipariş Yönetimi**

Sipariş yönetimi, `orderController.js` dosyasında tanımlanmıştır. Sipariş oluşturma, sipariş listesi, sipariş detayı işlemleri bu controller tarafından yönetilmektedir.

**Kullanım**

Proje, Node.js ve Express.js kullanarak geliştirilmiştir. Proje, 5000 portunda çalışmaktadır. Kullanıcı kaydı, giriş, profil görüntüleme ve profil güncelleme işlemleri için `/api/user` endpoint'ini kullanabilirsiniz. Ürün listesi, ürün detayı ve ürün ekleme işlemleri için `/api/product` endpoint'ini kullanabilirsiniz. Sepet görüntüleme, sepet ekleme, sepet güncelleme ve sepet silme işlemleri için `/api/cart` endpoint'ini kullanabilirsiniz. Sipariş oluşturma, sipariş listesi, sipariş detayı işlemleri için `/api/order` endpoint'ini kullanabilirsiniz.