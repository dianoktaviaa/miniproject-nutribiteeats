import Input from "../../components/input";
import Logo from "../../assets/login.jpg";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();

    const email = event.target.username.value;
    const password = event.target.password.value;

    const dummyUser = { username: "admin@email.com", password: "password123" };

    if (email === dummyUser.username && password === dummyUser.password) {
      navigate("/login");
    } else {
      console.log("Registrasi berhasil:", email, password);
      alert("Registrasi berhasil!");
    }
  };

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
        <form onSubmit={handleRegistration}>
          <Input placeholder="Email" type="email" name="username" />
          <Input placeholder="Password" type="password" name="password" />
          <div className="pt-6">
            <Button label="Sign Up" type="submit" />
          </div>
        </form>
        <div className="text-center text-white pt-20">
          <p>
            Already have an account?
            <Link to="/login">
              <span className="ps-1 font-bold hover:text-[#EFD372] hover:underline underline-offset-4">
                Log In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
