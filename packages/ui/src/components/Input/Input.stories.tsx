import React from "react";
import { Input as InputComponent } from "./Input";

export default {
  title: "Form/Input",
  component: InputComponent,
  args: {
    placeholder: "Placeholder text"
  }
}

export function Input(props: any) {
  return (
    <InputComponent {...props} />
  )
}
