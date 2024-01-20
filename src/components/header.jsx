import React from 'react';

function Header() {
    return(<>
    <div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: '100vh' }}  >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    <img class="img-fluid w-75 rounded-circle shadow-sm" src="http://127.0.0.1:5500/img/profile.JPG" alt="" />


                </div>


                <div class="col-lg-7 text-center text-lg-left">
                    <h3 class="text-white font-weight-normal mb-3">I'm</h3>
                    <h1 class="display-3 text-uppercase text-primary mb-2"  style={{ WebkitTextStroke: '2px #ffffff' }}
>
                        Mahesh Langote</h1>
                    <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
                    <div class="typed-text d-none"> Software Developer, cloud practitioner </div>
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="resume/Mahesh Maruti Langote Resume.pdf" target="_blank" class="btn btn-outline-light mr-5">Download CV</a>

                        <a class="btn btn-light btn-social mr-2"
                            href="https://www.linkedin.com/in/mahesh-langote-64702922a" target="_blank"><i
                                class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-light btn-social" target="_blank" href="https://github.com/mahesh-Langote"><i
                                class="fab fa-github"></i></a>

                    </div>

                </div>
            </div>
        </div>
    </div>
    
    
    </>);

    
}
export default Header;