import express from "express";
import message from "./config/message.js";
const app = express();

// app.get()

app.listen(4032,()=>{
   message('Aguacate', "dangr");
})