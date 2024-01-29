import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navbarRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Thay đổi chủ đề ban ngày/ban đêm ở đây
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
    <div>
      <header>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="navbar fixed-top navbar-light bg-light">
        <button
          onClick={toggleDarkMode}
          className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
        >
          {isDarkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
        </button>
          <ul>
            <li>
              <a href="#aboutme">ABOUT ME</a>
            </li>
            <li>
              <a href="#education">EDUCATION</a>
            </li>
            <li>
              <a href="#experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="#profile">PROFILE</a>
            </li>

          </ul>
        </nav>
      </header>

      <div>

        <div className="image-container">
          <img className="anhnen" src={process.env.PUBLIC_URL + '/anhnen.jpg'} alt="Hình ảnh mô tả" />
          <div className="image-text">HELLO, WELCOME TO MY CV</div>
        </div>

        <div className="aboutme" id="aboutme">
          <p>ABOUT ME</p>
          <div className="small-line"></div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="text1">I am a software engineer with many years of experience in this field. I have participated and contributed to many diverse software projects, from mobile applications to complex computer systems.</p>
            <p className="text2"> My passion lies in creating efficient and flexible software solutions, while always pursuing the latest trends and technologies.With a creative spirit and firm commitment, I am always ready to come up with new ideas and actively contribute to improving the quality of products and services through software technology.</p>
            <div className="small-line" style={{ marginLeft: 'auto', width: '600px' }}></div>

            <div className="diachi1">
              <div className="row mt-3" >
                <div className="col-md-3 "  >
                  <p style={{ fontWeight: 'bold', marginLeft: '10px' }}>iPhone</p>
                  <p className='edit' style={{ paddingRight: '50px' }}>0938258773</p>
                </div>
                <div className="col-md-5" >
                  <p className='edit1' style={{ fontWeight: 'bold', marginLeft: '70px' }}>Email</p>
                  <p className='edit' style={{ marginRight: '500px' }}>quangtrungvv1@gmail.com</p>
                </div>
                <div className="col-md-3" >
                  <p style={{ fontWeight: 'bold', marginLeft: '15px' }}>Address</p>
                  <p style={{ marginLeft: '0px' }}>Califonia,USA</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <img className="anhnen1" src={process.env.PUBLIC_URL + '/anhnen1.jpg'} alt="Hình ảnh mô tả" />
          </div>
        </div>

        <div className='education' id="education">
          <div className="firstword" >
            <p style={{ paddingBottom: '50px' }}>EDUCATION</p>
          </div>

          <div className="container">
            <div className="row mt-3" style={{ textAlign: 'center' }}>
              <div className="col-md-4 mx-auto" style={{ marginRight: '40%', marginLeft: '40%' }}>
                <div style={{ padding: '20px' }}>
                  <p >2021-2022</p>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="col-md-4 mx-auto" style={{ marginRight: '40%', marginLeft: '40%' }}>
                <div style={{ padding: '20px' }}>
                  <p>2022-2023</p>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="col-md-4 mx-auto" style={{ marginRight: '40%', marginLeft: '40%' }}>
                <div style={{ padding: '20px' }}>
                  <p>2023-2024</p>
                  <p>Advanced</p>
                </div>
              </div>
            </div>
          </div>

          <div className="small-line" style={{ width: '580px', margin: '0 auto', position: 'relative' }}>
            <div class="circle" className="circle1"></div>
            <div class="circle" className="circle1"></div>
            <div class="circle" className="circle1"></div>

          </div>


          <div className="container">
            <div className="row mt-3" style={{ textAlign: 'center' }}>
              <div className="col-md-4 mx-auto" style={{ marginRight: '40%', marginLeft: '40%' }}>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontWeight: 'bold' }}>UNIVERSITY OF NORTH CALIFONIA</p>
                  <p>North Califonia,USA</p>
                  <p>The University of North California (UNC) stands as a beacon of academic excellence and
                    innovation in the heart of Northern California. Established with a vision to nurture global
                    leaders and forward-thinkers, UNC is renowned for its cutting-edge programs, distinguished
                    faculty, and vibrant campus life.</p>
                </div>
              </div>
              <div className="col-md-4 mx-auto" style={{ marginRight: '40%', marginLeft: '40%' }}>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontWeight: 'bold' }}>UNIVERSITY OF NORTH CALIFONIA</p>
                  <p>North Califonia,USA</p>
                  <p>The University of North California (UNC) stands as a beacon of academic excellence and
                    innovation in the heart of Northern California. Established with a vision to nurture global
                    leaders and forward-thinkers, UNC is renowned for its cutting-edge programs, distinguished
                    faculty, and vibrant campus life.</p>
                </div>
              </div>
              <div className="col-md-4 mx-auto" style={{ marginRight: '40%', marginLeft: '40%' }}>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontWeight: 'bold' }}>UNIVERSITY OF NORTH CALIFONIA</p>
                  <p>North Califonia,USA</p>
                  <p>The University of North California (UNC) stands as a beacon of academic excellence and
                    innovation in the heart of Northern California. Established with a vision to nurture global
                    leaders and forward-thinkers, UNC is renowned for its cutting-edge programs, distinguished
                    faculty, and vibrant campus life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experienceword" id="experience">
          <p>EXPERIENCE</p>
        </div>

        <div className="container">
          <div className="row" style={{ marginTop: '70px' }}>
            <div className="col-sm-4  " style={{ width: '47%', textAlign: 'right' }} >
              <p style={{ fontWeight: 'bold' }}>2021 - Beginner</p>
              <p>LEARNING</p>
              <div>
                <p style={{ paddingTop: '150px', fontWeight: 'bold' }}>HOPNOLI TECH LIMITED</p>
                <p>Califonia,USA</p>
                <p>UNC prides itself on staying  at the forefront of technological <br /> advancements and research breakthroughs.<br />
                  The university's commitment to innovation is <br /> reflected in its partnerships with industry</p>
                <p style={{ paddingTop: '30px', fontWeight: 'bold' }}>2023 - Advanced</p>
                <p>DESIGNER</p>

              </div>
            </div>

            <div className="col-sm-4   " style={{ width: '3%', borderRight: '1px solid #000', position: 'relative' }}>
              <div className="circle" style={{ top: '71%', right: '-15%', transform: 'translateX(-50%)', position: 'absolute', zIndex: '1', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#000' }}></div>
              <div className="circle" style={{ top: '0%', right: '-15%', transform: 'translateX(-50%)', position: 'absolute', zIndex: '1', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#000' }}></div>
              <div className="circle" style={{ top: '36%', right: '-15%', transform: 'translateX(-50%)', position: 'absolute', zIndex: '1', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#000' }}></div>
            </div>

            <div className="col-sm-4  " style={{ width: '50%', textAlign: 'center', paddingRight: '300px' }}>
              <p style={{ fontWeight: 'bold' }}>UNIVERSITY OF NORTH CALIFONIA</p>
              <p>Califonia,USA</p>
              <p>At UNC, students embark on a transformative educational journey, guided by a faculty of experts
                who are not only scholars in their fields but also passionate mentors. </p>
              <p style={{ paddingTop: '55px', fontWeight: 'bold' }}>2022 - Intermediate</p>
              <p> PROGRAMER</p>
              <p style={{ paddingTop: '151px', fontWeight: 'bold' }}>MICROSOFT EDGE</p>
              <p>Califonia,USA</p>
              <p>With a focus on holistic development, UNC not only shapes intellectual leaders but also instills values of
                social responsibility and global citizenship. Graduates from UNC are well-prepared to navigate the complexities
                of the modern world</p>
            </div>
          </div>
        </div>

        <div className='profilesword' style={{ boxShadow: '0px 1px 3px rgb(10, 10, 10, 10%)', paddingBottom: '50px' }} id="profile">
          <p >PROFILES</p>
        </div>
        <div class="row" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <div class="col-md-4" >
            <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '25px' }}>SKILLS</p>
            <ul class="list-group" className="footer">
              <li class="list-item">Communication skills IELTS 7.0</li>
              <li class="list-item">Office computer skills</li>
              <li class="list-item">Independent skills - teamwork.</li>
            </ul>
          </div>
          <div class="col-md-4" >
            <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '25px' }}>FAVORITE</p>
            <ul class="list-group" className="footer">
              <li class="list-item">Web programming</li>
              <li class="list-item">Game Design and Development</li>
              <li class="list-item">Learn New Programming Languages</li>
            </ul>
          </div>
          <div class="col-md-4" >
            <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '25px' }}>TARGET</p>
            <ul class="list-group" className="footer">
              <li class="list-item">IT Project Manager</li>
              <li class="list-item"> App Developer</li>
              <li class="list-item">Artificial Intelligence Specialist</li>
            </ul>
          </div>
        </div>
      </div >


    </div >


  );

}


export default App;
