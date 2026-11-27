import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/FormSchema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerschema)
  });

  function onSubmit1(data) {
    console.log(data);
    alert("Register Success");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit(onSubmit1)}
        className="bg-white p-6 rounded-lg shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-5 text-red-800">
          Register
        </h2>

        <label>Name</label>
        <input className="w-full p-2 border rounded mb-2"
          placeholder="Enter your name" {...register("name")} />
        <p className="text-red-500">{errors.name?.message}</p>

        <label>Email</label>
        <input className="w-full p-2 border rounded mb-2"
          placeholder="Enter your email" {...register("email")} />
        <p className="text-red-500">{errors.email?.message}</p>

        <label>Password</label>
        <input type="password" className="w-full p-2 border rounded mb-2"
          placeholder="Enter password" {...register("password")} />
        <p className="text-red-500">{errors.password?.message}</p>

        <label>Age</label>
        <input type="number" className="w-full p-2 border rounded mb-2"
          placeholder="Enter your age"
          {...register("age", { valueAsNumber: true })} />
        <p className="text-red-500">{errors.age?.message}</p>

        <button className="w-full bg-red-800 text-white p-2 rounded  mt-3 hover:bg-blue-600">
          Submit
        </button>

      </form>
    </div>
  );
}

export default Register;