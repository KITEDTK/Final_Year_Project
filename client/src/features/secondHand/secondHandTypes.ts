
export interface SecondHandAddInput {
    wardrobeId: string;
    amount: number;
}
export interface SecondHand {
    id: string;
    amount: number;
    wardrobe:{
        id: string,
        userId: string,
        clothDetails: {
            image1: string;
            cloth:{
                id: string;
                name: string;
            },
            size: {
                id: string;
                name: string;
            },
            color:{
                id: string;
                name: string;
            }
        }
    }
}
export interface SellingSecondhandProducts { 
    id: string;
    wardrobeId: string;
    amount: string;
    wardrobe: {
        clothDetails: {
            cloth:{
                name: string
            },
            size:{
                name: string;
            },
            color: {
                name: string;
            }
        }
    }
}