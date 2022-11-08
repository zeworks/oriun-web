import { Input as InputComponent } from "./index";

export default {
  title: "Atoms/Input",
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
