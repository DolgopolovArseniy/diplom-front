import { useForm } from "react-hook-form";
import AuthFormField from "../components/AuthFormField";
import AuthFormInput from "../components/AuthFormInput";
import AuthErrorMessage from "../components/AuthErrorMessage";
import { signupApi } from "../services/api";
import AuthForm from "../components/AuthForm";
import { useAuthSubmit } from "../hooks/useAuthSubmit";

export default function SignupPage() {
  const { onSubmit, isLoading } = useAuthSubmit(
    signupApi,
    "Something went wrong",
  );
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  return (
    <>
      <title>Sign up - Donathell</title>
      <main className="mx-auto min-h-[calc(100vh-5rem-0.5rem)] max-w-lg flex items-center justify-center text-donathell-secondary">
        <AuthForm
          onSubmit={handleSubmit(onSubmit)}
          type="signup"
          isLoading={isLoading}
        >
          <AuthFormField label="Username" htmlFor="username">
            <AuthFormInput
              id="username"
              type="text"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <AuthErrorMessage message={errors.username.message} />
            )}
          </AuthFormField>
          <AuthFormField label="Email" htmlFor="email">
            <AuthFormInput
              id="email"
              type="text"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <AuthErrorMessage message={errors.email.message} />
            )}
          </AuthFormField>
          <AuthFormField label="Password" htmlFor="password">
            <AuthFormInput
              id="password"
              isPassword
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                  message:
                    "Password must contain at least one letter and one number",
                },
              })}
            />
            {errors.password && (
              <AuthErrorMessage message={errors.password.message} />
            )}
          </AuthFormField>
          <AuthFormField label="Confirm password" htmlFor="passwordConfirm">
            <AuthFormInput
              id="passwordConfirm"
              isPassword
              {...register("passwordConfirm", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.passwordConfirm && (
              <AuthErrorMessage message={errors.passwordConfirm.message} />
            )}
          </AuthFormField>
        </AuthForm>
      </main>
    </>
  );
}
