import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../utils/localStorage";

export default function Donation() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    setData(getFromLocalStorage);
  }, []);
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
