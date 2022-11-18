import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { InputField } from "oriun-ui/lib/components/molecules/inputField"
import { Button } from "oriun-ui/lib/components/atoms/button"
import { EMAIL_REGEX_PATTERN } from '@/config/constants';
import { TextSmallError } from '@/components/TextSmallError';
import { useSdkClient } from '@/lib/sdk';
import { Icon } from 'oriun-ui/lib/components/atoms/icon';
import { theme } from 'oriun-ui';
import { useSession } from '@/context/SessionContext';

const HoverableIcon = theme.styled(Icon, {
  "&:hover": {
    cursor: "pointer",
    color: "$primary"
  }
})

interface LoginData {
  email: string;
  password: string;
}

export interface LoginProps {
  onSuccess?: () => void;
  onError?: (error?: any) => void;
  showRememberMe?: boolean;
}

export function LoginForm({ onSuccess, onError, showRememberMe }: LoginProps) {
  const { handleSubmit, control, formState: { isValid, errors } } = useForm<LoginData>({ mode: "onChange" });
  const [isLoading, setLoading] = useState(false);
  const [inputType, setInputType] = useState<"text" | "password">("password");
  const { auth: { login } } = useSdkClient();
  const { setAuthToken, logout } = useSession()

  const onSubmit = useCallback(handleSubmit(async (data) => {
    setLoading(true);

    const { data: session, error } = await login(data.email, data.password);
    setLoading(false);

    if (!session?.session?.accessToken) {
      logout();
      return onError?.(error);
    }

    setAuthToken(session.session.accessToken!);
    onSuccess?.();
  }), [onSuccess])

  const toggleInputType = useCallback(() => setInputType(inputType === "password" ? "text" : "password"), [inputType])

  return (
    <form onSubmit={onSubmit}>
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
      {isLoading && <span>loading...</span>}
      <div className="d-flex align-items-center justify-content-between">
        {showRememberMe && (<Button variant="link" label="Esqueceu-se da password?" />)}
        <Button label="Entrar" onClick={onSubmit} />
      </div>
    </form>
  )
}
