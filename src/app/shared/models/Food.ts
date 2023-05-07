export class Product{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    imageUrl!:string;
    origins!:string[];
}