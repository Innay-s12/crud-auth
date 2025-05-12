require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));