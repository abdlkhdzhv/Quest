import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDOlU5nfERRA_7-ScgMvcDx24gudJ4SBIc",
  authDomain: "quests-4e6b9.firebaseapp.com",
  projectId: "quests-4e6b9",
  storageBucket: "quests-4e6b9.firebasestorage.app",
  messagingSenderId: "203305269106",
  appId: "1:203305269106:web:45466b5d14f954a89c8feb",
  measurementId: "G-1L96VBCQJ5"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);