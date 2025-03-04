import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDzAaPZDqN0X7UzFnn2BQRpxjCFLO-zDZw",
	authDomain: "gene-958a7.firebaseapp.com",
	projectId: "gene-958a7",
	storageBucket: "gene-958a7.firebasestorage.app",
	messagingSenderId: "553873869199",
	appId: "1:553873869199:web:a7a8ac3777ff6d7f0e23fa",
	measurementId: "G-J78QQF2Y0Z"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
