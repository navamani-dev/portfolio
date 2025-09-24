export default function Projects(){


    return <>
        <h2  id="pro"> My Projects </h2>
        <p > Here are some of my Projects</p>
   

   <div className="pro d-flex justify-content-center gap-4">
    <div className="bg-light pro1">
            <img id="project" src="student.png" alt="image" />
            <h4>Student management website</h4>
            <p>I built a full-stack Student Management System that allows users to add, update, view, and deletestudent records. The app features a clean, user-friendly interface and handles backend operations usingNode.js, Express, and MySQL, with proper input validations.</p>
   <br/>
   <a className="btn bg-primary" target="_blank"  href="https://nodejs-mysql-crud-q6e0.onrender.com/"> <span><i className="fas fa-link"></i></span>  Live Demo</a>
   <a className="btn bg-light border" target="_blank"  href="https://github.com/navamani-dev"><span><i className="fa-brands fa-github"></i></span> View Code</a>
    </div>
 <div className="bg-light pro1">
            <img id="project" src="portfolio.png" alt="image" />
            <h4>Portfolio website</h4>
            <p>
                I I customized a professional portfolio template sourced online and integrated it with backendfeatures. The "Contact Me" form uses a Node.js backend with email functionality, allowing messagesto be sent directly to my inbox. This project reflects both my design adaptability and backendintegration skills.
            </p>
               <a className="btn bg-primary" target="_blank"  href="https://navamani-portfolio.onrender.com/"> <span><i className="fas fa-link"></i></span>  Live Demo</a>
   <a className="btn bg-light border" target="_blank"  href="https://github.com/navamani-dev"><span><i className="fa-brands fa-github"></i></span> View Code</a>
   
    </div>  
     <div className="bg-light pro1">
            <img id="project" src="other.png" alt="image" />
            <h4>Other Projects</h4>
            <p>
                I've worked on several mini projects to sharpen my development skills. Each project helpedme learn something new and improve my practical coding knowledge. You can explore my work on GitHub
            </p>
            <br/><br/>
               <a className="btn bg-primary" target="_blank"  href="#"> <span><i className="fas fa-link"></i></span>  Live Demo</a>
   <a className="btn bg-light border" target="_blank" href="https://github.com/navamani-dev"><span><i className="fa-brands fa-github"></i></span> View Code</a>
    </div>  
     </div>
    </>
}