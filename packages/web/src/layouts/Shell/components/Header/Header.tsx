import { theme } from "@oriun/ui"
import { Icon } from "@oriun/ui/lib/components/Icon";
import { Input } from "@oriun/ui/lib/components/Input";
import { Dropdown } from "@oriun/ui/src/components/Dropdown";
import React from "react";
import { DropdownUser } from "./components/DropdownUser";

const Root = theme.styled("div", {
  height: "65px",
  position: "fixed",
  left: 0,
  width: "100%",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  boxShadow: "$secondary",
  backgroundColor: "$white",
  zIndex: 101,
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
});

const SearchInput = theme.styled(Input, {
  "@bpMD": {
    marginLeft: "32px",
    flex: "0 0 30%",
    display: "flex",
    minWidth: "350px"
  }
})

export function Header() {
  const searchRef = React.useRef<HTMLInputElement>(null);

  function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('search value', searchRef.current?.value);
  }

  return (
    <Root>
      <div className="flex-fill d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="logo">
            <img src="logo.svg" alt="logo" />
          </div>
          <form className="d-flex flex-fill" onSubmit={onSearchSubmit}>
            <SearchInput placeholder="Search" innerRef={searchRef} name="search" type="text" />
          </form>
        </div>
        <div className="d-flex align-items-center">
          <Dropdown.Root className="me-3">
            <Dropdown.Trigger>
              <Icon style="filled">notifications</Icon>
            </Dropdown.Trigger>
            <Dropdown.Content position="right">
              <Dropdown.Item>teste de notifications</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
          <DropdownUser />
        </div>
      </div>
    </Root>
  )
}
