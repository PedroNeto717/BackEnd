import mongoose  from "mongoose";

mongoose.connect(
    "mongodb+srv://PedroNeto:PedroNeto@meucluster.ymuob.mongodb.net/BancoDeDadosProva?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Banco de dados conectado!");
    })
    .catch((error) => {
        console.log(`Erro ao conectar com o banco: ${error}`);
      });

      export { mongoose };
