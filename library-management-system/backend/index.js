// import express from "express";
// import mongoose from "mongoose";
// import PORT from "../config.js";

// import { Book } from "../models/bookModel.js";
// import booksRoute from "./booksRoute.js";
// import cors from "cors";
// import userRoute from "./userRoute.js";
// const app = express();

// // Middleware for parsing request body
// app.use(express.json());

// // Middleware for handling CORS Policy
// app.unsubscribe(
//     cors({
//         origin: 'https://localhost:3000',
//         method: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )


// // app.get('/', (request, respond) => {
// //     console.log(request);
// //     return (respond.status(234).send("welcome to the my project"));
// // });


// app.use('/books', booksRoute);
// app.use('/users', userRoute);
// // connect mongoose

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

// export default apiv1
import express from "express";
import booksRoute from "./routes/booksRoute.js";
import userRoute from "./routes/userRoute.js";
import { connect } from "mongoose";
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";

const apiv1 = express();


apiv1.use('/books', booksRoute);
apiv1.use('/users', userRoute);

mongoose
    .connect(mongoDBURL)
    // then(()=>{
    //     const connectDb = async () => {
    //         return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
    // });
    .then(() => {
        // console.log('App is connected')
        // app.listen(PORT, () => {
        //     console.log(`APP yesssssssss listening to port: ${PORT}`)
        // });
        const connectDb = async () => {
            // return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
            app.listen(8080, () => {
                console.log(`app yess listening to the port ${8080}`)
            });
        }
    });


export default apiv1;