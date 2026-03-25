import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

export function useAuthSubmit(apiFn, errorMessage, redirectTo = "/donations") {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { token, user } = await apiFn(data);
      login(token, user);
      navigate(redirectTo, { replace: true });
    } catch {
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading };
}
