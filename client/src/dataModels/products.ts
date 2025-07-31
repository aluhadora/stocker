export type Product = {
    id: string;
    name: string;
    category: string;
    typicalExpirationValue: number;
    typicalExpirationUnit: 'days' | 'weeks' | 'months' | 'years';
    createdAt?: string;
    updatedAt?: string;
}

export default function GetProducts(): Product[] {
    const exampleProducts: Product[] = [
        {
            id: '1',
            name: 'Milk',
            category: 'Dairy',
            typicalExpirationValue: 7,
            typicalExpirationUnit: 'days',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: '2',
            name: 'Cheese',
            category: 'Dairy',
            typicalExpirationValue: 30,
            typicalExpirationUnit: 'days',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: '3',
            name: 'Yogurt',
            category: 'Dairy',
            typicalExpirationValue: 14,
            typicalExpirationUnit: 'days',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ];

    return exampleProducts;
}