const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

async function conectaDataBase() {
  try {
    const connection = await mongoose.connect("mongodb+srv://pinheiroleticia404:root@cluster0.rpoozy3.mongodb.net/db_amigo_quatro_patos?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao banco de dados!");
    return connection;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    // Handle connection error appropriately (e.g., restart attempts, notify admins)
    process.exit(1); // Exit the application with an error code
  }
}

app.use(cors());

(async () => {
  try {
    await conectaDataBase();

    app.listen(3333, () => {
      console.log("Servidor rodando na porta 3333");
    });
  } catch (error) {
    console.error("Erro fatal durante a inicialização:", error);
    process.exit(1); // Exit the application with an error code
  }
})();
