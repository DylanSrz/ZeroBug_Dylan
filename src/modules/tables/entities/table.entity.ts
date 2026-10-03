import { TableStatus, TableZone } from "../enum/table.enum.js"

export class Table {
    id: string
    number: number
    capacity: number
    zone: TableZone
    status: TableStatus
}

