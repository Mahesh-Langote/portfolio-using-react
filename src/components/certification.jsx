import React from "react";

function Certification(params) {
    return(<>
    
    <div class="container-fluid pt-5 pb-3" id="certification">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase text-white" style={{WebkitTextStroke: `1px #dee2e6`}}>badge
                </h1>
                <h1 class="position-absolute text-uppercase text-primary">My Certifications</h1>
            </div>
            <div class="row justify-content-center"> 
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="position-relative overflow-hidden mb-2 title" style={{display: `flex`}}>
                        <img class="img-fluid rounded w-100px" src="img/java.svg" alt="Certification 1" />
                        <p class="text-center mt-3">Java Programming Certification</p>
                    </div>

                    <p class="text-center">This certification, obtained from Great Learning, covers Java programming
                        fundamentals and advanced concepts. It includes topics such as object-oriented programming, data
                        structures, and algorithms in Java. The certification demonstrates proficiency in Java
                        development.</p>
                    <p class="text-center">Certificate Issued by Google on Apr 2, 2013</p>
                    <p class="text-center"><a href="img/certficate/java.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>
 
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded " src="img/aws.svg" width="60px" alt="Certification 2" />
                        <p class="text-center mt-3"> Amazon Comprehend</p>
                    </div>

                    <p class="text-center"> Completed 'Getting Started with Amazon Comprehend' course by AWS. Learned
                        cloud essentials, particularly virtual machine servers. Acquired skills in deploying and
                        managing cloud-based virtual servers, a foundation in modern cloud computing.</p>
                    <p class="text-center">Certificate Issued by AWS Training and Certification</p>
                    <p class="text-center"><a href="img/certficate/cloudfront.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>
 
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/python.svg" alt="Certification 3" />
                        <p class="text-center mt-3">Python Programming Certification</p>
                    </div>

                    <p class="text-center">This certification, completed on Coursera, focuses on Python programming and
                        data science. It covers Python fundamentals, data manipulation, and data analysis using Python
                        libraries like NumPy and pandas. The certification showcases proficiency in Python programming
                        and data analysis.</p>
                    <p class="text-center">Certificate Issued by Coursera</p>
                    <p class="text-center"><a href="img/certficate/python.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>
 
                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/project.svg" alt="Certification 4" />
                        <p class="text-center mt-3">Google Project Management Professional </p>
                    </div>

                    <p class="text-center">Successfully completed the Google Project Management Professional
                        Certificate, mastering project initiation, planning, execution, Agile methods, and real-world
                        application. Prepared for introductory-level roles, proficient in traditional and agile project
                        management.</p>
                    <p class="text-center">Certificate Issued by Coursera</p>
                    <p class="text-center"><a href="img/certficate/project.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>
 
                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/aws.svg" alt="Certification 5" />
                        <p class="text-center mt-3">Create a Virtual Private Cloud (VPC) Using AWS</p>
                    </div>

                    <p class="text-center">Successfully completed the 'Create a Virtual Private Cloud (VPC) Using AWS'
                        project on Coursera. Developed practical skills in creating AWS Virtual Private Clouds,
                        authorized by Coursera Project Network</p>
                    <p class="text-center">Certificate Issued by AWS Training and Certification</p>
                    <p class="text-center"><a href="img/certficate/create a vpc.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/github.svg" alt="Certification 5" />
                        <p class="text-center mt-3">Introduction to Git and GitHub</p>
                    </div>

                    <p class="text-center">Mastered Git and GitHub fundamentals through the 'Introduction to Git and
                        GitHub' course on Coursera, authorized by Google. Ready to efficiently manage version control
                        and collaborate on projects.</p>
                    <p class="text-center">Certificate Issued by Coursera</p>
                    <p class="text-center"><a href="img/certficate/git.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>


                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/aws.svg" alt="Certification 5" />
                        <p class="text-center mt-3">AWS Cloudfront</p>
                    </div>

                    <p class="text-center">Proficiently implemented AWS Cloudfront to serve content from multiple S3
                        buckets, as demonstrated in the 'AWS Cloudfront: Serve content from multiple S3 buckets' project
                        on Coursera Project Network</p>
                    <p class="text-center">Certificate Issued by AWS Training and Certification</p>
                    <p class="text-center"><a href="img/certficate/cloudfront.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/aws.svg" alt="Certification 5" />
                        <p class="text-center mt-3">AWS Key Management Service</p>
                    </div>

                    <p class="text-center">Proficiently implemented data encryption using AWS Key Management Service
                        (KMS) as demonstrated in the 'Data Encryption using AWS KMS From UST' project on Coursera
                        Project Network</p>
                    <p class="text-center">Certificate Issued by AWS Training and Certification</p>
                    <p class="text-center"><a href="img/certficate/KMS.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/aws.svg" alt="Certification 5" />
                        <p class="text-center mt-3">Access an EC2 instance shell from the AWS console</p>
                    </div>

                    <p class="text-center">Proficiently accessed an EC2 instance shell from the AWS console as
                        demonstrated in the 'Access an EC2 instance shell from the AWS console' project on Coursera
                        Project Network</p>
                    <p class="text-center">Certificate Issued AWS Training and Certification</p>
                    <p class="text-center"><a href="img/certficate/ec2.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>


                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/r.svg" alt="Certification 5" />
                        <p class="text-center mt-3">Data Analysis with R Programming</p>
                    </div>

                    <p class="text-center">Successfully completed the 'Data Analysis with R Programming' course,
                        accredited by Google on Coursera. This comprehensive training significantly advanced my
                        expertise in data analysis using R</p>
                    <p class="text-center">Certificate Issued by Coursera</p>
                    <p class="text-center"><a href="img/certficate/R.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>


                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/aws.svg" alt="Certification 5" />
                        <p class="text-center mt-3">Access an EC2 instance shell from the AWS console</p>
                    </div>

                    <p class="text-center">Successfully completed the 'Build a Business Architecture using AWS' project
                        on Coursera Project Network. Enhanced AWS skills and understanding of business architecture
                        principles. Certified by Ann Reshma, AWS Certified Solution Architect. </p>
                    <p class="text-center">Certificate Issued by AWS Training and Certification</p>
                    <p class="text-center"><a href="img/certficate/ec2.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/aws.svg" alt="Certification 5" />
                        <p class="text-center mt-3">Introduction to CSS</p>
                    </div>

                    <p class="text-center">I successfully completed the "Introduction to CSS" course provided by Great
                        Learning Academy. This course greatly improved my knowledge of Cascading Style Sheets (CSS) and
                        its application in web design and development. </p>
                    <p class="text-center">Certificate Issued by GreatLearning</p>
                    <p class="text-center"><a href="img/certficate/CSS.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4"> 
                    <div class="position-relative overflow-hidden mb-2 title">
                        <img class="img-fluid rounded w-100px" src="img/aws.svg" alt="Certification 5"/>
                        <p class="text-center mt-3">Certificate of Appreciation</p>
                    </div>

                    <p class="text-center">I was honored to receive a Certificate of Appreciation from Devtown,
                        expressing gratitude for my continuous support in fostering community growth and development.
                    </p>
                    <p class="text-center">Certificate Issued by Devtown</p>
                    <p class="text-center"><a href="img/certficate/Devyown.jpg" class="popup-link">View
                            Certificate</a></p>
                </div>





 
            </div>
        </div>
    </div>
    

    </>);
}
export default Certification;