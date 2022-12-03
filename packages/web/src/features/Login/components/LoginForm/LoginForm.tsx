import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { InputField } from "oriun-ui/lib/components/InputField"
import { Button } from "oriun-ui/lib/components/Button"
import { EMAIL_REGEX_PATTERN } from '@/config/constants';
import { TextSmallError } from '@/components/TextSmallError';
import { Icon } from 'oriun-ui/lib/components/Icon';
import { theme } from 'oriun-ui';

const HoverableIcon = theme.styled(Icon, {
  "&:hover": {
    cursor: "pointer",
    color: "$primary"
  }
})

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginProps {
  onSubmit: (data: LoginFormData) => void;
  showRememberMe?: boolean;
}

export function LoginForm({ onSubmit, showRememberMe }: LoginProps) {
  const { handleSubmit, control, formState: { isValid, errors } } = useForm<LoginFormData>({ mode: "onChange" });
  const [inputType, setInputType] = useState<"text" | "password">("password");

  const onFormSubmit = useCallback(handleSubmit(async (data) => {
    onSubmit(data);
  }), [onSubmit])

  const toggleInputType = useCallback(() => setInputType(inputType === "password" ? "text" : "password"), [inputType])

  return (
    <form onSubmit={onFormSubmit}>
      <Controller
        name='email'
        control={control}
        rules={{
          required: {
            value: true,
            message: "Campo Obrigatório"
          },
          pattern: {
            value: EMAIL_REGEX_PATTERN,
            message: "Email invalido"
          },
        }}
        render={({ field }) => (
          <InputField
            text={<TextSmallError>{errors?.email?.message}</TextSmallError>}
            type="email"
            label="Email"
            placeholder='Insira o email'
            {...field}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        rules={{
          required: {
            value: true,
            message: "Campo obrigatório"
          }
        }}
        render={({ field }) => <InputField
          type={inputType}
          label="Password"
          placeholder="Insira a password"
          text={<TextSmallError>{errors?.email?.message}</TextSmallError>}
          action={
            <HoverableIcon onClick={toggleInputType}>
              {inputType === "password" ? "visibility" : "visibility_off"}
            </HoverableIcon>
          }
          {...field} />}
      />
      <br />
      <div className="d-flex align-items-center justify-content-between">
        {showRememberMe && (<Button variant="link" label="Esqueceu-se da password?" />)}
        <Button label="Entrar" onClick={onFormSubmit} />
      </div>
    </form>
  )
}
