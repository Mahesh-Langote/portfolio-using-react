import React from "react";
function Technicals() {
    return (<>
        <div class="container-fluid py-5" id="language">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white" style={{ WebkitTextStroke: `1px #dee2e6;` }}>TECHNICAL
                    </h1>
                    <h1 class="position-absolute text-uppercase text-primary">Technical Proficiency</h1>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <h4 class="font-weight-bold">Programming Languages</h4>
                        <p>Java, DSA, C, Python</p>
                        <h4 class="font-weight-bold">Web Technologies</h4>
                        <p>HTML, CSS, JavaScript, ASP.NET, C#</p>
                    </div>
                    <div class="col-lg-6">
                        <h4 class="font-weight-bold">Databases</h4>
                        <p>SQL, MySQL, DBMS Using MS Access</p>
                        <h4 class="font-weight-bold">Tools</h4>
                        <p>MS Office, MS Visual Studio, Git, GitHub</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid py-5" id="skill">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">HTML</h6>
                                <h6 class="font-weight-bold">99%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="99" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">CSS</h6>
                                <h6 class="font-weight-bold">85%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: `85%` }}
                                aria-valuenow="85" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">Android</h6>
                                <h6 class="font-weight-bold">80%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" style={{ width: `80%` }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    80%
                                </div>
                            </div>
                        </div>


                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">JavaScript</h6>
                                <h6 class="font-weight-bold">70%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">MySQL</h6>
                                <h6 class="font-weight-bold">85%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">Python</h6>
                                <h6 class="font-weight-bold">60%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">PHP</h6>
                                <h6 class="font-weight-bold">70%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">Java</h6>
                                <h6 class="font-weight-bold">80%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">Cloud Computing</h6>
                                <h6 class="font-weight-bold">50%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">SQL</h6>
                                <h6 class="font-weight-bold">80%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Technicals;