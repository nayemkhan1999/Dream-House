import { useEffect, useState } from "react";
import ShowCard from "../ShowCard/ShowCard";

const CardDataLoad = () => {
  const [dataload, setDataload] = useState([]);

  useEffect(() => {
    fetch("/public/fake-data.json")
      .then((res) => res.json())
      .then((data) => {
        setDataload(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {dataload.map((Ui) => (
        <ShowCard key={Ui.id} Ui={Ui}></ShowCard>
      ))}
    </div>
  );
};

export default CardDataLoad;
