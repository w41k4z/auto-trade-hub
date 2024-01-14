import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const useLogin = () => {
  const [isRemembered, setIsRemembered] = useState<boolean>(false);
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  return {
    register,
    handleSubmit,
    reset,
    errors,
    setError,
    isSubmitting,
    reduxDispatch: dispatch,
    isRemembered,
    setIsRemembered,
  };
};

export default useLogin;
