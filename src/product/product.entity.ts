import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductEntity{
    @PrimaryGeneratedColumn('uuid') id: string
    @Column('varchar', { length: 500, unique: true})
    name: string
    @Column('numeric')
    price: number
    @Column('numeric')
    quantity: number
    
}

