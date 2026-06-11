import { ObjectId } from "mongoose";    
import { 
    ProductCollection, 
    ProductSize,
     ProductStatus 
    } from "../enums/product.enam";

    export interface Product {
    _id: ObjectId; 
    productImages: string[];
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: Number;
    productDesc?: string;
    productImeges: string[];
    productViews: number;
}

export interface ProductInput {
    productImages: string[];
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productVolume?: Number;
    productDesc?: string;
    productImeges?: string[];
    productViews?: number;
}

export interface ProductUpdateInput {
    productImages: string[];
    productStatus?: ProductStatus;
    productCollection?: ProductCollection;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    productSize?: ProductSize;
    productVolume?: Number;
    productDesc?: string;
    productImeges?: string[];
    productViews?: number;
}