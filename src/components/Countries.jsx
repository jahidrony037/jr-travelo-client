import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

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
    loadData();
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl">Explore Countries</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8  justify-items-center  mt-5">
        {countries.map((country) => (
          <CountryCard key={country} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
