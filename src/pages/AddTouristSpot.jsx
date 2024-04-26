import { useState } from "react";
import { useForm } from "react-hook-form";

const AddTouristSpot = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    const {
      email,
      user_name,
      photo,
      tourists_spot_name,
      country_name,
      location,
      description,
      average_cost,
      season,
      travel_time,
      total_visitors_per_year,
    } = data;
    // console.log(
    //   email,
    //   user_name,
    //   photo,
    //   season,
    //   tourists_spot_name,
    //   country_name,
    //   location,
    //   description,
    //   average_cost,
    //   travel_time,
    //   total_visitors_per_year
    // );
    const touristSpot = {
      email: email,
      userName: user_name,
      photoUrl: photo,
      season: season,
      touristSpotName: tourists_spot_name,
      countryName: country_name,
      location: location,
      description: description,
      averageCost: average_cost,
      travelTime: travel_time,
      totalVisitorsPerYear: total_visitors_per_year,
    };
    // console.log(touristSpot);

    const postData = async () => {
      const res = await fetch(`http://localhost:5000/addTouristSpot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(touristSpot),
      });
      const result = res.json();
      console.log(result);
    };
    postData();
  };
  return (
    <div className="mt-5">
      <div className="card shrink-0 md:w-full  mx-0 shadow-2xl bg-base-100">
        <h2 className="text-3xl text-center pt-6">
          ADD <span className="text-[#1ec6b6]">TOURIST_SPOT</span> HERE
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Image*</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("photo", {
                  required: "photo url is required",
                })}
              />
              {errors?.photo && (
                <span className="text-red-600 font-semibold">
                  {errors.photo.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Tourists_spot_name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Tourist Spot Name"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("tourists_spot_name", {
                  required: "tourists_spot_name is required",
                  minLength: {
                    value: 3,
                    message:
                      "tourists_spot_name should be at least 3 character",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "tourists_spot_name should be 20 character maximum",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z]).+$/,
                    message:
                      "tourists_spot_name has one Upper case or one Lower case letter",
                  },
                })}
              />

              {errors?.tourists_spot_name && (
                <span className="text-red-600 font-semibold">
                  {errors.tourists_spot_name.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Country_name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Country Name"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("country_name", {
                  required: "country_name is required",
                  minLength: {
                    value: 3,
                    message: "country_name should be at least 3 character",
                  },
                  maxLength: {
                    value: 30,
                    message: "country_name should be 20 character maximum",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z]).+$/,
                    message: "name has one Upper case or one Lower case letter",
                  },
                })}
              />

              {errors?.country_name && (
                <span className="text-red-600 font-semibold">
                  {errors.country_name.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Location*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Location"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("location", {
                  required: "location is required",
                  minLength: {
                    value: 3,
                    message: "location should be at least 3 character",
                  },
                  maxLength: {
                    value: 30,
                    message: "location should be 20 character maximum",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z]).+$/,
                    message:
                      "location has one Upper case or one Lower case letter",
                  },
                })}
              />

              {errors?.location && (
                <span className="text-red-600 font-semibold">
                  {errors.location.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Average_Cost*</span>
              </label>
              <input
                type="number"
                placeholder="Enter Average_Cost"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("average_cost", {
                  required: "average_cost is required",
                })}
              />

              {errors?.average_cost && (
                <span className="text-red-600 font-semibold">
                  {errors.average_cost.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md">Seasonality</span>
                </div>
                <select
                  className="select  select-bordered w-full focus:border-[#1ec6b6] focus:outline-none"
                  {...register("season", {
                    required: "Season is Required",
                  })}
                >
                  <option className="text-lg">summer</option>
                  <option className="text-lg">winter</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Travel_Time*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Travel Time"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("travel_time", {
                  required: "travel_time is required",
                  pattern: {
                    value: /^\d+\sdays$/,
                    message: "travel time should like 7 days",
                  },
                })}
              />

              {errors?.travel_time && (
                <span className="text-red-600 font-semibold">
                  {errors.travel_time.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">
                  Total_Visitors_PerYear*
                </span>
              </label>
              <input
                type="number"
                placeholder="Enter Total_Visitors_PerYear"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("total_visitors_per_year", {
                  required: "total_visitors_per_year is required",
                })}
              />

              {errors?.total_visitors_per_year && (
                <span className="text-red-600 font-semibold">
                  {errors.total_visitors_per_year.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">User Email*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "example@gmail.com",
                  },
                })}
              />
              {errors?.email && (
                <span className="text-red-600 font-semibold">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">User_Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered focus:border-[#1ec6b6] focus:outline-none"
                {...register("user_name", {
                  required: "user_name is required",
                  minLength: {
                    value: 3,
                    message:
                      "tourists_spot_name should be at least 3 character",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "tourists_spot_name should be 20 character maximum",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z]).+$/,
                    message:
                      "user_name has one Upper case or one Lower case letter",
                  },
                })}
              />

              {errors?.user_name && (
                <span className="text-red-600 font-semibold">
                  {errors.user_name.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Short_Description*</span>
            </label>
            <textarea
              type="text-area"
              placeholder="Enter Short Description"
              className="textarea focus:border-[#1ec6b6] input-bordered focus:outline-none"
              {...register("description", {
                required: "short_description is required",
                minLength: {
                  value: 40,
                  message: "description should be at least 40 character",
                },
                maxLength: {
                  value: 400,
                  message: "tourists_spot_name should be 400 character maximum",
                },
              })}
            />

            {errors?.description && (
              <span className="text-red-600 font-semibold">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="form-control mt-5">
            <button className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[1px] border-[#1ec6b6]">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white font-bold">
                ADD SPOT
              </span>
            </button>
          </div>
        </form>
        {error && <span className="text-red-600 font-bold">{error}</span>}
      </div>
    </div>
  );
};

export default AddTouristSpot;
