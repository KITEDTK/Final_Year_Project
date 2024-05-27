export interface SingleComment{
    id: string;
    userId: string;
    content: string;
    clothId: string;
    parentId: string;
    createAt: Date;
    isEnable: boolean;
}