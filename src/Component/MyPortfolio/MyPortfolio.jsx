import React from 'react';
import Footer from '../Sheare/Footer/Footer';

const MyPortfolio = () => {
    return (
        <div className="">
          <div className="px-14 mt-20 pb-8">
          <div className="grid md:grid-cols-2 gap-7 items-center">
            <img src="https://i.ibb.co/tPxPVCQ/Abdullahblack-2.jpg" alt="simpol image" />
                <div>
                    <h1 className="text-5xl font-bold pb-3">Abdullah Talha</h1>
                    <p>I am a web developer. Generally, I feel comfortable working with HTML, CSS, SASS, JAVASCRIPT, BOOTSTRAP, TAILWIND, REACT, UI, UX. And for the backend, I use node js, mongo Db, ExpressJs. I did some projects. I am currently studying background computer science and technology. My vision for the future is to see myself as a great programmer in the future. My hard work will lead me to my goal, Insha Allah</p>
                </div>
              

            </div>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;