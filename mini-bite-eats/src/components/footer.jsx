import Logo from "../assets/logo.png";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function Footer() {
  let iconStyles = { fontSize: "24px" };
  return (
    <div className="grid grid-cols-2  px-36 py-20 bg-[#F1EFF0] gap-36">
      <div className="text-right">
        <h1 className="font-extrabold text-2xl pb-6">Contact Us</h1>
        <div className="pb-4">
          <h2 className="font-bold text-lg">Email</h2>
          <p>user@email.com</p>
        </div>
        <div className="pb-4">
          <h2 className="font-bold text-lg">Phone</h2>
          <p>085678902345</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Address</h2>
          <p>Jl. Kenjeran No. 361, Tambaksari, Surabaya.</p>
        </div>
      </div>
      <div className="self-center ps-16 ">
        <div className="w-6 flex gap-2 pb-4">
          <img src={Logo} alt="NutriBiteEats Logo" />
          <h1 className="self-center font-bold text-2xl">NutriBiteEats</h1>
        </div>
        <h2>Simply dummy text of the printing and typesetting industry.</h2>
        <p>Lorem Ipsum simply dummy text of the printing.</p>
        <div className="flex gap-6 pt-4">
          <div>
            <IoLogoInstagram style={iconStyles} />
          </div>
          <div>
            <IoLogoFacebook style={iconStyles} />
          </div>
          <div>
            <IoLogoTwitter style={iconStyles} />
          </div>
          <div>
            <IoLogoWhatsapp style={iconStyles} />
          </div>
        </div>
      </div>
    </div>
  );
}
