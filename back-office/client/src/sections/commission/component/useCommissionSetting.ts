// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useCarModel from "../../car-model/useCarModel";
const useCommissionSetting = () => {
  const { carModels } = useCarModel();
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
    carModels,
    reset,
    errors,
    isSubmitting,
    setError,
  };
};

export default useCommissionSetting;
