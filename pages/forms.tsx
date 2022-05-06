import { FieldErrors, useForm } from "react-hook-form";

// Goals with useForm: Less Code, Better validation, Better Errors(set, clear, display)
// Have control over inputs
// Don't deal with events
// Easier Inputs

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = () => {
    console.log("valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", {
          required: "User Name is Required",
          minLength: {
            message: "The user name should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
