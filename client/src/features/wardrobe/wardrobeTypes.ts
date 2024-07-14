export interface Wardrobe {
    id: string;
    amount: number;
    clothDetails: {
        cloth:{
            name: string,
            price: number
        },
        size:{
            name: string;
        },
        color:{
            name: string;
        }
    }
}