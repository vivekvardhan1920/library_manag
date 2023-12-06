// import { connect } from "mongoose";
// // mongoose
// //     .connect(mongoDBURL)
// // const connectDb = async () => {
// //     return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })

// // }
// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log('App is connected')
//         app.listen(PORT, () => {
//             console.log(`APP yesssssssss listening to port: ${PORT}`)
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// // export default connectDb;
// const { connect } = require("mongoose")
import connect from "mongoose";
import { mongoDBURL } from "./config";

const connectDb = async () => {
    return connect(process.env.mongoDBURL, { dbName: process.env.DB_NAME })
}

module.exports = { connectDb }