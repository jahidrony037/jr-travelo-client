import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const MyList = () => {
  const { user } = useAuth() || {};
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:5000/touristSpots/${user?.email}`
      );
      const result = await res.json();
      setTouristSpots(result);
    };

    setTimeout(() => {
      getData();
    }, 5);
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you confirm to Delete Spot?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteTouristSpot = async () => {
          const res = await fetch(`http://localhost:5000/touristSpots/${id}`, {
            method: "DELETE",
          });
          const result = await res.json();
          if (result.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Spot has been deleted.",
              icon: "success",
            });
            const remainingSpots = touristSpots.filter(
              (spot) => spot._id !== id
            );
            setTouristSpots(remainingSpots);
          }
        };
        deleteTouristSpot();
      }
    });
  };

  return (
    <div className="mt-5">
      <h2 className="text-center text-4xl">
        Your Added {touristSpots.length} Tourist Spot
      </h2>

      <div className="text-center mt-[100px] mx-auto ">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-[#1ec6b6] text-white text-center h-14">
                <th>No</th>
                <th>Tourist_Spot_Name</th>
                <th>Country_Name</th>
                <th>Location</th>
                <th>Average_Cost</th>
                <th>Season_Time</th>
                <th>Action</th>
              </tr>
            </thead>
            {touristSpots.length ? (
              <tbody>
                {touristSpots.map((touristSpot, i = 1) => (
                  <tr key={touristSpot._id} className="hover text-center">
                    <th>{i + 1}</th>
                    <td>{touristSpot?.touristSpotName || "not found"}</td>
                    <td>{touristSpot?.countryName || "not found"}</td>
                    <td>{touristSpot?.location || "not found"}</td>
                    <td>{touristSpot?.averageCost || "not found"} Taka</td>
                    <td>{touristSpot?.seasonality || "not found"}</td>
                    <th className="flex gap-4 justify-center ">
                      <Link to={`/update/${touristSpot?._id}`}>
                        <td className="cursor-pointer btn hover:bg-[#1ec6b6] bg-[#1ec6b6] text-white">
                          Update
                        </td>
                      </Link>
                      <td
                        onClick={() => handleDelete(touristSpot?._id)}
                        className="cursor-pointer btn btn-error text-white"
                      >
                        Delete
                      </td>
                    </th>
                  </tr>
                ))}
              </tbody>
            ) : (
              <div className="flex justify-center mx-auto w-full">
                <p>No Data Found</p>
              </div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
