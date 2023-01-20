import { Avatar } from "@/components/Avatar";
import { useSession } from "@/context/Session";
import { theme } from "@oriun/ui";
import { Text } from "@oriun/ui/lib/components/Text";
import { Dropdown } from "@oriun/ui/src/components/Dropdown";

const DropdownItemHoverable = theme.styled(Dropdown.Item, {
  cursor: "pointer",
})

export function DropdownUser() {
  const { session, closeAuthentication } = useSession();

  function logout() {
    closeAuthentication()
  }

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column align-items-end me-2">
            <Text>{session?.data?.me?.username}</Text>
            <Text size="small">{session?.data?.me?.role?.name}</Text>
          </div>
          <Avatar src={session?.data?.me?.profile.picture} />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Content position="right">
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Settings</Dropdown.Item>
        <DropdownItemHoverable onClick={logout}>Logout</DropdownItemHoverable>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
