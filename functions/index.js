const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./util/fbAuth");


const { getAllScreams, postOneScream } = require("./handlers/screams");
const {signup, login} = require("./handlers/users");


 // const firebase = require("firebase");
// firebase.initializeApp(firebaseConfig); 


//screams routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//users routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/users/image", uploadImage)


exports.api = functions.region("europe-west2").https.onRequest(app);
