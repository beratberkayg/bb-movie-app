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
    }, 1500);

    return () => clearTimeout(timer);
  }, [pageLoading]);

  return <>{pageLoading ? <Preloader /> : <div>hayda rinna rina nay</div>}</>;
};

export default Home;
