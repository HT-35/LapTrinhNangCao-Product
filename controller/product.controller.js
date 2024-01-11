const { Product } = require("../models/index");

const createProductController = async (req, res) => {
  try {
    const { NameProduct, IdProduct, Price, origin } = req.body;
    //   const data = req.body;
    //   console.log(data);
    const createPrudct = await Product.create({
      NameProduct,
      IdProduct,
      Price,
      origin,
    });
    console.log(createPrudct);
    res.status(200).json(createPrudct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const GetProductByIDController = async (req, res) => {
  try {
    const { IdProduct } = req.body;

    const getProductByID = await Product.findOne({
      where: {
        IdProduct,
      },
    });
    if (getProductByID == null) {
      console.log(getProductByID);
      res.status(200).json({
        status: false,
        data: "Not Found !!!",
      });
    }
    console.log(getProductByID);
    // res.status(200).json({
    //   status: true,
    //   data: getProductByID,
    // });
    res.status(200).json({
      getProductByID,
    });
  } catch (error) {
    // res.status(400).json(error);
    res.status(400).json({
      status: false,
      data: error,
    });
  }
};

module.exports = {
  createProductController,
  GetProductByIDController,
};
