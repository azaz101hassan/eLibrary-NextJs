import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="h-10 m-7 mt-16">
      <div
        className="text-center"
        style={{
          marginTop: `1.3rem`,
          marginRight: `2.2rem`,
          paddingBottom: "0.3rem",
        }}
      >
        © {new Date().getFullYear()} - Made with ♥️ by
        {` `}
        <a
          href="https://linkedin.com/in/azaz101hassan/"
          target="_blank"
          className="text-blue-600"
        >
          Azaz{" "}
          {
            <AiFillLinkedin
              style={{
                display: "inline",
                marginBottom: "3px",
              }}
              size={"1.2rem"}
            />
          }
        </a>
      </div>
    </footer>
  );
};

export default Footer;
