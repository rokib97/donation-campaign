import CardDefault from "../Card/CardDefault";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

// eslint-disable-next-line react/prop-types
export default function CategoryList({ filteredData, loading }) {
  if (loading) {
    return <CustomSpinner />;
  }

  return (
    <div className="mt-12 grid grid-cols-4 gap-8 mx-auto max-w-7xl py-3">
      {filteredData &&
        !loading &&
        // eslint-disable-next-line react/prop-types
        filteredData.map((card) => <CardDefault key={card.id} card={card} />)}
    </div>
  );
}
