import { FieldValues, UseFormSetError } from "react-hook-form";
import axios from "../../axios";
import { Dispatch, UnknownAction } from "redux";
import { setUser, setLoading } from "../../redux/features/User/action";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { UserState } from "../../redux/features/User/type";

const originEndPoint = "/auth/v1";

export const authenticate = async (
  toRemember: boolean,
  data: FieldValues,
  setError: UseFormSetError<FieldValues>,
  callback: () => void,
  reduxDispatch: ThunkDispatch<
    {
      user: UserState;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>
) => {
  reduxDispatch(setLoading(true));
  await axios
    .post(`${originEndPoint}/login`, data)
    .then((res) => {
      const response = res.data;
      if (response.status === 200) {
        if (toRemember) {
          localStorage.setItem("token", response.payload.token);
        }
        callback();
        reduxDispatch(
          setUser({
            accessToken: response.payload.token,
            role: response.payload.role,
          })
        );
        reduxDispatch(setLoading(false));
      } else {
        setError("global", response.message);
        reduxDispatch(setLoading(false));
        return;
      }
    })
    .catch((err) => {
      alert(err);
    });
};
