"use client";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  return <div>UserProfile</div>;
};

export default UserProfile;
