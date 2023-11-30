import { initialStateProps } from "@/app/type";
import { auth, db } from "@/utils/firebase";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const initialState: initialStateProps = {
  name: "",
  email: "",
  password: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, { displayName: name });
    setDoc(doc(db, "users", email), {
      likes: [],
    });
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    await signInWithEmailAndPassword(auth, email, password);
  }
);

export const logOut = createAsyncThunk("auth/logOut", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;
