export type Category="Men"|"Women"|"Kids"


export type product ={
    id:number;
    name:string
    price:number
    category:Category
    colors:string[]
    image: string
}