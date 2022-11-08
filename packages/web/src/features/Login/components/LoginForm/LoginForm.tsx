import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { InputField } from "oriun-ui/lib/components/molecules/InputField"
import { Button } from "oriun-ui/lib/components/atoms/Button"
import { EMAIL_REGEX_PATTERN } from '@/config/constants';
import { TextSmallError } from '@/components/TextSmallError';
import { sdk } from '@/lib/sdk';

interface LoginData {
  email: string;
  password: string;
}

interface LoginOnSuccess {
  accessToken?: string;
}

export interface LoginProps {
  onSuccess?: (data: LoginOnSuccess) => void;
  onError?: (error?: any) => void;
  showRememberMe?: boolean;
}

export function LoginForm({ onSuccess, onError, showRememberMe }: LoginProps) {
  const { handleSubmit, control, formState: { isValid, errors } } = useForm<LoginData>({ mode: "onChange" });
  const [isLoading, setLoading] = useState(false);

  const onSubmit = useCallback(handleSubmit(async (data) => {
    setLoading(true);

    const { data: session, error } = await sdk.auth.login(data.email, data.password);

    if (session?.session)
      onSuccess?.({ accessToken: session?.session?.accessToken });
    else
      onError?.(error);

    setLoading(false);

  }), [onSuccess])

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
          required: true,
        }}
        render={({ field }) => <InputField type="password" label="Password" {...field} />}
      />
      <br />
      {isLoading && <span>loading...</span>}
      <Button disabled={!isValid} label="Entrar" onClick={onSubmit} />
    </form>
  )
}
