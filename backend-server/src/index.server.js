const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(require("morgan")("dev")); // Morgan to log requests on server console
app.use(cors()); // for cross-domain requests

// mongodb connected
env.config(); // environment variable or you can say constants
const DATABASE_URL = process.env.DATABASE_URL || "";
const PORT = process.env.PORT || 8000;
mongoose
    .connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.log("MongoDB Error:\n", error));

// Import Routes
const userRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

// Routes
// body parser for pass json data
app.use(express.json());
//show file database via url
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", userRoutes);
app.use("/api", productRoutes);

// app.use("/api", (req, res) => {
//     return res.status(200).json({
//         message: "API is working ",
//     });
// });

// for error
// app.use((req, res, next) => {
//     const error = new Error("Not Found");
//     error.status = 404;
//     next(error);
// });

// Handle all the previous errors (including 404 and others)
// app.use((error, req, res, next) => {
//     console.log(req.body);
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message,
//         },
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
