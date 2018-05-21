import { Image } from "./image";

export interface Active {
    id: number;
    name: string;
    address: string;
    description: string;
    available: boolean;
    images: Image[];
}
