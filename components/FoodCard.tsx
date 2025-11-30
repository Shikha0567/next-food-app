import { FoodData } from "@/app/utils/schema/schema";
import { useRouter } from "next/navigation";

const FoodCard = ({ foodItem }: { foodItem: FoodData }) => {
  const { id, name, price, rating, deliveryTime, tags, imageUrl } = foodItem;

  const router = useRouter();

  return (
    <div
      data-testid="food-card"
      className="w-1/4 h-105 bg-gray-100 flex flex-col p-1 rounded-xl m-4 cursor-pointer food-card"
      onClick={() => router.push(`/SubMenu/${id}`)}
    >
      <img
        alt="Food Item"
        src={imageUrl}
        className="h-4/6 w-full p-3 object-cover rounded-2xl"
      />
      <div className="flex flex-row justify-between items-center p-2">
        <span className="font-medium">{name}</span>
        <span className="px-1 bg-green-700 text-white rounded-md">
          {rating}
          <span className="pl-1">⭐</span>
        </span>
      </div>
      <div className="flex flex-row justify-between items-center text-gray-800 p-2">
        <span className="font-normal">{tags.length > 0 && tags.join(",")}</span>
        <span>
          Rs.
          {price}
        </span>
      </div>
      <div className="flex flex-row justify-end items-center text-sm p-2">
        <span className="px-1">🕝</span>
        <span>{deliveryTime}</span>
      </div>
    </div>
  );
};

export default FoodCard;
