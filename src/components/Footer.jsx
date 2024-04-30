import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="2000">
      <footer className="footer p-10 bg-base-200 text-base-content z-10 ">
        <aside className="mx-auto">
          <img
            src={logo}
            alt="logo"
            className="md:w-[100px] md:h-[100px] w-16 h-16 mx-auto md:mx-0"
            data-tooltip-id="my-tooltip-inline"
            data-tooltip-content="JR-Travelo"
          />
          <Tooltip
            id="my-tooltip-inline"
            style={{ backgroundColor: "#1ec6b6" }}
          />
          <p>
            JR TRAVELO ORG.
            <br />
            Providing reliable Services since 2000
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a
            target="_blank"
            href="https://propertyinspect.com/blog/what-is-multifamily-housing-and-benefits/"
            className="link link-hover"
          >
            Countries Tourist Spots
          </a>
          <a
            target="_blank"
            href="https://www.booking.com/hotel/th/beach-bungalow-at-lanta-resort.html"
            className="link link-hover"
          >
            Add Tourist Spots
          </a>
          <a
            target="_blank"
            href="https://zums.edu.bd/student-housing/"
            className="link link-hover"
          >
            User Added List
          </a>
          <a
            target="_blank"
            href="https://www.vacasa.com/"
            className="link link-hover"
          >
            See the Details Every Spots
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact-us" className="link link-hover">
            Contact
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/register" className="link link-hover">
            Register
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex justify-center gap-3">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="link link-hover"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="facebook"
              data-tooltip-variant="info"
            >
              <FaFacebook size={30} color="#0866ff" />
            </a>
            <Tooltip id="my-tooltip" />
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="link link-hover"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Instagram"
              data-tooltip-variant="info"
            >
              <BsInstagram size={30} />
            </a>
            <Tooltip id="my-tooltip" />
            <a
              target="_blank"
              href="https://twitter.com/home"
              className="link link-hover"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Twitter"
              data-tooltip-variant="info"
            >
              <RiTwitterXLine size={30} />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
        </nav>
      </footer>
      <div className="py-2 bg-base-200">
        <aside>
          <p className="text-center">
            Copyright © 2024 - All right reserved by JR-TRAVELO ORG Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
