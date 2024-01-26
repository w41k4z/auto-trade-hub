// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const useGlobalCommissionSetting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();

  return {
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    setError,
  };
};

export default useGlobalCommissionSetting;
