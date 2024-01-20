import React from "react";

function Footer(params) {
    return(<>
        <div class="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="container text-center py-5">
            <div class="d-flex justify-content-center mb-4">
                 
                <a class="btn btn-light btn-social mr-2"
                href="https://www.linkedin.com/in/mahesh-langote-64702922a"><i
                    class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-light btn-social mr-2" href="https://github.com/mahesh-Langote"><i
                    class="fab fa-github"></i></a>
                <a class="btn btn-light btn-social mr-2" href="mailto:maheshlangote777@gmail.com">
                    <i class="fas fa-envelope"></i>
                </a>

                <a class="btn btn-light btn-social" href="tel:+917397970934">
                    <i class="fas fa-phone"></i>
                </a>
            </div>

            <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#">Mahesh Langote</a>
            </p>
        </div>
    </div>
    <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>
 
<a href="#" class="btn btn-outline-dark px-0 back-to-top"><i class="fa fa-angle-double-up"></i></a>

    </>);
}

export default Footer;