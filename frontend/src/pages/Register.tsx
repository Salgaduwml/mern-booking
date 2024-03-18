import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: () => console.log("Registration successfull"),
    onError(error: Error) {
      console.log(error.message);
    },
  });

  const onSubmit = handleSubmit((data) => mutation.mutate(data));

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <h1>Create an account</h1>
        <div>
          <div>
            <label>
              First Name{" "}
              <input
                type="text"
                className="border"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label>
              Last Name{" "}
              <input
                type="text"
                className="border"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </label>
          </div>

          <div>
            <label>
              Email{" "}
              <input
                type="email"
                className="border"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </label>
          </div>
          <div>
            <label>
              Password{" "}
              <input
                type="password"
                className="border"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label>
              Confirm Password{" "}
              <input
                type="password"
                className="border"
                {...register("confirmPassword", {
                  validate: (val) => {
                    if (!val) {
                      return "Confirm password is required";
                    } else if (watch("password") !== val) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </label>
          </div>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
