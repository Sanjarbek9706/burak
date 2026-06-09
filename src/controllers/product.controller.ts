import { Request, Response } from "express";
import Errors from "../libs/types/Errors";
import  { T } from "../libs/types/common";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render("products");
    }  catch (err) {
        console.log("Error getAllProducts:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

productController.createNewProducts = async (req: Request, res: Response) => {
    try {
        console.log("createNewProducts");
        res.send("Done!")
    }  catch (err) {
        console.log("Error createNewProducts:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

productController.updateChosenProducts = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProducts");
    }  catch (err) {
        console.log("Error updateChosenProducts:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
  };

export default productController;

