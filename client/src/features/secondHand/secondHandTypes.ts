
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