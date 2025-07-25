const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB conectado com sucesso"))
  .catch(err => console.error("Erro ao conectar MongoDB:", err));

const submissaoRoutes = require('./routes/submissaoRoutes');
app.use('/api/submissoes', submissaoRoutes);

app.get('/', (req, res) => {
  res.send('🚀 API do Observatório da Desinformação está online!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
