import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Teaching of Personal Diseases" , link: "/personal-treatment"},
        {name: "Teach Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const ourServices = [
        {name: "Emergency Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Teaching of Personal Diseases" , link: "/personal-treatment"},
        {name: "Teaching Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Teaching of Personal Diseases" , link: "/personal-treatment"},
        {name: "Teach Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2}  menuTitle="Services" menuItems={ services}/>
                    <FooterCol key={3} menuTitle="Our Services" menuItems={ourServices}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-warning">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;