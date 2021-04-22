 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
     apiKey: "AIzaSyAyaT53kFe-V0DckCTkBvh6NKPcGCOMKCk",
     authDomain: "mystudioseat.firebaseapp.com",
     databaseURL: "https://map-data.firebaseio.com/",
     projectId: "mystudioseat",
     storageBucket: "mystudioseat.appspot.com",
     messagingSenderId: "948831651017",
     appId: "1:948831651017:web:82007206f21ab13f60f918",
     measurementId: "G-XJGSFMS13W"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.database();

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
  