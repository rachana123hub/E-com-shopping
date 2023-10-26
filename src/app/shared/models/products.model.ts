export interface IProduct {
    id: number;
    name: string;
    price: number;
    rating: number;
    specification: string[];
    features: string[];
    description: string;
    imageUrl: string;
    availableColors: string[];
    group: string;
}