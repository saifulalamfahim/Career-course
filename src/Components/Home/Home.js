import React from 'react';
import Blogs from './Blogs/Blogs';
import Course from './Course/Course';
import FeaturedService from './FeaturedService/FeaturedService';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Course></Course>
            <FeaturedService></FeaturedService>
            <Feedback></Feedback>
            <Blogs></Blogs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;