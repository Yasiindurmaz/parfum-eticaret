const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: ${PORT}`);
});