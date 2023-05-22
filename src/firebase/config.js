// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxnm5NWPZi15qKT69aDULHOxuev7e-Y5w",
  authDomain: "react-imagenes-firebase.firebaseapp.com",
  projectId: "react-imagenes-firebase",
  storageBucket: "react-imagenes-firebase.appspot.com",
  messagingSenderId: "687364210643",
  appId: "1:687364210643:web:1a9ebbf7d3ffadd78a7926",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
