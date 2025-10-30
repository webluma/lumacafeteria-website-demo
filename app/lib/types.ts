export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  accent?: string;
};

export type Section = {
  id: string;
  title: string;
  items: MenuItem[];
};


