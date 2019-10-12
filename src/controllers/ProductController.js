const mongodb = require('mongoose');
const Product = mongodb.model('Product');


module.exports = {
    /**
     * @swagger
     * /api/products:
     *   get:
     *     tags:
     *       - List
     *     description: list product
     *     produces:
     *       - application/json
     
    *     responses:
    *       200:
    *         description: Return saved user
    *       404:
    *         description: Not found
    */

    async index(req, res){
        const products = await Product.find();
        return res.json(products);
    },

    async loja(req, res){
        const product = await Product.create(req.body)

        return res.json(product);
    },

    async delathes(req, res){
        const product = await Product.findbyId(req.params.id);
        return res.json(product);
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(product);
    },
    async delete(req, res){
       await Product.findByIdAndDelete(req.params.id);

       return res.send()
    }
}
