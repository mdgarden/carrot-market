import { useForm } from "react-hook-form";

// Goals with useForm: Less Code, Better validation, Better Errors(set, clear, display)
// Have control over inputs
// Don't deal with events
// Easier Inputs

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log("valid");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("username", { required: true })}
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
