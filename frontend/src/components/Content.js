export default function Content() {
  return (
    <>
      <div className="container-fluid content">
        <div>
          <img src="Navamani.jpg" id="profile" />
        </div>

        <div className="">
          <h2>Hello, I am Navamani.R</h2>
          <p>
            {" "}
            MERN Stack Developer{" "}
            <span>
              <i className="fa fa-coffee"></i>
            </span>
          </p>

          <a
            href="/Navamani's Resume.pdf"
            className="btn btn-primary m-1"
            download="Navamani's Resume.pdf"
          >
            <span>
              <i className="fa fa-file-text"></i>
            </span>{" "}
            My Resume{" "}
          </a>

          <a href="#form" id="#form" className="btn btn-danger m-1">
            <span>
              <i className="fa fa-handshake"></i>
            </span>{" "}
            Let's Connect{" "}
          </a>
        </div>
      </div>
    </>
  );
}
