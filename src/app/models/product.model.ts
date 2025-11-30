// product.model.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string; // 'women', 'men', 'bag', 'shoes', 'watches'
  image: string;
  tags?: string[];
  color?: string; // optional, can use for color filters
  images:string[]
}