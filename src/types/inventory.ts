export interface Item {
  id: string;
  name: string;
  description: string;
  quantity: number;
  minimumQuantity: number;
  category: string;
  location: string;
  unitPrice: number;
  lastUpdated: string;
}

export type ItemFormData = Omit<Item, "id" | "lastUpdated">;
