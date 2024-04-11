import mongoose from "mongoose" ;
import express from 'express';

const app = express();
const port = 3000;

const DbString = "mongodb+srv://arkajyotikundu415:Arkajyoti8523@clustertest.2nyhdwm.mongodb.net/TestConnections";


const DbConnection=async()=>{
   const DBConnectionInstance=mongoose.connect(DbString)
   .then(()=>{
    console.log("Database Connected Successfully !!!");
   })
  .catch((Error)=>{
    console.error("Error connecting to the database:", Error);
  process.exit(1); // Exit the process if unable to connect to the database
  })
  let data="";
      DBConnectionInstance.then(() => {
          data=mongoose.connection.host;
          console.log(`Your Host Id Is :- ${mongoose.connection.host}`);
      }).catch((error) => {
          console.error("Error getting host:", error);
      });

}


export default DbConnection;

// const DBConnectionInstance=mongoose.connect(DbString)
//     .then(() => {
//         console.log("Database Connected Successfully !");
//         app.listen(port, () => {
//             console.log(`Server is running at http://localhost:${port}`);
//         });
//     })
//     .catch((error) => {
//         console.error("Error connecting to the database:", error);
//         process.exit(1); // Exit the process if unable to connect to the database
//     });
//     let data="";
//     DBConnectionInstance.then(() => {
//         data=mongoose.connection.host;
//         console.log("\n",mongoose.connection.host);
//     }).catch((error) => {
//         console.error("Error getting host:", error);
//     });

// app.get("/", (req, res) => {
//     console.log("Ak is here....");
//     res.send(`This is mongodb database host name :${data}`)
//     // res.json({ user: 'tobi' });
   
// });
