import "../decors/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div>
          <img src="code.png" alt="icon" id="code" />
        </div>

        <div>
          <h2>Navamani R</h2>
          <h6> backend developer</h6>
        </div>
      </div>
    <div className="container-fluid footer">
  Made with {" "}
  <i id="heart" className="fa fa-heart"></i>{" "}
  and{" "}
  <i className="fa fa-coffee"></i>{" "}
  by a passionate developer.
</div>

      <div className="container-fluid footer">
        {" "}
        <pre> @2025 MyPortfolio. All Rights Reserved. </pre>
      </div>

      <div className="container-fluid socialMedia">
        <h3> Let,s Connect & Build Together</h3>
       <div className="items">
  <span>
    <a 
      href="https://www.instagram.com/navamaninr/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-instagram"></i>
    </a>
  </span>

  <span>
    <a 
      href="https://github.com/navamani-dev" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-github"></i>
    </a>
  </span>

  <span>
    <a 
      href="https://www.linkedin.com/in/nava-mani-49417021a" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-linkedin"></i>
    </a>
  </span>

  <span>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=navamani.developer@gmail.com&su=Hello&body=I%20want%20to%20connect"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fa fa-envelope"></i>
</a>
  </span>
</div>

      </div>
    </>
  );
}
