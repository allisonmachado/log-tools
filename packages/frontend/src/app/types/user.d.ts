import { Family } from './family';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    familyId: number;
    family?: Family;
}
