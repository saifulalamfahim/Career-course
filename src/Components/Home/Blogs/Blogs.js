import React from 'react';
import wilson from '../../../images/person1.jpg';
import annana from '../../../images/person5.jpg';
import janathan from '../../../images/person6.jpg';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'


const blogData = [
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'brekran',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Sinthia',
        authorImg : annana,
        date : '23 April 2019'
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'mariyas',
        authorImg : janathan,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 style={{color: '#F1A95F'}} className="text-warning text-uppercase">our blog</h5>
                    <h1><b>From Our Blog News</b></h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}></BlogPost>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;