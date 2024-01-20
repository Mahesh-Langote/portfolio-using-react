import React from "react";
function Project() {
    return(<>
     <div class="container-fluid py-5" id="projects">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase text-white" style={{WebkitTextStroke: `1px #dee2e6`}}>
                    Projects</h1>
                <h1 class="position-absolute text-uppercase text-primary">Academic Projects</h1>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h4 class="font-weight-bold">Car Showroom Website</h4>
                    <p>PHP, HTML, CSS, JavaScript, Microsoft SQL Server</p>
                    <p>The Car Showroom Website is an end-to-end web application designed to facilitate the
                        management of a car showroom. It provides a user-friendly interface for customers to
                        browse and search for cars, make bookings, and interact with the showroom staff.</p>
                </div>
                <div class="col-lg-6">
                    <h4 class="font-weight-bold">Hostel Management System</h4>
                    <p>Java, MySQL Based Standalone Application</p>
                    <p>The Hostel Management System is a comprehensive, end-to-end standalone application
                        developed using Java and MySQL. It serves as a database-focused solution for
                        efficiently managing student registration, employee registration, and room
                        management within a hostel environment.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h4 class="font-weight-bold">Hospital Management System</h4>
                    <p>ASP.NET, C#, CSS, HTML, JavaScript, SQL</p>
                    <p>The Hospital Management System is a web-based application developed using ASP.NET. It
                        serves as a comprehensive solution for scheduling new appointments, redirecting
                        appointments to doctors, and managing doctors within a hospital setting.</p>
                </div>
                <div class="col-lg-6">
                    <h4 class="font-weight-bold">MedService Hospital Information Site</h4>
                    <p>HTML, CSS, JavaScript</p>
                    <p>The MedService Hospital Information Site is a web-based application developed using
                        HTML, CSS, and JavaScript. It serves as an informative platform designed to provide
                        users with comprehensive information about the hospital and its various departments.
                    </p>
                </div>
            </div>
        </div>
    </div> 


    </>);
    
}
export default Project;
