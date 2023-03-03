export interface Order {
    _id: string;
    table: string;
    status: string;
    products: {
        _id: string;
        quatity: number;
        product: {
            name: string;
            imagePath: string;
            price: number;
        };
    }[]
}
