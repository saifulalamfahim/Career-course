import React from 'react';
import seo from '../../../images/seo.jpg';
import animation from '../../../images/animation.jpg';
import powerpoint from '../../../images/powerpoint.jpg';
import CourseDetail from '../CourseDetail/CourseDetail';


const courseData = [
    {
        name: 'SEO Expart Course',
        img: seo
    },
    {
        name: 'Animation Course',
        img: animation
    },
    {
        name: 'Powerpoint Course',
        img: powerpoint
    }
]



const Course = () => {
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            <h5 className="text-warning" >OUR ANOTHER COURCES</h5>
            <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                courseData.map(service => <CourseDetail service={service} key={service.name}></CourseDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Course;