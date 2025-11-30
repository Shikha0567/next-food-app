"use client";
import { FoodCardInterface } from "@/app/utils/schema/schema";
import ItemDetails from "@/components/ItemDetails";
import { use, useEffect, useState } from "react"; // new React hook in v18+

type ParamsType = {
  params: Promise<{ id: string }>;
};

const SubMenu = ({ params }: ParamsType) => {
  const [submenuCards, setSubMenuCards] = useState<FoodCardInterface[]>([]);
  // unwrap the promise
  const { id } = use(params);

  useEffect(() => {
    const fetchSubMenu = async () => {
      try {
        const response = await fetch(`/api/submenu/${id}`);
        const result = await response.json();
        console.log(result);
        setSubMenuCards(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubMenu();
  }, [id]);

  return (
    <div>
      {submenuCards?.length > 0 &&
        submenuCards?.map((item) => (
          <div className="flex items-center justify-center" key={item?.id}>
            <ItemDetails {...item} />
          </div>
        ))}
    </div>
  );
};

export default SubMenu;
