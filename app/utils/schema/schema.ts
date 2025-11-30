type Tags = string[];
export interface SubMenu {
  [key: number]: FoodCardInterface[];
}
export interface FoodCardInterface {
  id: number;
  name: string;
  price: number;
  rating: number;
  vegetarian: boolean;
  deliveryTime: string;
  image: string;
  description: string;
}
export interface FoodData {
  id: number;
  name: string;
  category: string;
  vegetarian: boolean;
  price: number;
  discount: number;
  finalPrice: number;
  rating: number;
  deliveryTime: string;
  isPromoted: boolean;
  tags: Tags;
  distance: number;
  imageUrl: string;
  description: string;
}
