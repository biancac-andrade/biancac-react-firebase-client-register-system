import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "XXXXXXXXXXX",
  authDomain: "XXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXX",
  appId: "XXXXXXXXX",
  measurementId: "XXXXXXXXXXXXX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;