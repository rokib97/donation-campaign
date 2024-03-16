import { useEffect, useState } from "react";
import CardDefault from "../Card/CardDefault";

export default function CategoryList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="mt-12 grid grid-cols-4 gap-8 mx-auto max-w-7xl py-3">
      {cards && cards.map((card) => <CardDefault key={card.id} card={card} />)}
    </div>
  );
}
