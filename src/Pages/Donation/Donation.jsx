import { Alert, Button } from "@material-tailwind/react";
import { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "./DonationCard";

export default function Donation() {
  const { data } = useLocalStorage();
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  console.log(data.length == 0);
  if (data.length == 0) {
    return (
      <div className="w-[50%] mx-auto mt-12">
        <Alert color="red">Please donate some data first....</Alert>
      </div>
    );
  }
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
      {data.length > 4 ? (
        <div className="mt-4 text-center">
          <Button onClick={handleShowAll} color="green">
            {!showAll ? "ShowAll" : "ShowLess"}
          </Button>
        </div>
      ) : null}
    </>
  );
}
