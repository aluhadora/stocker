export type Product = {
    id: string;
    name: string;
    category: string;
    typicalExpirationValue: number;
    typicalExpirationUnit: 'days' | 'weeks' | 'months' | 'years';
    createdAt?: string;
    updatedAt?: string;
}