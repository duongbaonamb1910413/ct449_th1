const express =require("express");
const cors =require("cors");
const ApiError = require("./app/api-error");
const contactRouter =require("./app/routes/contact.route");
const app=express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
    });
});
app.use("/api/contacts",contactRouter);
app.get("/",(req,res)=>{
    res.json({massage: "welcome to contact book application"});
});
module.exports=app;