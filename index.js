const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=3000;

app.get('/', (req, res) => {

    res.send('Hello, World!');
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);     
});

mongoose.connect('mongodb+srv://sachinrv19:PvNCWOTzbIDyOi7h@cluster0.1qoem00.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })


