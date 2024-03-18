import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../utils/localStorage";
import DonationCard from "./DonationCard";

export default function Donation() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  console.log(data);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    setData(getFromLocalStorage);
  }, []);
  return (
    <>
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-2 gap-6">
        {data.slice(0, showAll ? data.length : 4).map((item) => (
          <DonationCard
            handleShowAll={handleShowAll}
            key={item.id}
            item={item}
          />
        ))}
      </div>
      {data.length > 0 ? (
        <div className="mt-4 text-center">
          <Button onClick={handleShowAll} color="green">
            {!showAll ? "ShowAll" : "ShowLess"}
          </Button>
        </div>
      ) : null}
    </>
  );
}
