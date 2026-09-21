import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQ49lkM71QdbX8IuZTIVrwn9lmfMxoBw4",
  authDomain: "apex-horizon-22ff4.firebaseapp.com",
  projectId: "apex-horizon-22ff4",
  storageBucket: "apex-horizon-22ff4.firebasestorage.app",
  messagingSenderId: "609146153612",
  appId: "1:609146153612:web:7633520061243b9116a9a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");
export default app;
