export interface SingleComment{
    id: string;
    userId: string;
    content: string;
    clothId: string;
    createAt: Date;
    user:{
        fullname: string;
    };
    cloth: {
        name: string;
    }
}