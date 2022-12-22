const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const { render } = require('ejs');

// express app
const app = express();

// connect to mongoDB
const dbuURI = 'mongodb+srv://alec_watts:s4A8nM4!3pryFh7P@nodetuts.mqfq9ia.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(dbuURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.error(err));


// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// middleware & static files, comes with express
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true } ));
app.use(morgan('dev')); 


app.get('/', (req, res) => {
    res.redirect('/blogs');
});

// blog routes
app.use('/blogs', blogRoutes);


app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


// 404 page
app.use((req, res) => {
    // Need to explicity delcare 404 status
    res.status(404).render('404', { title: '404' });
});