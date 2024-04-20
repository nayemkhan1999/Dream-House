import { Helmet } from "react-helmet-async";
import CardDataLoad from "../CardDataLoad/CardDataLoad";

const Home = () => {

  return (
    <div className="mx-24 averia-serif">
        <Helmet>
        <title>Dream House | Home Page</title>
      </Helmet>
      <h3 className="text-5xl py-4 text-center border">home page</h3>

    <CardDataLoad></CardDataLoad>
    </div>
  );
};

export default Home;
