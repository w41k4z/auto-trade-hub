import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";

const useLogin = () => {
  const navigate = useNavigate();
  const [isRemembered, setIsRemembered] = useState<boolean>(false);
  const user = useSelector((state: RootState) => selectUser(state));
  useEffect(() => {
    if (user?.accessToken) {
      navigate("/app/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    navigate,
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
