import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setUser, setLoading, setError, logout } from "../redux/slices/authSlice";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerUser = (email: string, password: string) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser = (email: string, password: string) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(userCredential.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
