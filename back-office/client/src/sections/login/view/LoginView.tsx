import logo from "../../../assets/images/logo.jpg";
import useLogin from "../useLogin";
import { authenticate } from "../logic";

import "../my-login.css";

const LoginView = () => {
  const {
    navigate,
    isRemembered,
    setIsRemembered,
    register,
    handleSubmit,
    errors,
    setError,
    isSubmitting,
    reset,
    reduxDispatch,
  } = useLogin();

  return (
    <main className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img src={logo} alt="logo" />
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <form
                    onSubmit={handleSubmit((data) => {
                      authenticate(
                        navigate,
                        isRemembered,
                        data,
                        setError,
                        reset,
                        reduxDispatch
                      );
                    })}
                    className="my-login-validation row"
                  >
                    <div className="form-group col-12">
                      <label htmlFor="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="text"
                        defaultValue="admin@gmail.com"
                        className="form-control"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                      />
                      {errors?.email && (
                        <p className="alert alert-danger mt-2" role="alert">
                          {errors.email?.message?.toString()}
                        </p>
                      )}
                    </div>

                    <div className="form-group col-12">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        defaultValue="admin"
                        className="form-control mt-1"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors?.password && (
                        <p className="alert alert-danger mt-2" role="alert">
                          {errors.password?.message?.toString()}
                        </p>
                      )}
                    </div>

                    <div className="form-group col-12 my-2">
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          id="remember"
                          onChange={(e) => {
                            setIsRemembered(e.target.checked);
                          }}
                          className="custom-control-input"
                          checked={isRemembered}
                        />{" "}
                        Remember Me
                      </div>
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn btn-primary btn-block col-12"
                    >
                      Login
                    </button>
                    {errors?.global && (
                      <p className="alert alert-danger mt-2" role="alert">
                        {errors.global?.message?.toString()}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginView;
