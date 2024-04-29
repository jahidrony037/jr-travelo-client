import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://jr-travelo-server.vercel.app/subCategories`
      );
      const result = await res.json();
      setCountries(result);
    };
    setTimeout(() => {
      loadData();
    }, 600);
  }, []);
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold mb-[50px]">
        Explore Countries
      </h2>
      <p className="text-center text-lg">
        Exploring Different types of Tourist places <br /> and you can visit
        those place which are realy nice to see .
      </p>
      {countries.length ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-5">
          {countries.map((country) => (
            <CountryCard key={country._id} country={country} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Countries;
