import { useState } from "react";
import { FeatureData } from "../../models/feature.dto";
import { useQuery } from "@tanstack/react-query";
import { constants } from "../../constants";

import { HomepageTable } from "./components/table";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data, error, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const response = await fetch(
        constants.API_URL +
          "/features?" +
          new URLSearchParams({
            page: currentPage.toString(),
            per_page: itemsPerPage.toString(),
          }),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return (await response.json()) as FeatureData;
    },
  });

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <HomepageTable data={data?.data} />
    </>
  );
}

export default HomePage;
