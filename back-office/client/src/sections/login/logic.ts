import { FieldValues, UseFormSetError } from "react-hook-form";
import axios from "../../axios";
import { Dispatch, UnknownAction } from "redux";
import { setUser, setLoading } from "../../redux/features/User/action";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { UserState } from "../../redux/features/User/type";
import { NavigateFunction } from "react-router";

const originEndPoint = "/auth/v1/back-office";

export const authenticate = async (
  navigate: NavigateFunction,
  toRemember: boolean,
  data: FieldValues,
  setError: UseFormSetError<FieldValues>,
  resetCallback: () => void,
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
    .post(originEndPoint, data)
    .then((res) => {
      const response = res.data;
      if (response.status === 200) {
        if (toRemember) {
          localStorage.setItem("token", response.payload.accessToken);
        }
        resetCallback();
        reduxDispatch(
          setUser({
            accessToken: response.payload.accessToken,
            role: response.payload.role,
          })
        );
        reduxDispatch(setLoading(false));
        navigate("/app/dashboard");
      } else {
        console.log(response.message);
        setError("global", {
          type: "manual",
          message: response.message,
        });
        reduxDispatch(setLoading(false));
        return;
      }
    })
    .catch((err) => {
      alert(err);
    });
};
