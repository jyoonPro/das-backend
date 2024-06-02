import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StoreApp extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'text', nullable: false })
  user: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  contract: string;

  @Column({ type: "text", nullable: false })
  tokenId: string;

  @Column({ type: 'boolean' })
  isResell: boolean;
}

@Entity()
export class ResellStoreApp extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'text', nullable: false })
  from: string;

  @Column({ type: 'text', nullable: false })
  to: string;

  @Column({ type: 'text', nullable: false })
  contract: string;

  @Column({ type: "text", nullable: false })
  tokenId: string;

  @Column()
  price: number;
}
