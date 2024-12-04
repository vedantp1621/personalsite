import logo from "./Assets/logo.jpeg";

function Footer() {
  return (
    <footer class="p-4 md:p-8 lg:p-10 bg-[#36454F]">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-white"
        >
          <img className="block h-16 w-auto" src={logo} alt="Workflow" />
        </a>
        <p class="my-6 text-lg text-[#d4af37]">
          Thank you for taking time to view my page. Here are my contacts!
        </p>
        <div class="flex flex-wrap justify-center items-center mb-6 text-white">
          <p1>
            <a
              href="https://github.com/vedantp1621"
              class="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </p1>
          <li>
            <a
              href="https://www.linkedin.com/in/vedant-p-patel/"
              class="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>

          <p1 class="mr-4 md:mr-6 ">vppatel3@wisc.edu</p1>
          <p1 class="mr-4 md:mr-6 ">(815)-416-5778</p1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
