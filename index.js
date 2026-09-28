const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: "https://ecommerceapp-zeta-ten.vercel.app"
}));

app.use(express.json());
app.use(express.static("public"));

require("./db-connect");

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


app.get("/", (req, res) => {
    res.send("Backend Server is Running");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});