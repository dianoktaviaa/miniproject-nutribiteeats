import Input from "../../components/input";
import Logo from "../../assets/login.jpg";
import { Button } from "../../components/button";
import { IoArrowForwardOutline } from "react-icons/io5";
import Swal from "sweetalert2";

import { useToken } from "../../utils/context/token";
import { userLogin } from "../../utils/apis/auth";
import { loginSchema } from "../../utils/apis/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { changeToken } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data) {
    try {
      const result = await userLogin(data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are successfully login",
        showConfirmButton: false,
        timer: 1000,
      });
      changeToken(JSON.stringify(result.payload));
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <div className="flex h-screen bg-[#68a47f]">
      <div className="flex-1 align-middle sm:hidden lg:inline-block ">
        <img src={Logo} alt="Login Image" className="h-full w-[900px]" />
      </div>

      <div className="flex-1 justify-center px-[200px] self-center ">
        <h1 className="text-center text-4xl font-bold text-white ">Welcome!</h1>
        <p className="text-center pb-16 text-xl font-normal text-white ">
          Log in to use the features.
        </p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            placeholder="Email"
            type="email"
            name="username"
            register={register}
            error={errors.username?.message}
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <div className="pt-6">
            <Button
              label="Login"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            />
          </div>
        </form>
        <div className="text-center text-white pt-20">
          <p>
            Dont have an account?
            <Link to="/signup">
              <span className="ps-1 font-bold hover:text-[#EFD372] hover:underline underline-offset-4">
                Sign Up
              </span>
            </Link>
          </p>
          <Link to="/">
            <div className="flex justify-center gap-2 pt-8 hover:text-[#EFD372] hover:underline underline-offset-4">
              <div>
                <p>Back to home</p>
              </div>
              <div className="pt-1">
                <IoArrowForwardOutline />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
