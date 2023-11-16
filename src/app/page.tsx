"use client";

import Preloader from "@/components/preloader/Preloader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
      router.push("/home");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <>{pageLoading ? <Preloader /> : <div></div>}</>;
};

export default Home;
