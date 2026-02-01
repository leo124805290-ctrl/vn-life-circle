const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');
const marketplaceRoutes = require('./routes/marketplace');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/marketplace', marketplaceRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
