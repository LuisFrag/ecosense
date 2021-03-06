import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Item } from 'src/items/items.entity';
import { Point } from './points.entity';

@Entity({
  engine: 'InnoDB',
})
export class PointItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  pointItemId: number;

  @PrimaryColumn()
  itemId: number;

  @PrimaryColumn()
  pointId: number;

  @ManyToOne(
    () => Item,
    item => item.pointItem,
    {
      primary: true,
    },
  )
  @JoinColumn({ name: 'itemId' })
  public item: Item;

  @ManyToOne(
    () => Point,
    point => point.pointItem,
    {
      primary: true,
    },
  )
  @JoinColumn({ name: 'pointId' })
  public point: Promise<Point>;
}
