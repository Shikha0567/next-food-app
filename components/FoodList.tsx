"use client";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { FoodData } from "@/app/utils/schema/schema";

const FoodList = () => {
  const [foodItems, setFoodItems] = useState<FoodData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/menu");
        const result = await response.json();
        console.log(result);
        setFoodItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchFoodDetails();
  }, []);

  return (
    <div className="flex flex-col p-4 m-4">
      <div className="flex justify-between items-center mb-5">
        <h5 className="font-medium font-sans text-xl my-4 mb-10">
          Food Delivery Restaurants in Bengaluru
        </h5>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {isLoading && <p className="m-6 p-3 font-bold text-2xl">Loading...</p>}
        {!isLoading &&
          foodItems?.length > 0 &&
          foodItems?.map((foodItem: FoodData) => (
            <FoodCard foodItem={foodItem} key={foodItem?.id} />
          ))}
      </div>
    </div>
  );
};
export default FoodList;
