import { FC } from "react"
import { DatatableBody } from "./DatatableBody"
import { DatatableHeader } from "./DatatableHeader"
import { DatatableRoot } from "./DatatableRoot"
import { DatatableTable } from "./DatatableTable"
import { DatatableHeaderItem } from "./DatatableHeaderItem"
import { DatatableRow } from "./DatatableRow"
import { DatatableColumn } from "./DatatableColumn"
import { DatatableError } from "./DatatableError"
import { DatatableSearch } from "./DatatableSearch"
import { DatatableDivider } from "./DatatableDivider"

type Column = {
	name: string
	selector: (row: any) => any
	width?: string
}

interface DatatableProps {
	data?: any[]
	columns: Array<Column>
	/**
	 * on hover on every row, it shows a background color
	 * @default false
	 */
	highlightOnHover?: boolean
	/**
	 * allow to search in datatable
	 * @default false
	 */
	isSearchable?: boolean
}

export const Datatable: FC<DatatableProps> = ({
	columns,
	data = [],
	highlightOnHover = false,
	isSearchable = false,
}) => {
	return (
		<DatatableRoot highlightOnHover={highlightOnHover}>
			{isSearchable && (
				<>
					<div className="d-flex p-3 justify-content-between">
						<div className="d-inline-flex justify-self-end">
							<DatatableSearch
								placeholder={"Search headers"}
								name="search"
								type="text"
								icon="search"
							/>
						</div>
					</div>
					<DatatableDivider />
				</>
			)}
			<DatatableTable>
				<DatatableHeader>
					{columns?.map((column) => (
						<DatatableHeaderItem key={column.name} width={column.width}>
							{column.name}
						</DatatableHeaderItem>
					))}
				</DatatableHeader>
				{!!data.length ? (
					<DatatableBody>
						{data.map((i) => (
							<DatatableRow key={i}>
								{columns.map((c) => (
									<DatatableColumn>{c.selector(i)}</DatatableColumn>
								))}
							</DatatableRow>
						))}
					</DatatableBody>
				) : (
					<DatatableError>No Content</DatatableError>
				)}
			</DatatableTable>
		</DatatableRoot>
	)
}
