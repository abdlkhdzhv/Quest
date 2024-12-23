import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { setUser, setLoading, setError, logout } from "../redux/slices/authSlice";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { AppDispatch } from "../redux/store";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerUser = (email: string, password: string, name: string, surname: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: `${name} ${surname}` });
      dispatch(setUser(userCredential.user));
      setError(false)
      return true
    } catch (error: any) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser(userCredential.user));
    setError(false)
  } catch (error: any) {
    dispatch(setError(true));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    await signOut(auth);
    dispatch(logout());
    setError(false)
  } catch (error: any) {
    dispatch(setError(true));
  } finally {
    dispatch(setLoading(false));
  }
};
