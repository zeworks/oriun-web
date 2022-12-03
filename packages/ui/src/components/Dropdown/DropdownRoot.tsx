import { Children, cloneElement, useState, PropsWithChildren, useCallback, useMemo, useRef, useEffect } from "react"
import { theme } from "oriun-ui";
import { useOutside } from "@oriun/core/src/utils/useOutside";
import { DropdownRootCSS } from "../../styles/dropdown";

const StyledDropdownRoot = theme.styled("div", DropdownRootCSS)

export type DropdownRootProps = PropsWithChildren<any>;

export function DropdownRoot({ children }: DropdownRootProps) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const { isOutside } = useOutside(ref);

  const toggleActive = useCallback(() => setActive(!active), [active]);

  const renderChildren = useMemo(() => Children.map(children, (child) => cloneElement(child, {
    onClick: toggleActive,
    active,
    ...child.props
  })), [toggleActive, active, children])

  useEffect(() => {
    if (isOutside && active)
      setActive(false)
  }, [isOutside, active])

  return (
    <StyledDropdownRoot ref={ref}>
      {renderChildren}
    </StyledDropdownRoot>
  )
}
