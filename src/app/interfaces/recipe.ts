type Rating = 1 | 2 | 3 | 4 | 5;

export interface Recipe {
  id: number;
  name: string;
  description: string[];
  ingredients: { name: string; value: string }[];
  rating: Rating;
  imageUrl: string;
}
