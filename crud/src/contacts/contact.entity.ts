import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({nullable: false})
  email: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
