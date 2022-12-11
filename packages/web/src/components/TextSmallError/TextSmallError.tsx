import { Text } from "@oriun/ui/lib/components/Text";
import { PropsWithChildren } from "react";

export function TextSmallError(props: PropsWithChildren<any>) {
  return (
    <Text color="danger" size="small">{props.children}</Text>
  )
}
