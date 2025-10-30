export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  accent?: string;
  longDescription?: string;
  calories?: number; // kcal
  size?: string; // e.g., 300ml, 1 fatia, etc.
  ingredients?: string[];
};

export type Section = {
  id: string;
  title: string;
  items: MenuItem[];
};


