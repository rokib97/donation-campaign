import { useEffect, useState } from "react";

import useDonationData from "../../Hooks/useDonationData";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
export default function Home() {
  const [value, setValue] = useState("");
  const { data, loading } = useDonationData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  const handleSearch = () => {
    if (value.trim() !== "") {
      const filtered = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <>
      <Banner handleSearch={handleSearch} value={value} setValue={setValue} />
      <CategoryList
        value={value}
        data={data}
        filteredData={filteredData}
        loading={loading}
      />
    </>
  );
}
