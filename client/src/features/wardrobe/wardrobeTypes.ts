export interface Wardrobe {
    id: string;
    amount: number;
    clothDetails: {
        image1: string,
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