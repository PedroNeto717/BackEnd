import { model, Schema } from "mongoose";

const pcSchema = new Schema(

{
   dono: 
   {
        type: String,
        required: [true, "Campo obrigatório! "],
    },
    placamae: 
    {
        type: String,
        required: [true, "Campo obrigatório! "],
    },
   processador: 
   {
        type: String,
        required: [true, "Campo obrigatório! "],
    },
    memoria: 
    {
        type: Number,
        required: [true, "Campo obrigatório! "],
    },
    armazenamento: 
    {
        type: String,
        required: [true, "Campo obrigatório! "],
    },
    fonte: 
    {
        type: String,
        required: [true, "Campo obrigatório! "],
    },
},

{
    timestamps: true,
}

);

export default  model ("pcs", pcSchema);