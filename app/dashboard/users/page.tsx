"use client";

import React from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@heroui/table";
import { User } from "@heroui/user";
import { Button } from "@heroui/button";

import {
	SearchIcon,
	ChevronDownIcon,
	PlusIcon,
	VerticalDotsIcon,
} from "@/components/icons";

import { Input } from "@heroui/input";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@heroui/dropdown";
import { Chip } from "@heroui/chip";
import { Pagination } from "@heroui/pagination";

import { users } from "./user";

// Define types for the data
interface User {
	id: number;
	name: string;
	role: string;
	team: string;
	status: string;
	age: string;
	avatar: string;
	email: string;
}

interface Column {
	name: string;
	uid: string;
	sortable?: boolean;
}

interface StatusOption {
	name: string;
	uid: string;
}

// Data and configuration
const columns: Column[] = [
	{ name: "ID", uid: "id", sortable: true },
	{ name: "NAME", uid: "name", sortable: true },
	{ name: "AGE", uid: "age", sortable: true },
	{ name: "ROLE", uid: "role", sortable: true },
	{ name: "TEAM", uid: "team" },
	{ name: "EMAIL", uid: "email" },
	{ name: "STATUS", uid: "status", sortable: true },
	{ name: "ACTIONS", uid: "actions" },
];

const statusOptions: StatusOption[] = [
	{ name: "Active", uid: "active" },
	{ name: "Paused", uid: "paused" },
	{ name: "Vacation", uid: "vacation" },
];

