import React, { useState } from "react"
import D from "../components/Datatable"
import { Datatable as Dt } from "../components/Datatable/Datatable"
import { ComponentMeta } from "@storybook/react"

const DATATABLE_COUNTER_OPTIONS = [10, 25, 50]
const DATATABLE_DATA = {
	headers: [
		{
			name: "id",
			text: "#",
		},
		{
			name: "title",
			text: "Title",
		},
		{
			name: "title_extended",
			text: "Title 2",
		},
	],
	rows: [
		[
			{
				name: "id",
				value: "1",
			},
			{
				name: "title",
				value: "teste 1",
			},
			{
				name: "title_extended",
				value: "teste 1 extended",
			},
		],
		[
			{
				name: "id",
				value: "2",
			},
			{
				name: "title",
				value: "teste 2",
			},
			{
				name: "title_extended",
				value: "teste 2 extended",
			},
		],
		[
			{
				name: "id",
				value: "3",
			},
			{
				name: "title",
				value: "teste 3",
			},
			{
				name: "title_extended",
				value: "teste 3 extended",
			},
		],
		[
			{
				name: "id",
				value: "4",
			},
			{
				name: "title",
				value: "teste 4",
			},
			{
				name: "title_extended",
				value: "teste 4 extended",
			},
		],
		[
			{
				name: "id",
				value: "5",
			},
			{
				name: "title",
				value: "teste 5",
			},
			{
				name: "title_extended",
				value: "teste 5 extended",
			},
		],
		[
			{
				name: "id",
				value: "6",
			},
			{
				name: "title",
				value: "teste 6",
			},
			{
				name: "title_extended",
				value: "teste 6 extended",
			},
		],
		[
			{
				name: "id",
				value: "7",
			},
			{
				name: "title",
				value: "teste 7",
			},
			{
				name: "title_extended",
				value: "teste 7 extended",
			},
		],
	],
}

const columns = [
	{
		name: "ID",
		selector: (row) => row.id,
		width: "100px",
	},
	{
		name: "Title",
		selector: (row) => row.title,
	},
	{
		name: "Year",
		selector: (row) => row.year,
	},
]

export default {
	title: "Data/Datatable",
	component: D.Root,
	args: {
		highlightOnHover: false,
	},
	argTypes: {
		highlightOnHover: {
			defaultValue: false,
			type: "boolean",
			description: "On hover it will show a background color on entire row",
			control: "boolean",
			options: [true, false],
		},
	},
} as ComponentMeta<typeof D.Root>

export const Datatable = (args: any) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [counterOption, setCounterOption] = useState(
		DATATABLE_COUNTER_OPTIONS[0]
	)

	return (
		<D.Root {...args}>
			<D.Title>Datatable Title</D.Title>
			<D.Divider />
			<div className="d-flex p-3 justify-content-between">
				<div className="d-inline-flex justify-self-end">
					<D.Search
						placeholder={"Search headers"}
						name="search"
						type="text"
						icon="search"
					/>
				</div>
			</div>
			<D.Divider />
			<D.Table>
				<D.Header>
					{DATATABLE_DATA.headers.map((h) => (
						<D.HeaderItem key={h.name}>{h.text}</D.HeaderItem>
					))}
				</D.Header>
				<D.Body>
					{DATATABLE_DATA.rows.slice(0, 5).map((r, index) => (
						<D.Row key={index}>
							{r.map((c) => (
								<D.Column key={c.name}>{c.value}</D.Column>
							))}
						</D.Row>
					))}
				</D.Body>
			</D.Table>
			<div className="d-flex justify-content-between align-items-center">
				<D.Counter
					options={DATATABLE_COUNTER_OPTIONS}
					onChange={setCounterOption}
					value={counterOption}
					total={DATATABLE_DATA.rows.length}
				/>
				<D.Pagination
					current={currentPage}
					total={DATATABLE_DATA.rows.length}
					onChange={setCurrentPage}
				/>
			</div>
		</D.Root>
	)
}

export const DatatableDynamic = (args: any) => {
	const data = [
		{
			id: 1,
			title: "Beetlejuice",
			year: "1988",
		},
		{
			id: 2,
			title: "Ghostbusters",
			year: "1984",
		},
	]

	return <Dt {...args} columns={columns} data={data} isSearchable />
}

export const DatatableError = (args: any) => (
	<Dt columns={columns} data={[]} {...args} />
)
