import { useForm } from "react-hook-form";

// Goals with useForm: Less Code, Better validation, Better Errors(set, clear, display)
// Have control over inputs
// Don't deal with events
// Easier Inputs

export default function Forms() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <form>
      <input {...register("username")} type="text" placeholder="Username" />
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );
}
