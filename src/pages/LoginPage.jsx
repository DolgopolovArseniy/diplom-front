import { useForm } from "react-hook-form";
import AuthFormField from "../components/AuthFormField";
import AuthFormInput from "../components/AuthFormInput";
import { Link, useNavigate } from "react-router";
import AuthErrorMessage from "../components/AuthErrorMessage";
import toast from "react-hot-toast";
import { loginApi } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { token, user } = await loginApi(data);
      login(token, user);
      navigate("/", { replace: true });
    } catch {
      toast.error("Invalid credentials");
    }

    setIsLoading(false);
  };

  return (
    <>
      <title>Log in - Donathell</title>
      <main className="mx-auto min-h-[calc(100vh-5rem-0.5rem)] max-w-lg flex items-center justify-center text-donathell-secondary">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full placeholder-[#c7ccc8a8] bg-[#202123] rounded-lg resize-none px-6 py-4 focus:outline-none shadow-lg/30 border-x border border-[#404143] mb-20 flex flex-col items-stretch gap-3.5"
        >
          <h2 className="font-medium text-3xl self-center">
            Log in to{" "}
            <span className="text-donathell-main font-bold">Donathell</span>
          </h2>
          <AuthFormField>
            <label htmlFor="loginIdentifier">Username or email</label>
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
          <AuthFormField>
            <label htmlFor="password">Password</label>
            <AuthFormInput
              id="password"
              isPassword
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <AuthErrorMessage message={errors.password.message} />
            )}
          </AuthFormField>
          <button
            type="submit"
            className={`mt-3 rounded-xl text-lg ${isLoading ? "cursor-not-allowed" : "cursor-pointer"} duration-200 shadow-md bg-donathell-main text-[#101115] font-semibold h-9 hover:bg-[#32970d] disabled:bg-[#363739]`}
            disabled={isLoading}
          >
            Log in
          </button>
          <Link
            to="/signup"
            className="hover:bg-[#555658] hover:text-donathell-secondary rounded-xl flex items-center justify-center text-donathell-main h-9 duration-200"
          >
            Don't have an account? Sign up
          </Link>
        </form>
      </main>
    </>
  );
}
