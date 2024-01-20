import  React from "react";
function About() {
 return (<>
  
    <div className="container-fluid py-5" id="about">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: `1px #dee2e6`}}>About</h1>
                <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0 ">
                    <img className="img-fluid rounded w-100 dev" src="http://127.0.0.1:5500/img/developer.png" alt="" />
                </div>

                <div className="col-lg-7">
                    <h3 className="mb-4"> Software Developer</h3>
                    <p>A highly motivated and ambitious professional with a strong foundation in web development and
                        database management. Demonstrated experience in developing web-based applications with a focus
                        on database integration and a keen interest in cloud computing. Possesses a solid understanding
                        of database concepts and technologies, complemented by knowledge of cloud computing principles.
                        As a fresh graduate, eager to apply skills in web development, database management, and cloud
                        computing to contribute effectively to an organization's success.</p>
                    <div className="row mb-3">
                        <div className="col-sm-6 py-2">
                            <h6>Name: <span className="text-secondary">Mahesh Maruti Langote</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Birthday: <span className="text-secondary">02 Oct 2001</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Degree: <span className="text-secondary">Master Of Computer applications</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Experience: <span className="text-secondary">Virtual Intern</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Phone: <span className="text-secondary">+917397970934</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Email: <span className="text-secondary">maheshlangote777@gmail.com</span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Address: <span className="text-secondary"> Pune </span></h6>
                        </div>
                        <div className="col-sm-6 py-2">
                            <h6>Freelance: <span className="text-secondary">Available</span></h6>
                        </div>
                    </div>
                    <a href="#" className="btn btn-outline-primary mr-4">Hire Me</a>
                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div> 



 
 </> )
}
export default About;
 