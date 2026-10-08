import { Check, Column, Entity, PrimaryColumn } from "typeorm"
import { TableStatus, TableZone } from "../enum/table.enum.js"

@Entity()
@Check(`"capacity" > 0`)
export class Table {

    @PrimaryColumn("uuid")
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
        default: TableZone.inside
    })
    zone: TableZone

    @Column({
        type: "enum",
        enum: TableStatus,
        default: TableStatus.available
    })
    status: TableStatus
}

