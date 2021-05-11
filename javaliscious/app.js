const express = require('express');
const stripe = require('stripe')('sk_test_51IlG26JCX6EEDeQhSq2gnjz6SRxIuqz5quBB7zlX7aGSEaALVhU9l9HDBslPIXSBTlO7Hpgu6tyZHCS4RoOXChMk00HNhTHGao');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars',exphbs({deafultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req,res) => {
    res.render('index');
});

//sample success page
app.get('/success', (req,res) => {
    res.render('success');
});

// Charge Route
app.post('/charge', (req, res) => {
    const  amount = .50;
    //console.log(req.body);
    //res.send('TEST');

    stripe.customers.create({            //Create customer and return promiss with email and token
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer = stripe.chargers.create({
        amount,
        description: 'Coffee Purchase',
        currency:'usd',
        customer:customer.id
    }))
    .then(charge => res.render('success'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

