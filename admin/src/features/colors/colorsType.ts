export interface Colors {
  id: string;
  name: string;
  createAt: Date;
  updateAt: Date | null;
  isEnable: boolean;
}
export interface ColorsState {
  colors: Colors[];
  loading: boolean;
  error: string | null;
}
