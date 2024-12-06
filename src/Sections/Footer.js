import logo from "./Assets/logo.jpeg";

function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-[#36454F]">
      <div className="mx-auto max-w-screen-xl">
        <p className="flex justify-center items-center text-2xl font-semibold text-white">
          <img
            className="h-16 w-auto"
            src={logo}
            alt="Workflow"
          />
        </p>
        <p className="my-6 text-lg text-[#d4af37] text-center">
          Thank you for taking time to view my page. Here are my contacts!
        </p>
        <div className="flex flex-wrap justify-center items-center mb-6 text-white">
          <p>
            <a
              href="https://github.com/vedantp621"
              className="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </p>
          <li>
            <a
              href="https://www.linkedin.com/in/vedant-p-patel/"
              className="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>

          <p className="mr-4 md:mr-6 ">vppatel3@wisc.edu</p>
          <p className="mr-4 md:mr-6 ">(815)-416-5778</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
