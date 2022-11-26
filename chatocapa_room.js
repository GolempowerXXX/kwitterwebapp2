const firebaseConfig = {
  apiKey: "AIzaSyDHnyvf6xL67jCSN3e70pkqSb-LMDSu3JM",
  authDomain: "kwitter-104b9.firebaseapp.com",
  databaseURL: "https://kwitter-104b9-default-rtdb.firebaseio.com",
  projectId: "kwitter-104b9",
  storageBucket: "kwitter-104b9.appspot.com",
  messagingSenderId: "8629486399",
  appId: "1:8629486399:web:66c9f0a2e74a4c488c498a"
};
//intializeapp
  const app = initializeApp(firebaseConfig);


function logout(){

    window.location = "index.html" 
}
function add_room(){
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  })
    
}
