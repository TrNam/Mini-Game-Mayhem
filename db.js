import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCDsVsCDsa9OUDZUpkyEYQihVu2XbM4Hro",
    authDomain: "connecting-database.firebaseapp.com",
    databaseURL: "https://connecting-database.firebaseio.com",
    projectId: "connecting-database",
    storageBucket: "connecting-database.appspot.com",
    messagingSenderId: "643553256348"
};

let app = Firebase.initializeApp(config);
export const db = app.database();