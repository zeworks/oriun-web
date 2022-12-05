import { Text } from "@oriun/ui/lib/components/Typography";
import { PropsWithChildren } from "react";

export function TextSmallError(props: PropsWithChildren<any>) {
  return (
    <Text color="danger" variant="small">{props.children}</Text>
  )
}
