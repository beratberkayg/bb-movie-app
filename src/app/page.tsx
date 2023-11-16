"use client";
import Preloader from "@/components/preloader/Preloader";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <>{pageLoading ? <Preloader /> : <div>merhaba</div>}</>;
};

export default Home;
