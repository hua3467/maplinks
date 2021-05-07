// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD7LNvOL26cGrZKmWJxwlwwdFxRF2hstME",
  authDomain: "time-capsule-43322.firebaseapp.com",
  databaseURL: "https://time-capsule-43322-default-rtdb.firebaseio.com",
  projectId: "time-capsule-43322",
  storageBucket: "time-capsule-43322.appspot.com",
  messagingSenderId: "536145783566",
  appId: "1:536145783566:web:165d6d7dc6e53bc009c55f",
  measurementId: "G-V0N9H5ZW9S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbName = "livingrecipes";

const db = firebase.database();
const dbRef = db.ref(dbName);
const storage = firebase.storage();

 const testData = [
   {
     recipeName: "Tatertot hotdish",
     image: "https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg",
     fromCity: "Tea",
     fromState: "SD",
     fromCountry: "USA",
     history: "My family has made this dish every fall season and has become a staple in our family traditions.",
     frequence: "3 times a year (fall season)",
     significe: "This recipe is meaningful to me as I look back to when I was a kid and shared this meal with my family every year. This connects to where I was born and where I grew up, as I now realize this is a dish mainly in the midwest.",
     changes: "My family has made some changes throughout the years, subbing corn for green beans, making a cream of mushroom from scratch, and also adjusting the recipe to be gluten and dairy-free.",
    },{
      recipeName: "Potato Klub",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      fromCity: "Williston",
      fromState: "ND",
      fromCountry: "USA",
      history: "My family makes this every holiday we spend together. It is a Norwegian tradition we follow.",
      frequence: "1-2 times a year",
      significe: "It’s a family recipe that’s been passed down. It’s special because we usually only make it with my great-grandma.",
      changes: "Yes, we no longer hand shred and mash potatoes, we get a packet.",
     }
 ]
  