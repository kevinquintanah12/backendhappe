const express = require('express');
const cors = require('cors');
const ventasRoutes = require('./routes/ventasRoutes');
const productosRoutes = require('./routes/productosRoutes');
const serviciosRoutes = require('./routes/serviciosRoutes');
const variosRouter = require('./routes/variosRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

const app = express();

app.use(express.json());
app.use(cors()); // Habilita CORS para todas las rutas


app.use('/categoria', categoriaRoutes);
app.use('/ventas', ventasRoutes);
app.use('/productos', productosRoutes);
app.use('/servicios', serviciosRoutes);
app.use('/varios', variosRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
