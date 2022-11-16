import { Injectable } from '@nestjs/common';
import { Item } from 'src/models/item.models';

@Injectable()
export class CartService {
    cartList : Item[] = [];
  
    add(item: Item){
        this.cartList.push(item);
        return {
            message: 'them item thanh cong',
        };
    }
    update(id: string, newItem: Item){
        for(let i=0; i < this.cartList.length; i++){
            if(this.cartList[i].id == id){
                this.cartList[i] = {
                    ...this.cartList[i],
                    ...newItem,
                };
                return{
                    message: 'sua item thanh cong',
                    data: this.cartList[i],
                };
            }
        }
        throw Error('khong tim thay item');
    }
    delete(id: string){
        for (let i = 0; i < this.cartList.length; i++){
            if (this.cartList[i].id == id){
                this.cartList.splice(i);
                return{
                    message: 'xoa item thanh cong',
                }
            }
        }
    }
    getAllCart():any[]{
        return this.cartList;
    }
    getItem(id: string){
        for (let i = 0; i < this.cartList.length; i++){
            if (this.cartList[i].id == id){
                return this.cartList[i]             
            }
        }
    }

    searchList : Item[] = [];
    search(option:string,key:string){
        this.searchList = [];
        switch(option){
            case 'name':
                for (let i = 0; i < this.cartList.length; i++){
                    if (this.cartList[i].name ==  key){
                        return this.cartList[i]             
                    }
                }
            break;
            case 'instock':
                console.log(key)
                for (let i = 0; i < this.cartList.length; i++){
                    if (this.cartList[i].inStock ==  Number(key)){
                        this.searchList.push(this.cartList[i])            
                    }
                }
            return this.searchList; 
        }
    }
    finalCart: Item[] = [];
    finalPrice(){

    };

 
}
