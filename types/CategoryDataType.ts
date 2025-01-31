export interface categoryDataResponse {
    trivia_categories: categoryDataType[];
}
  
export interface categoryDataType {
    id: number;
    name: string;
}