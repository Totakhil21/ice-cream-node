// Import Express
import express from 'express';

// Instantiate an Express application
const app = express();

// Middleware for form data parsing
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));


// Admin page to view all orders
app.get('/admin', (req, res) => {
    res.render('order-summary', { orders });
});


// Define a port number
const PORT = 3000;

// Store orders in an array
const orders = [];

// Home Page Route
app.get('/', (req, res) => {
    res.render('home');
});

// Admin Page - View all orders
app.get('/admin', (req, res) => {
    res.render('order-Summary', { orders });
});

// Thank You Route - Process Order Submission
app.post('/thankyou', (req, res) => {
    console.log(req.body);

    // Store the order information
    const order = {
        fname: req.body.fname,
        email: req.body.email,
        method: req.body.method,
        flavor: req.body.flavor,
        toppings: req.body.Toppings, 
        comments: req.body.Comments
    };

    // Add order to the orders array
    orders.push(order);

    // Render thank you page with order details
    res.render('thankyou', { order });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
