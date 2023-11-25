"use client";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/utils/firebase";

const UserProfile = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  if (!user) {
    router.push("/home");
  }

  return <div>UserProfile</div>;
};

export default UserProfile;
