const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <aside>
        <img
          className="w-24 h-24 rounded-full"
          src="https://i.ibb.co/mt4SvMk/Black-Pink-Bold-Lifestyle-Blogger-Personal-Name-Logo.png"
          alt=""
        />
        <p>
          Swipe Career Ltd.
          <br />
          Providing reliable tech since 1998
        </p>
        <p className="text-white font-semibold text-lg mt-3">
          Email:swipecareer@gmail.com
        </p>
        <p className="text-white font-semibold text-lg">
          Contact No:000788961548552
        </p>
        <p className="text-white mt-3 text-lg">
          Copyright © 2024 - All right reserved
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
