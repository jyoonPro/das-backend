import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ type: 'text', nullable: false, select: false })
  password: string;
}
