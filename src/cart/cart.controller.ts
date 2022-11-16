import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { Item } from 'src/models/item.models';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}
    @Get('/all')
    getAllCart(): any {
        return{
            data: this.cartService.getAllCart()
        };
    }
    @Get('/:id')
    getItem(@Param('id') id: string): any {
        return this.cartService.getItem(id)
    };
    @Post()
    add(@Body()item: Item){
        return this.cartService.add(item);
    }

    @Put('/:id')
    update(@Body() newItem: Item, @Param('id') id: string){
        try{
            return this.cartService.update(id, newItem);
        } catch (err){
            return {
                message: 'Khong the update',
                error: err.message,
            };
        }
    }

    @Get()
    search(@Query('option') option: string,@Query('key') key:string){
        try{
            return this.cartService.search(option,key)
        } catch (err){
            return {
                message: 'Khong the tim kiem',
                error: err.message,
            };
        } 

    }

    @Delete('/:id')
    delete(@Param('id') id: string){
        return this.cartService.delete(id);
    }
    
}
