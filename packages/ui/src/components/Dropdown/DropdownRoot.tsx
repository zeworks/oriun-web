import { Children, cloneElement, useState, PropsWithChildren, useCallback, useMemo, useRef, useEffect } from "react"
import { useOutside } from "@oriun/core/src/utils/useOutside";
import { DropdownRootCSS } from "../../styles/dropdown";
import theme from "../../theme";

const StyledDropdownRoot = theme.styled("div", DropdownRootCSS)

export type DropdownRootProps = PropsWithChildren<{
  className?: string;
  children?: any;
}>;

export function DropdownRoot({ children, className }: DropdownRootProps) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const { isOutside } = useOutside(ref);

  const toggleActive = useCallback(() => setActive(!active), [active]);

  const renderChildren = useMemo(() => Children.map(children, (child) => cloneElement(child, {
    onClick: toggleActive,
    active,
    ...child.props
  })), [toggleActive, active, children])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape")
      toggleActive()
  }, [toggleActive])

  useEffect(() => {
    if (isOutside && active)
      setActive(false)
  }, [isOutside, active])

  useEffect(() => {
    if (active) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown)
    }
  }, [active])

  return (
    <StyledDropdownRoot ref={ref} className={className}>
      {renderChildren}
    </StyledDropdownRoot>
  )
}
