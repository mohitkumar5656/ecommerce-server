require("dotenv").config();

const mongoose = require("mongoose");

const Maincategory = require("./models/Maincategory");
const Subcategory = require("./models/Subcategory");
const Brand = require("./models/Brand");

const Product = require("./models/Product");
const data = require("./data.json");

const maincategoryData = [
    {
        name: "male",
        pic: "maincategory/male.jpg",
        status: true
    },
    {
        name: "Female",
        pic: "maincategory/female.jpg",
        status: true
    },
    {
        name: "Kids",
        pic: "maincategory/kids.jpg",
        status: true
    },
    {
        name: "Furniture",
        pic: "maincategory/banner11.jpg",
        status: true
    },
    {
        name: "electronic",
        pic: "maincategory/electronics.jpg",
        status: true
    }
];

const subcategoryData = [
    {
        name: "table",
        pic: "subcategory/pexels-andreaedavis-2829030.jpg",
        status: true
    },
    {
        name: "jeans",
        pic: "subcategory/jeans.jpg",
        status: true
    },
    {
        name: "trouser",
        pic: "subcategory/trouser.jpg",
        status: true
    },
    {
        name: "shirt",
        pic: "subcategory/shirt.jpg",
        status: true
    },
    {
        name: "tshirt",
        pic: "subcategory/tshirt.jpg",
        status: true
    }
];

const brandData = [
    {
        name: "adidas",
        pic: "brand/adidas.png",
        status: true
    },
    {
        name: "Dell",
        pic: "brand/download (3).png",
        status: true
    },
    {
        name: "H  p",
        pic: "brand/download (4).png",
        status: true
    },
    {
        name: "mufti",
        pic: "brand/mufti.png",
        status: true
    },
    {
        name: "nike",
        pic: "brand/nike.png",
        status: true
    },
    {
        name: "puma",
        pic: "brand/puma.jpg",
        status: true
    },
    {
        name: "zara",
        pic: "brand/zara.png",
        status: true
    }
];

async function seedData() {
    try {
        await mongoose.connect(process.env.DB_KEY);

        console.log("Database Connected");

        await Maincategory.deleteMany();
        await Subcategory.deleteMany();
        await Brand.deleteMany();
        await Product.deleteMany();

        await Maincategory.insertMany(maincategoryData);
        await Subcategory.insertMany(subcategoryData);
        await Brand.insertMany(brandData);
       await Product.insertMany(data.product);

        console.log("Maincategory Data Inserted Successfully");
        console.log("Subcategory Data Inserted Successfully");
        console.log("Brand Data Inserted Successfully");
        console.log("Product Data Inserted Successfully");

        await mongoose.disconnect();

    } catch (error) {
        console.log("Error:", error);
    }
}

seedData();