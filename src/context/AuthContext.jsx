import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  onAuthStateChanged,
  getRedirectResult,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import { appleProvider, auth, googleProvider } from "../firebase";

const AuthContext = createContext();

export const getAuthErrorMessage = (error) => {
  const code = error?.code || "";

  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/user-not-found":
      return "We couldn’t find an account for that email address.";
    case "auth/wrong-password":
      return "The password you entered is incorrect. Please try again.";
    case "auth/invalid-credential":
      return "The email or password you entered is incorrect. Please try again.";
    case "auth/email-already-in-use":
      return "An account with this email address already exists.";
    case "auth/weak-password":
      return "Your password is too weak. Please use at least 8 characters with a mix of letters, numbers, and symbols.";
    case "auth/popup-closed-by-user":
      return "Google sign-in was cancelled. Please try again.";
    case "auth/account-exists-with-different-credential":
      return "This account already exists with a different sign-in method.";
    case "auth/network-request-failed":
      return "We couldn’t connect to the server. Please check your internet connection and try again.";
    case "auth/operation-not-allowed":
      return "This sign-in method is not enabled yet. Please enable it in the Firebase Authentication settings.";
    case "auth/unauthorized-domain":
      return "This website is not authorized for sign-in yet. Add its domain in the Firebase Authentication settings.";
    case "auth/popup-blocked":
      return "Your browser blocked the sign-in window. Allow pop-ups for this site and try again.";
    case "auth/too-many-requests":
      return "Too many sign-in attempts. Please wait a moment before trying again.";
    default:
      return "We couldn’t complete that request. Please try again in a moment.";
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [redirectChecked, setRedirectChecked] = useState(false);
  const [redirectError, setRedirectError] = useState(null);
  const redirectCheckStarted = useRef(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (redirectCheckStarted.current) return;
    redirectCheckStarted.current = true;
    let active = true;

    getRedirectResult(auth)
      .then((result) => {
        if (active && result?.user) setUser(result.user);
      })
      .catch((error) => {
        if (active) setRedirectError(error);
      })
      .finally(() => {
        if (active) setRedirectChecked(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const googleSignIn = () => signInWithRedirect(auth, googleProvider);

  const appleSignIn = () => signInWithRedirect(auth, appleProvider);

  const logout = () => signOut(auth);

  const updateName = (name) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, { displayName: name });
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading: authLoading || !redirectChecked, redirectError, login, signup, googleSignIn, appleSignIn, logout, updateName, getAuthErrorMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
