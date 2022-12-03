import { Avatar } from "@/components/Avatar";
import { useSession } from "@/context/Session";
import { theme } from "@oriun/ui"
import { Icon } from "@oriun/ui/lib/components/Icon";
import { Dropdown } from "@oriun/ui/src/components/Dropdown";

const Root = theme.styled("div", {
  height: "4rem",
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

export function Header() {
  const { session, closeAuthentication } = useSession();

  function logout() {
    closeAuthentication()
  }

  return (
    <Root>
      <div className="flex-fill d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="logo">logo</div>
          <div className="search-component">search</div>
        </div>
        <div className="d-flex align-items-center">
          <div className="notifications">
            <Dropdown.Root>
              <Dropdown.Trigger>
                <Icon>notifications</Icon>
              </Dropdown.Trigger>
              <Dropdown.Content position="right">
                <Dropdown.Item>teste de notifications</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
          <div className="user">
            <Dropdown.Root>
              <Dropdown.Trigger>
                <Avatar src={session?.data?.me?.profile.picture} />
              </Dropdown.Trigger>
              <Dropdown.Content position="right">
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
        </div>
      </div>
    </Root>
  )
}
