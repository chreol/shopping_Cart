import Product from '../models/product';
import { connect, disconnect } from 'mongoose';

connect('mongodb://localhost:27017/shopping')

var products = [
new Product({
    imagePath: 'https://techcrunch.com/wp-content/uploads/2017/05/essential-phone1.jpg?w=730&crop=1',
    title: 'Nice phone',
    description: 'awersome phone!!! ',
    price: 25
}),
new Product({
    imagePath: 'https://i1.wp.com/www.priceboon.com/wp-content/uploads/2018/09/Lenovo-Z5-Pro.jpg?fit=400%2C400&ssl=1',
    title: 'Nice phone',
    description: 'frucftydrtct fdfs !!!',
    price: 45
}),
new Product({
    imagePath: 'https://assets.imgix.net/hp/snowshoe.jpg',
    title: 'Nice phone',
    description: ' dfdsfdf fdsfefegfwg !!!',
    price: 90
}),
new Product({
    imagePath: 'https://assets.imgix.net/unsplash/pineneedles.jpg',
    title: 'Nice phone',
    description: 'awersome pine needles needed!!!',
    price: 18
}),
new Product({
    imagePath: 'https://assets.imgix.net/unsplash/bridge.jpg',
    title: 'Nice phone',
    description: 'bridge structure!!!',
    price: 18
}),
new Product({
    imagePath: 'https://assets.imgix.net/unsplash/transport.jpg',
    title: 'Nice phone',
    description: 'tranport for furture!!!',
    price: 18
}),
new Product({
    imagePath: 'https://assets.imgix.net/unsplash/pineneedles.jpg?auto=compress&w=900&h=600&fit=crop',
    title: 'Nice phone',
    description: 'pine needles!!!',
    price: 18
})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    disconnect();
}
