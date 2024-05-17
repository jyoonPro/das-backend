import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class App extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ length: 42, nullable: false })
  developer: string; // Ethereum wallet address

  @Column({ type: 'text' })
  metadata: string;
}
