import type * as Stitches from "@stitches/react"
import React, { FC, PropsWithChildren } from "react"
import { ButtonCSS } from "../../styles/button"
import theme from "../../theme"

const StyledButton: FC<ButtonProps> = theme.styled("button", ButtonCSS)

export type ButtonProps = PropsWithChildren<React.ButtonHTMLAttributes<any>> &
	Stitches.VariantProps<typeof ButtonCSS> & {
		label?: string
	}

export function Button({ label, variant = "primary", ...props }: ButtonProps) {
	return (
		<StyledButton variant={variant} {...props}>
			<span>{label}</span>
			{props.children}
		</StyledButton>
	)
}
