import * as firebase from 'firebase';const config = {
    apiKey: "AIzaSyB2Cy5P4buM1ZKazrYBvnWxxVOUzCYnw8k",
  authDomain: "redux-app-dd2f9.firebaseapp.com",
  databaseURL: "https://redux-app-dd2f9.firebaseio.com",
  projectId: "redux-app-dd2f9",
  storageBucket: "redux-app-dd2f9.appspot.com",
  messagingSenderId: "303025972199",
  appId: "1:303025972199:web:9d33e97f11996485b89342",
  measurementId: "G-VX5CSGJTC5"
  }
  firebase.initializeApp(config);
  const databaseRef = firebase.database().ref();
  export const todosRef = databaseRef.child("todos")