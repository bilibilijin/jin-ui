export interface ColumnType {
  title: string
  key: string
}

export interface HeaderProps {
  columns?: ColumnType[]
}

export interface TableProps {
  columns?: ColumnType[]
  data?: any[]
  stripe?: boolean
}

export interface BodyProps {
  columns?: ColumnType[]
  data?: any[]
  stripe?: boolean
}
