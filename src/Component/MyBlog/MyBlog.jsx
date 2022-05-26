import React from "react";
import Footer from "../Sheare/Footer/Footer";

const MyBlog = () => {
  return (
    <div>
      <div className='px-20'>
   
          <p>Explore some Question and Answer</p>
      
                   
                  <h1 className='text-2xl mt-7'>  How does prototypical inheritance work?</h1>
               
                 <p> After the ES6 updates JavaScript allowed for prototypal
                  inheritance, meaning that objects and methods can be shared.
                  JavaScript is a prototype-based Object Oriented programming
                  language. We use a JavaScript prototype to add new properties
                  and methods to an existing object constructor.Prototypical
                  inheritance clearly has a lot of benefits for JavaScript
                  programmings. When we read a property from object, and it's
                  missing, JavaScript automatically takes it from the prototype.
                  In programming, this is called prototypal inheritance.</p>
         
                  <h1 className='text-2xl mt-7'>  What is a unit test? Why should write unit tests?</h1>
         
                <p>  Unit testing is an important step in the development process,
                  unit testing is a type of testing where individual units or
                  components are tested. A unit may be an individual function,
                  method, procedure, module, or object. Unit testing is
                  important because developers sometimes try saving time doing
                  minimal unit testing, if proper unit testing is done in early
                  development, then it saves time and money in the end. Unit
                  tests help to fix bugs early in the development cycle and save
                  costs. It helps the developers to understand the testing code
                  base and enables them to make changes quickly.</p>
           
                  <h1 className='text-2xl mt-7'>  How will you improve the performance of a React Application?</h1>
            
                <p>  There are some ways where you can improve the performance of a
                  React application. Using Immutable Data Structures, which
                  comes from the functional programming world, can be applied to
                  the design of front-end apps. It can have many benefits.{" "}
                  <br /> Use the Production Build, By default, React includes
                  many helpful warnings. These warnings are very useful in
                  development. However, they make React larger and slower so you
                  should make sure to use the production version when you deploy
                  the app. etc.</p>
            
               <h1 className="text-2xl mt-7">  What are the different ways to manage a state in a React
                    application?</h1>
        
                 <p>
                 There are four main types of state you need to manage in your
                  React apps : <br />
                  Local state, Local state is data we manage in one or another
                  component. <br />
                  Global state, Global state is data we manage across multiple
                  components. <br />
                  Server state, Data that comes from an external server that
                  must be integrated with our UI state. <br />
                  URL state, Data that exists on our URLs, including the
                  pathname and query parameters.
                 </p>
            
                  <h1 className="text-2xl mt-7">  You have an array of products. Each product has a name,
                    price, description, etc. How will you implement a search to
                    find products by name?</h1>{" "}
           
       <p>
       Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
       </p>
        
                 <h1 className='text-2xl mt-7'>Why you do not set the state directly in React. For example,
                    if you have const [products, setProducts] = useState([]).
                    Why you do not set products = [...] instead, you use the
                    setProducts.</h1>
              
                <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
                </div>
           
          

      <Footer></Footer>
    </div>
  );
};

export default MyBlog;
