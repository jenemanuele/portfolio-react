// import "./About.css";

function About() {

  return (
    <section className="my-5" >
       <div id="about-me" className="about-me">
           
            <h1 className="page-header">About Me</h1>
                <div className="center">
                  <img src="./images/Jen-E.jpg" alt="About me photo" className="photo"/>

                      <p>
                          My love of acrylic painting led me to software development and coding-- I felt a call to build beautiful function in action. Please view my artwork via <a href="https://www.instagram.com/jen.emanuele.art/">Instagram</a>.
                      My goal is to build beautiful yet highly functional projects, tools and websites that are user friendly and aesthetically pleasing.  I am also an RN with many years of experience both at the bedside and behind the scenes. 
                          Outside of painting and coding, I love to spend my free time with my twins, reading, running and doing yoga.                    
                      </p>
                </div>
        </div>
    </section>
  )
}

export default About