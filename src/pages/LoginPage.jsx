import { useForm } from "react-hook-form";
import AuthFormField from "../components/AuthFormField";
import AuthFormInput from "../components/AuthFormInput";
import AuthErrorMessage from "../components/AuthErrorMessage";
import { loginApi } from "../services/api";
import AuthForm from "../components/AuthForm";
import { useAuthSubmit } from "../hooks/useAuthSubmit";

export default function LoginPage() {
  const { onSubmit, isLoading } = useAuthSubmit(
    loginApi,
    "Invalid credentials",
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <title>Log in - Donathell</title>
      <main className="mx-auto min-h-[calc(100vh-5rem-0.5rem)] max-w-lg flex items-center justify-center text-donathell-secondary">
        <AuthForm
          onSubmit={handleSubmit(onSubmit)}
          type="login"
          isLoading={isLoading}
        >
          <AuthFormField label="Username or email" htmlFor="loginIdentifier">
            <AuthFormInput
              id="loginIdentifier"
              type="text"
              {...register("loginIdentifier", {
                required: "Username or email is required",
              })}
            />
            {errors.loginIdentifier && (
              <AuthErrorMessage message={errors.loginIdentifier.message} />
            )}
          </AuthFormField>
          <AuthFormField label="Password" htmlFor="password">
            <AuthFormInput
              id="password"
              isPassword
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <AuthErrorMessage message={errors.password.message} />
            )}
          </AuthFormField>
        </AuthForm>
      </main>
    </>
  );
}
