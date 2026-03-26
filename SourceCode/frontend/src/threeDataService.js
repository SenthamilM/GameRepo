// gameservice.js
import db from "./firebaseConfig";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

export const threeRound = async (dateStr, fullData) => {
  //const dateId = getTodayDateId();
  const docRef = doc(db, "ThreeNumber", dateStr);
  const snap = await getDoc(docRef);
  const currentTime = Object.keys(fullData[0])[0];

  // await updateDoc(docRef, {
  //   [currentTime]: fullData, // ONLY current data
  // });
  if (snap.exists()) {
    await updateDoc(docRef, {
      [currentTime]: fullData,
    });
    console.log("4-Digit - Data Updated !");
  } else {
    await setDoc(docRef, {
      [currentTime]: fullData,
    });
    console.log("4-Digit - Data created");
  }
};
