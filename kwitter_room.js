
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCOt-fZn4utx1iAROBIED_DvmjK9g5BZcs",
      authDomain: "kwitter-a07ae.firebaseapp.com",
      databaseURL: "https://kwitter-a07ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-a07ae",
      storageBucket: "kwitter-a07ae.appspot.com",
      messagingSenderId: "591159796331",
      appId: "1:591159796331:web:3cae14d5fcd8330006472e",
      measurementId: "G-0XB7DX4MSW"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
