const express = require('express');
const path = require('node:path');
const { indexRouter } = require('./routes/indexRouter.js')

const app = express();
const PORT = 3000;
const hostname = '127.0.0.1';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send(error.message);
});

app.listen(PORT, hostname, (error) => {
    if (error) {
        console.error(error);
        throw error;
    }
    console.log(`Server is running at port http://${hostname}:${PORT}`)
});