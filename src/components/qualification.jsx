import React from "react";


function Qualification() {
    return (<>
     
    <div class="container-fluid py-5" id="qualification">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase text-white" style={{WebkitTextStroke: `1px #dee2e6;`}}>JOURNEY</h1>
                <h1 class="position-absolute text-uppercase text-primary">Education</h1>
            </div> 
            <div class="row align-items-center" style={{display: `flex`}}>
                <div class="col-lg-6">
                    <h3 class="mb-4">My Education</h3>
                    <div class="border-left border-primary pt-2 pl-4 ml-2">
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                style={{top: `2px`, left: `-32px`}}></i>
                            <h5 class="font-weight-bold mb-1">Master In Computer Application</h5>
                            <p class="mb-2"><strong>Pune University</strong> | <small>2022 - 2024</small></p>
                            <p>Currently pursuing my MCA degree at Indira College of Engineering and Management,
                                Pune,
                                with a strong focus on advanced computer science concepts and application
                                development.
                            </p>
                        </div>
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                 style={{top: `2px`, left: `-32px`}}></i>
                            <h5 class="font-weight-bold mb-1">Bachelors In Computer Application</h5>
                            <p class="mb-2"><strong>Kolhapur University</strong> | <small>2019 - 2022</small>
                            </p>
                            <p>Graduated from Chintamanrao Institute of Management, Sangli, in 2022 with a solid
                                academic record and a deep understanding of computer applications and
                                programming.</p>
                        </div>
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                style={{top: `2px`, left: `-32px`}}></i>
                            <h5 class="font-weight-bold mb-1">Higher Secondary Education</h5>
                            <p class="mb-2"><strong>Maharashtra State Board</strong> | <small>2017 -
                                    2019</small></p>
                            <p>Completed my Higher Secondary Education in the Science stream from the
                                Maharashtra State
                                Board, with a focus on Physics and Statistics, which further fueled my interest
                                in
                                analytical thinking and problem-solving.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img class="dev" src="http://127.0.0.1:5500//img/education.png" alt="Education" srcset="" width="100%" />
                    
                </div>
            </div>
        </div>
    </div> 


    
    </>);
    
}

export default Qualification;