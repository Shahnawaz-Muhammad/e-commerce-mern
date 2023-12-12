const Product = require("../models/product.model");
const User = require("../models/user.model");

const getAllProducts = async (req, res) => {
  console.log('this is all product controller')

  const products = await Product.find({});
  res.send({
    products,
    message: "All Products fetched successfully",
  });
};

const getSingleProduct = async (req,res) => {
    console.log("this is single product controller")

    const product = await Product.findById(req.params.id).populate("owner")
    res.send({
        product,
        message: "Product fetched successfully"
    })
}

const addProduct = async (req,res) => {
    console.log("this is single product controller")
    const {id} = req.user;
    const product = await Product.create({...req.body, owner: id})
    const owner = await User.findById({_id:id})
    owner.products.push(product._id)
    owner.save()
    res.send({
        addProduct,
        message:"Product added successfully"
    })
}


const updateProduct = async (req,res) => {
    console.log("this is single product controller")
    const updatedProduct = await Product.findByIdAndUpdate({_id: req.params.id}, {...req.body}, {new:true})
    res.send({
        product: updatedProduct,
        message:"Product updated successfully"
    })
}

// const deleteProduct = async (req,res) => {
//     console.log("this is single product controller")
//     await Product.findOneAndDelete({_id: req.params.id})
//     res.send({
//         // addProduct,
//         message:"Product deleted successfully"
//     })
// }

module.exports = {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
//   deleteProduct
};
