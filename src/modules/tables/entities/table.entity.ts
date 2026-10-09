import { Check, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { TableStatus, TableZone } from "../enum/table.enum.js"

@Entity()
@Check(`"capacity" > 0`)
export class Table {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        unique: true,
    })
    number: number

    @Column()
    capacity: number

    @Column({
        type: "enum",
        enum: TableZone,
        default: TableZone.INSIDE
    })
    zone: TableZone

    @Column({
        type: "enum",
        enum: TableStatus,
        default: TableStatus.AVAILABLE
    })
    status: TableStatus
}

