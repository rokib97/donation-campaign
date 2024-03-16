import useDonationData from "../../Hooks/useDonationData";
import CardDefault from "../Card/CardDefault";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

export default function CategoryList() {
  const { data, loading } = useDonationData();
  //   console.log(data);
  if (loading) {
    return <CustomSpinner />;
  }
  return (
    <div className="mt-12 grid grid-cols-4 gap-8 mx-auto max-w-7xl py-3">
      {data &&
        !loading &&
        data.map((card) => <CardDefault key={card.id} card={card} />)}
    </div>
  );
}
