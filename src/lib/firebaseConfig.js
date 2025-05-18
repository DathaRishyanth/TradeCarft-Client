import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
   apiKey: "API_KEY",
   authDomain: "email-login-9e9e1.firebaseapp.com",
   projectId: "email-login-9e9e1",
   storageBucket: "email-login-9e9e1.appspot.com",
   messagingSenderId: "761428690579",
   appId: "1:761428690579:web:c2742b615a14aa2b0b2f66"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth , provider}
