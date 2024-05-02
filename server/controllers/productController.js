const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try {
        let product;
        product = new Product(req.body);
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.modifyProduct = async (req, res) => {
    try {
        const { name, category, location, price } = req.body;
        let product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ msg: 'Product does not exist' });
        }
        product.name = name;
        product.category = category;
        product.location = location;
        product.price = price;
        product = await Product.findOneAndUpdate({ _id: req.params.id }, product, { new: true });
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.getProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ msg: 'Product does not exist' });
        }
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ msg: 'Product does not exist' });
        }
        await Product.findOneAndDelete({ _id: req.params.id })
        res.json({ msg: 'Product successfully removed' });
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}
