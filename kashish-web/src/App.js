import './App.css';
import React from 'react';

function Header() {
  return (
    <header>
      <div className="wrap-content">
        <div className="intro">
            <div>
                <h1>Hi, I'm Kashish. Computer Engineering student from the University of Toronto.</h1>
                <p>Currently exploring all things software with a focus on computer networks, artificial intelligence,
                    and data engineering. I have developed my skills through projects, labs, and extracurricular experience. 
                    This summer, I am interning at RBC as a Software Engineer for the Amplify Innovation Program!
                </p>
            </div>
            <div>
                <img src="profile_pic.png" alt="Headshot of Kashish Mistry" />
            </div>
        </div>
      </div>
    </header>
  );
}

function Education() {
  return (
    <section className="education">
      <div className="wrap-content">
          <h2>Education.</h2>
          <h3>Bachelor of Applied Science in Computer Engineering - University of Toronto</h3>
          <div className="bubble">
              <h4>Current Coursework:</h4>
              <p class="description">Applied Fundamentals of Deep Learning, Computer Networks I, 
                  Introduction to Databases, Engineering Economic Analysis & Entrepreneurship,
                  Terrestrial Energy Systems
              </p>
          </div>
          <div className="bubble">
              <h4>Completed Relevant Coursework:</h4>
              <p className="description">Operating Systems, Algorithms & Data Structures,
                  Probability & Applications, Programming Fundamentals in C & C++, 
                  Computer Organization, Linear Algebra, Differential/Integral/Vector Calculus, 
                  Engineering Strategies & Practice
              </p>
          </div>
      </div>
    </section>
  )
}

class Work extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

  work_exp = [{"title": "Software Engineer Intern - RBC Amplify", 
                "date": "May 2023 - August 2023",
                "description_one":"Building a system using large-language models to automate data extraction from client documents to improve processes across all lines of business at RBC",
                "description_two":"Developing a progressive user interface using React.js and Flask to improve employee experience",
                "description_three":"Managing project workflow using Agile methodologies (Kanban) and Confluence to meet deadlines and objectives",
                "logo": "rbc.png",
                "alt":"Royal Bank of Canada logo"}, 
              {"title":"Research Assistant - University of Toronto",
                "date":"May 2022 - August 2022",
                "description_one":"Awarded \"Best Podium Presentation – Transdisciplinary Engineering Education & Practice\" at the University of Toronto Undergraduate Engineering Research Day (UnERD) 2022",
                "description_two":"Research Paper will soon be published by American Society for Engineering Education (ASEE) and Abstract soon be to published in STEM Fellowship Journal",
                "description_three":"Analyzed data using frequency distribution, thematic analysis, and force analysis in MS Excel and SPSS to create annual report of over 200 student opinions and experiences to improve learning effectiveness at the university",
                "logo": "uoft.png",
                "alt":"University of Toronto logo"}]
	
  render() {
    return <section className="work">
      <div className="wrap-content">
        <h2>Work Experience.</h2>
        { this.work_exp.map((item, i) => {
          return <div className="bubble">
              <div>
                <h3>{item.title}</h3>
                <p class="date">{item.date}</p>
                <ul class="description">
                  <li>{item.description_one}</li>
                  <li>{item.description_two}</li>
                  <li>{item.description_three}</li>
                </ul>
              </div>
              <div>
                  <img src={item.logo} alt={item.alt} />
              </div>
            </div>
          })
        }
      </div>
    </section>
  }
}

class Extracurricular extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

  extra_exp = [{"title":"Software Developer", 
                "date":"Sept 2022 - April 2023",
                "description_one":"Debugged Fast API implementation associated with mobile app to receive data from wind turbine, resulting in data collection stability",
                "description_two":"Employed critical thinking techniques to isolate and repair software design defects in both front and back-end source codes, improving application stability",
                "logo":"utwind.png",
                "alt":"UTWind logo",
                "class":"utwind"}, 
              {"title":"Conference Workshops Director - Women in Science and Engineering UofT",
                "date":"August 2022 - April 2023",
                "description_one":"Organized 5 workshops for the Women in Science and Engineering National Conference (WISENC) by working with sponsor companies to cater to the interest of over 300 participants",
                "description_two":"Supporting the 50-person executive team in leading a full-day event with over 20 sponsor companies",
                "logo": "wise.png",
                "alt":"Women in Science and Engineering, University of Toronto logo",
                "class":"wise"}, 
              {"title":"Sustainability Researcher - UTWind",
                "date":"June 2021 - August 2022",
                "description_one":"Contributed to 1st place win at the International Small Wind Turbine Competition (ISTWC 2022) through sustainability research",
                "description_two":"Analyzed local challenges, such as lack of access to charging stations and water purifiers, in the Kesses Region in Kenya, to evaluate the most effective use for the electricity generated by the future wind turbine",
                "logo": "utwind.png",
                "alt":"UTWind logo",
                "class":"utwind"}, 
              {"title":"Ombudsperson - University of Toronto Engineering Society",
                "date":"June 2021 - June 2022",
                "description_one":"Designed a census for over 5000 engineering undergraduate student to compile a report of trends to improve services for students",
                "description_two":"Mediated internal complaints and recommending outcomes taking opinions of both parties into account",
                "logo": "engsoc.jpg",
                "alt":"Engineering Society, University of Toronto logo",
                "class":"engsoc"}]
	
  render() {
    return <section className="extracurricular">
      <div className="wrap-content">
        <h2>Extracurricular Experience.</h2>
        { this.extra_exp.map((item, i) => {
          return <div className="bubble">
              <div>
                <h3>{item.title}</h3>
                <p className="date">{item.date}</p>
                <ul className="description">
                  <li>{item.description_one}</li>
                  <li>{item.description_two}</li>
                </ul>
              </div>
              <div className={item.class}>
                  <img src={item.logo} alt={item.alt} />
              </div>
            </div>
          })
        }
      </div>
    </section>
  }
}

class Projects extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

  projects = [{"title": "Blood Cell Classification Using CNNs and RNNs", 
                "date": "January 2023- April 2023",
                "description_one":"Developed a customized parallel convolutional and recurrent neural network model using PyTorch to classify blood cell images with 92.5% accuracy on a 2,000 image dataset",
                "description_two":"Implemented advanced data augmentation techniques such as rotation and flipping, resulting in a more robust and accurate model that can generalize across different datasets",
                "pic": "aps360vid.png",
                "alt":"Thumbnail of project video",
                "class":"blood-cell"}, 
              {"title":"Software Course Projects",
                "date":"January 2022 - Present",
                "description_one":"Developed a text conferencing application using UNIX TCP sockets and implemented features such as private messaging and session invites (C)",
                "description_two":"Developed a cooperative, user-level thread package to create, destroy, and run threads concurrently on a processor (C)",
                "pic": "c-logo.png",
                "alt":"C and C++ Programmming logos",
                "class":"course-projects"}]
	
  render() {
    return <section className="projects">
      <div className="wrap-content">
        <h2>Projects.</h2>
        { this.projects.map((item, i) => {
          return <div className="bubble">
              <div>
                <h3>{item.title}</h3>
                <p class="date">{item.date}</p>
                <ul class="description">
                  <li>{item.description_one}</li>
                  <li>{item.description_two}</li>
                </ul>
              </div>
              <div className={item.class}>
                  <img src={item.pic} alt={item.alt} />
              </div>
            </div>
          })
        }
      </div>
    </section>
  }
}

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      <Header />
      <Education />
      <Work />
      <Extracurricular />
      <Projects />
    </div>
  );
}

export default App;
