import { extractPathFromList } from "@/utils/extractPathFromList"
import { Menu } from "@oriun/core/lib/domain/menu"
import { Module } from "@oriun/core/lib/domain/module"
import { theme } from "@oriun/ui"
import { Icon } from "@oriun/ui/lib/components/Icon"
import { pxToRem } from "@oriun/ui/src/utils/rem"
import classNames from "classnames"
import { PropsWithChildren, useCallback, useMemo, useState } from "react"
import { NavLink } from "react-router-dom"

const MenuList = theme.styled("ul", {
	margin: "0",
	padding: "0",
	listStyle: "none",
})

const SubMenuList = theme.styled(MenuList, {
	display: "none",

	li: {
		display: "flex",
		flexDirection: "row",
		minHeight: "48px",

		"&.active > div::before, &.active > a::before": {
			borderColor: "$white",
		},

		"> div::before, > a::before": {
			content: "",
			width: 8,
			height: 8,
			border: "1px solid rgba($dark)",
			borderRadius: "100%",
			marginRight: 12,
			flexShrink: 0,
		},
	},
})

const MenuListItemExpandable = theme.styled("div", {
	color: "rgba($dark)",
	borderRadius: "12px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "12px 15px",

	span: {
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
	},

	i: {
		transition: "transform .2s ease",
	},
})

const MenuListItemLink = theme.styled(MenuListItemExpandable, {
	textDecoration: "none",
	width: "100%",
	justifyContent: "flex-start",
	flex: 1,
})

const MenuListItem = theme.styled("li", {
	fontSize: pxToRem(16),
	fontWeight: "$regular",
	display: "flex",
	flexDirection: "column",
	margin: "6px 0",
	cursor: "pointer",
	minHeight: "48px",

	"&.active": {
		"> ul": {
			display: "block",
		},
		"> div": {
			backgroundColor: "$primaryTransparent",
			color: "$primary",

			i: {
				transform: "rotate(90deg)",
			},
		},
		"> a": {
			color: "$white",
			boxShadow: "rgb(115 103 240 / 48%) 0px 2px 6px",
			background:
				"linear-gradient(72.47deg, rgb(115, 103, 240) 22.16%, rgba(115, 103, 240, 0.7) 76.47%)",
		},
	},

	"&:not(.active) > div:hover, &:not(.active) > a:hover": {
		backgroundColor: "$primaryTransparent",
		color: "$primary",
	},
})

export interface MenuModuleProps {
	data: Module
}

interface MenuModuleItemProps {
	data: Menu
	activePath?: boolean
}

function MenuModuleItem({
	data,
	children,
	activePath,
}: PropsWithChildren<MenuModuleItemProps>) {
	const [isActive, setActive] = useState<boolean>()

	const toggleMenu = useCallback(() => setActive(!isActive), [isActive])

	const isExpandable = data.children && data.children.length > 0

	return (
		<MenuListItem
			className={classNames({
				active: isActive !== undefined ? isActive : false || activePath,
			})}
		>
			{isExpandable ? (
				<MenuListItemExpandable onClick={toggleMenu}>
					<span>{data.name}</span>
					<Icon variant="symbols">navigate_next</Icon>
				</MenuListItemExpandable>
			) : (
				<MenuListItemLink as={NavLink} to={data.path}>
					<span>{data.name}</span>
				</MenuListItemLink>
			)}
			{children}
		</MenuListItem>
	)
}

export function MenuModule({ data }: MenuModuleProps) {
	const currentMenuSelected = useMemo(
		() =>
			extractPathFromList(
				window.location.pathname,
				data.menus,
				"path",
				"children"
			).map((m) => m.path),
		[data.menus, window.location.pathname]
	)

	const iterateMenu = useCallback(
		(menu: Menu) => {
			const hasChildMenu = !!menu.children?.length
			const isActivePath = currentMenuSelected.some(
				(path) => path === menu.path
			)

			return (
				<MenuModuleItem
					key={menu.path || menu.name}
					data={menu}
					activePath={isActivePath}
				>
					{hasChildMenu ? (
						<SubMenuList>{menu.children?.map(iterateMenu)}</SubMenuList>
					) : null}
				</MenuModuleItem>
			)
		},
		[data.menus, currentMenuSelected]
	)

	return <MenuList>{data.menus?.map(iterateMenu)}</MenuList>
}
