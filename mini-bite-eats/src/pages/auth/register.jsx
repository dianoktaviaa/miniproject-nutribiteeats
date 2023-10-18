import Input from "../../components/input";
import Logo from "../../assets/login.jpg";
import { Button } from "../../components/button";

export default function Register() {
  return (
    <div className="flex h-screen bg-[#68a47f]">
      <div className="flex-1 align-middle sm:hidden lg:inline-block ">
        <img src={Logo} alt="Login Image" className="h-full w-[900px]" />
      </div>
      <div className="flex-1 justify-center px-[200px] self-center ">
        <h1 className="text-center text-4xl font-bold text-white ">
          Create your account
        </h1>
        <p className="text-center pb-16 text-xl font-normal text-white ">
          Lets get started with daily nutritions analysis.
        </p>
        <form action="">
          <div className="flex gap-4">
            <Input placeholder="first name" />
            <Input placeholder="last name" />
          </div>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <div className="pt-10">
            <Button label="Login" />
          </div>
        </form>
        <div className="text-center text-white pt-20">
          <p>
            Already have an account?
            <span className="ps-1 font-bold hover:text-[#EFD372] underline underline-offset-4">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
