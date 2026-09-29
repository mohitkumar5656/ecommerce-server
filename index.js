const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db-connect");

const app = express();

const allowedOrigins = [
    "https://ecommerceapp-zeta-ten.vercel.app",
    "https://ecommerceapp-j002chl11-mohit-1b85.vercel.app",
    "https://ecommerceapp-git-main-mohit-1b85.vercel.app"
];

app.use(cors({
    origin: allowedOrigins
}));

app.use(express.json());
app.use(express.static("public"));

// Database connection only for API requests
app.use("/api", async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Database Connection Failed"
        });
    }
});

const maincategoryRoute = require("./routes/Maincategory");
app.use("/api/maincategory", maincategoryRoute);

const subcategoryRoute = require("./routes/Subcategory");
app.use("/api/subcategory", subcategoryRoute);

const brandRoute = require("./routes/Brand");
app.use("/api/brand", brandRoute);

const productRoute = require("./routes/Product");
app.use("/api/product", productRoute);

const featureRoute = require("./routes/Feature");
app.use("/api/feature", featureRoute);

const newsletterRoute = require("./routes/Newsletter");
app.use("/api/newsletter", newsletterRoute);

const testimonialRoute = require("./routes/Testimonial");
app.use("/api/testimonial", testimonialRoute);

const settingRoute = require("./routes/Setting");
app.use("/api/setting", settingRoute);

const faqRoute = require("./routes/Faq");
app.use("/api/faq", faqRoute);

app.get("/", (req, res) => {
    res.send("Backend Server is Running");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});