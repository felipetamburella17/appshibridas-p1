import express from "express";
import mongoose from "mongoose";
import { routerAPI }  from "./routes/index.js";
const app = express();
const port = 3000;

mongoose.connect( 'mongodb+srv://admin:VG6rjaeouog82q4c@database.p2gtu3q.mongodb.net/?retryWrites=true&w=majority&appName=Database', { useNewUrlParser: true, useUnifiedTopology: true}  )

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error conectando a MongoDB:'));
db.once('open', () => {
console.log('Conexión exitosa a MongoDB');
});

app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send('<h1> CRUD de Productos </h1>');
})


routerAPI(app);


app.listen( 3000, () =>{
    console.log('Server listening on' + port);
})