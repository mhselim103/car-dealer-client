import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  // console.log(googleProvider);
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  // console.log(signInWithPopup);

  // email password authentication
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // signIn with google
  const signInUsingGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // signOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
    });
    setIsLoading(false);
  };

  // save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://sleepy-fortress-04751.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // observe change

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`https://sleepy-fortress-04751.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAdmin(data.admin);
      });
  }, [user?.email]);
  return {
    signInUsingGoogle,
    user,
    setUser,
    logOut,
    setIsLoading,
    isLoading,
    registerUser,
    loginUser,
    authError,
    admin,
  };
};
export default useFirebase;
