// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAXEwLHsRKiGDJkVa84yfFMGz6ay0VwSBc",
//   authDomain: "shopping-883a3.firebaseapp.com",
//   projectId: "shopping-883a3",
//   storageBucket: "shopping-883a3.appspot.com",
//   messagingSenderId: "254155349902",
//   appId: "1:254155349902:web:c7c5e8747b6b24b5aa8edf",
//   measurementId: "G-D30R9F50W3",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Shopping named Project (Firbase)
const firebaseConfig = {
  apiKey: "AIzaSyAXEwLHsRKiGDJkVa84yfFMGz6ay0VwSBc",
  authDomain: "shopping-883a3.firebaseapp.com",
  projectId: "shopping-883a3",
  storageBucket: "shopping-883a3.appspot.com",
  messagingSenderId: "254155349902",
  appId: "1:254155349902:web:c7c5e8747b6b24b5aa8edf",
  measurementId: "G-D30R9F50W3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const document = await getDocs(q);
    console.log(document);
    if (document.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};
const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