const statusColorMap: Record<string, string> = {
	active: "success",
	paused: "danger",
	vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

// Utility function to capitalize strings
const capitalize = (s: string) =>
	s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export default function UsersPage() {
	const [filterValue, setFilterValue] = React.useState("");
	const [selectedKeys, setSelectedKeys] = React.useState<Set<React.Key>>(
		new Set()
	);
	const [visibleColumns, setVisibleColumns] = React.useState<Set<string>>(
		new Set(INITIAL_VISIBLE_COLUMNS)
	);
	const [statusFilter, setStatusFilter] = React.useState<Set<string>>(
		new Set()
	);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [sortDescriptor, setSortDescriptor] = React.useState({
		column: "age",
		direction: "ascending",
	});
	const [page, setPage] = React.useState(1);

	const pages = Math.ceil(users.length / rowsPerPage);

	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = React.useMemo(() => {
		if (visibleColumns.has("all")) return columns;
		return columns.filter((column) => visibleColumns.has(column.uid));
	}, [visibleColumns]);

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...users];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter((user) =>
				user.name.toLowerCase().includes(filterValue.toLowerCase())
			);
		}

		if (statusFilter.size > 0 && statusFilter.size !== statusOptions.length) {
			filteredUsers = filteredUsers.filter((user) =>
				statusFilter.has(user.status)
			);
		}

		return filteredUsers;
	}, [filterValue, statusFilter, hasSearchFilter]);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = React.useMemo(() => {
		return [...items].sort((a, b) => {
			const first = a[sortDescriptor.column as keyof User];
			const second = b[sortDescriptor.column as keyof User];
			const cmp = first < second ? -1 : first > second ? 1 : 0;
			return sortDescriptor.direction === "descending" ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const renderCell = React.useCallback((user: User, columnKey: string) => {
		const cellValue = user[columnKey as keyof User];

		switch (columnKey) {
			case "name":
				return (
					<User
						avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
						classNames={{ description: "text-default-500" }}
						description={user.email}
						name={cellValue as string}
					/>
				);
			case "role":
				return (
					<div className="flex flex-col">
						<p className="text-bold text-small capitalize">{cellValue}</p>
						<p className="text-bold text-tiny capitalize text-default-500">
							{user.team}
						</p>
					</div>
				);
			case "status":
				return (
					<Chip
						className="capitalize border-none gap-1 text-default-600"
						color={statusColorMap[user.status]}
						size="sm"
						variant="dot"
					>
						{cellValue}
					</Chip>
				);
			case "actions":
				return (
					<div className="relative flex justify-end items-center gap-2">
						<Dropdown className="bg-background border-1 border-default-200">
							<DropdownTrigger>
								<Button isIconOnly radius="full" size="sm" variant="light">
									<VerticalDotsIcon className="text-default-400" />
								</Button>
							</DropdownTrigger>
							<DropdownMenu>
								<DropdownItem key="view">View</DropdownItem>
								<DropdownItem key="edit">Edit</DropdownItem>
								<DropdownItem key="delete">Delete</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				);
			default:
				return cellValue;
		}
	}, []);

	const onRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRowsPerPage(Number(e.target.value));
		setPage(1);
	};

	const onSearchChange = (value: string) => {
		setFilterValue(value);
		setPage(1);
	};

	const topContent = React.useMemo(() => {
		return (
			<div className="flex flex-col gap-4">
				<div className="flex justify-between gap-3 items-end">
					<Input
						isClearable
						classNames={{
							base: "w-full sm:max-w-[44%]",
							inputWrapper: "border-1",
						}}
						placeholder="Search by name..."
						size="sm"
						startContent={<SearchIcon className="text-default-300" />}
						value={filterValue}
						variant="bordered"
						onClear={() => setFilterValue("")}
						onValueChange={onSearchChange}
					/>
					<div className="flex gap-3">
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button
									endContent={<ChevronDownIcon className="text-small" />}
									size="sm"
									variant="flat"
								>
									Status
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={statusFilter}
								selectionMode="multiple"
								onSelectionChange={setStatusFilter}
							>
								{statusOptions.map((status) => (
									<DropdownItem key={status.uid} className="capitalize">
										{capitalize(status.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button
									endContent={<ChevronDownIcon className="text-small" />}
									size="sm"
									variant="flat"
								>
									Columns
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={visibleColumns}
								selectionMode="multiple"
								onSelectionChange={setVisibleColumns}
							>
								{columns.map((column) => (
									<DropdownItem key={column.uid} className="capitalize">
										{capitalize(column.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Button
							className="bg-foreground text-background"
							endContent={<PlusIcon />}
							size="sm"
						>
							Add New
						</Button>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-default-400 text-small">
						Total {users.length} users
					</span>
					<label className="flex items-center text-default-400 text-small">
						Rows per page:
						<select
							className="bg-transparent outline-none text-default-400 text-small"
							onChange={onRowsPerPageChange}
						>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
						</select>
					</label>
				</div>
			</div>
		);
	}, [
		filterValue,
		statusFilter,
		visibleColumns,
		onSearchChange,
		onRowsPerPageChange,
	]);

	const bottomContent = React.useMemo(() => {
		return (
			<div className="py-2 px-2 flex justify-between items-center">
				<Pagination
					showControls
					classNames={{ cursor: "bg-foreground text-background" }}
					color="default"
					isDisabled={hasSearchFilter}
					page={page}
					total={pages}
					variant="light"
					onChange={setPage}
				/>
				<span className="text-small text-default-400">
					{selectedKeys.size === items.length
						? "All items selected"
						: `${selectedKeys.size} of ${items.length} selected`}
				</span>
			</div>
		);
	}, [selectedKeys, items.length, page, pages, hasSearchFilter]);

	const classNames = React.useMemo(
		() => ({
			wrapper: ["max-h-[382px]", "max-w-3xl"],
			th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
			td: [
				"group-data-[first=true]/tr:first:before:rounded-none",
				"group-data-[first=true]/tr:last:before:rounded-none",
				"group-data-[middle=true]/tr:before:rounded-none",
				"group-data-[last=true]/tr:first:before:rounded-none",
				"group-data-[last=true]/tr:last:before:rounded-none",
			],
		}),
		[]
	);

	return (
		<Table
			isCompact
			removeWrapper
			aria-label="Example table with custom cells, pagination and sorting"
			bottomContent={bottomContent}
			bottomContentPlacement="outside"
			checkboxesProps={{
				classNames: {
					wrapper: "after:bg-foreground after:text-background text-background",
				},
			}}
			classNames={classNames}
			selectedKeys={selectedKeys}
			selectionMode="multiple"
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement="outside"
			onSelectionChange={setSelectedKeys}
			onSortChange={setSortDescriptor}
		>
			<TableHeader columns={headerColumns}>
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}
						allowsSorting={column.sortable}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={"No users found"} items={sortedItems}>
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
