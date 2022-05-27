import React from 'react';
import Footer from '../Sheare/Footer/Footer';

const MyPortfolio = () => {
    return (
        <div className="">
          <div className="px-14 mt-20 pb-8">
          <div className="grid md:grid-cols-2 gap-7 items-center">
            <img className="w-96" src="https://i.ibb.co/tPxPVCQ/Abdullahblack-2.jpg" alt="simpol image" />
                <div>
                    <h1 className="text-5xl font-bold pb-3">Abdullah Talha</h1>
                    <p>I am a web developer. Generally, I feel comfortable working with HTML, CSS, SASS, JAVASCRIPT, BOOTSTRAP, TAILWIND, REACT, UI, UX. And for the backend, I use node js, mongo Db, ExpressJs. I did some projects. I am currently studying background computer science and technology. My vision for the future is to see myself as a great programmer in the future. My hard work will lead me to my goal, Insha Allah</p>
                </div>
              
      <div className="mx-auto text-center block">
<div className="border-b-2 grid md:grid-cols-3 sm:grid-cols-3 gap-7 mt-10 mb-10">
  <a target="blank" href="https://dev.to/developerabdullahme">EXPLORE MY BLOGS
</a>

<a target="blank" href="https://github.com/developerabdullah-me">EXPLORE MY Github
</a>
</div>
<div>
  <div className="flex gap-11 justify-center"> 
    <div className="">
      <img src="https://i.ibb.co/rF8DVTP/Screenshot-180.png" alt="" />
      <a target="blank" href="https://bookws-warehouse.netlify.app/">EXPLORE MY Project
</a>
    </div>
    <div className=' '>
      <img src="https://i.ibb.co/x5zjVM5/Screenshot-181.png" alt="" />
      <a target="blank" href="https://developer-me.netlify.app/home">EXPLORE MY Project
</a>
    </div>
  </div>
</div>
      </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;