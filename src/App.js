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
                    and data engineering. I am currently interning at Environment and Climate Change Canada as a 
                    Software Developer Intern.
                </p>
                <div className='contact'>
                  <div className='bubble'>
                      <a href='mailto: kashish.mistry@mail.utoronto.ca'>
                        <img className="contact-logo" src="email.png" alt='Email icon'></img>
                      </a>
                  </div>
                  <div className="bubble">
                      <a href='tel: 647-629-6876'>
                        <img className="contact-logo" src="phone.png" alt='Phone icon'></img> 
                      </a>
                  </div>
                  <div className='bubble'>
                    <a href="https://www.linkedin.com/in/kashish-mistry/">
                      <img className="contact-logo" src="linkedin.png" alt='Github logo'></img>
                    </a>
                  </div>
                  <div className='bubble'>
                    <a href="https://github.com/KashishMistry">
                    <img className="contact-logo" src="githublogo.png" alt='Github logo'></img>
                    </a>
                  </div>
                </div>
            </div>
            <div>
                <img className="profile-img" src="profile_pic.png" alt="Headshot of Kashish Mistry" />
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
          <h3>Bachelor of Applied Science in Computer Engineering, Minor in Artificial Intelligence Engineering <br></br> <i>University of Toronto</i></h3>
          <div className="bubble education">
              <h4>Completed Relevant Coursework</h4>
              <p className="description">Applied Fundamentals of Deep Learning, Computer Networks I, 
                  Introduction to Databases, Engineering Economic Analysis & Entrepreneurship, 
                  Operating Systems, Algorithms & Data Structures,
                  Probability & Applications, Programming Fundamentals in C & C++, 
                  Computer Organization, Linear Algebra, Differential/Integral/Vector Calculus, 
                  Engineering Strategies & Practice
              </p>
          </div>
          <div className="bubble education">
              <h4>Achievements</h4>
              <p class="description">
                Ontario Professional Engineers Foundation for Education Undergraduate Scholarship, Colantonio Family Leadership Award, Dean's Honours List (Winter 2023, Fall 2020)
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

  work_exp = [{"title": "Software Developer Intern",
                "company": "Environment and Climate Change Canada", 
                "date": "September 2023 - Present",
                "description_one":"Developing a reusable and accessible open-source mapping platform using Vue.js, TypeScript, and ESRI Mapping API to present environmental data using interactive maps",
                "description_two":"Developing a comprehensive inventory management tool from inception to full deployment using Microsoft Power Apps, optimizing inventory tracking and management processes for enhanced efficiency",
                "description_three":"Leveraging Git for streamlined code collaboration and version control within cross-functional teams",
                "logo": "eccc.png",
                "alt":"Environment and Climate Change logo"},
              {"title": "Research Student",
                "company": "Youth Climate Lab", 
                "date": "August 2023 - Present",
                "description_one":"Conducting an independent research project to investigate the implications of Artificial Intelligence (AI) on climate change, with a focus on ethical considerations, algorithm fairness, and carbon cost",
                "description_two":"Will be publishing article on the ethical considerations of climate change artificial intelligence in Starfish Journal",
                "description_three":"Developing an \"Earth and AI\" handbook to provide insights to the general public about the how AI will impact climate change",
                "logo": "ycl.png",
                "alt":"Youth Climate Lab logo"},
              {"title": "Developer", 
                "company": "RBC Amplify",
                "date": "May 2023 - August 2023",
                "description_one":"Built an end-to-end system based on large-language models to automate data extraction from scanned documents with no predefined structured for all client-facing lines of business with 75% accuracy rate (patent pending)",
                "description_two":"Developed an intuitive web application using React, Flask, PostgreSQL, Docker, and OpenShift to increase employee document handling efficiency by 40%",
                "description_three":"Managed project flow using Agile methodologies (Scrum) with JIRA and Confluence to track progress",
                "logo": "rbc.png",
                "alt":"Royal Bank of Canada logo"}, 
              {"title":"Research Assistant",
                "company": "University of Toronto",
                "date":"May 2022 - August 2022",
                "description_one":"Published research paper in the American Society for Engineering Education at the 2023 ASEE Conference",
                "description_two":"Awarded Best Podium Presentation – Transdisciplinary Engineering Education & Practice at UnERD 2022",
                "description_three":"Analyzed data using frequency distribution, thematic analysis, and force analysis in MS Excel and SPSS to create report of over 250 student opinions and experiences to improve learning effectiveness at the university",
                "logo": "uoft.png",
                "alt":"University of Toronto logo"}]
	
  render() {
    return <section className="work">
      <div className="wrap-content">
        <h2>Work Experience.</h2>
        { this.work_exp.map((item, i) => {
          return <div className="bubble">
              <div>
                <h3>{item.title} <br></br> <i>{item.company}</i></h3>
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

  extra_exp = [{"title":"Stories of WISE Editor", 
                "company": "Women in Science and Engineering UofT",
                "date":"August 2023 - Present",
                "description_one":"Curate and edit engaging content that highlights achievements, innovations, and challenges faced by women in science and engineering",
                "description_two":"Foster a diverse and inclusive narrative by ensuring balanced representation of voices and perspectives within the magazine",
                "logo": "wise.png",
                "alt":"Women in Science and Engineering, University of Toronto logo",
                "class":"wise"},
              {"title":"Software Developer - UTWind",
                "company": "UTWind", 
                "date":"Sept 2022 - April 2023",
                "description_one":"Debugged Fast API implementation associated with mobile app to receive data from wind turbine, resulting in data collection stability",
                "description_two":"Employed critical thinking techniques to isolate and repair software design defects in both front and back-end source codes, improving application stability",
                "logo":"utwind.png",
                "alt":"UTWind logo",
                "class":"utwind"}, 
              {"title":"Conference Workshops Director",
                "company": "Women in Science and Engineering UofT",
                "date":"August 2022 - April 2023",
                "description_one":"Organized 5 workshops for the Women in Science and Engineering National Conference (WISENC) by working with sponsor companies to cater to the interest of over 300 participants",
                "description_two":"Supporting the 50-person executive team in leading a full-day event with over 20 sponsor companies",
                "logo": "wise.png",
                "alt":"Women in Science and Engineering, University of Toronto logo",
                "class":"wise"}, 
              {"title":"Sustainability Researcher",
                "company": "UTWind",
                "date":"June 2021 - August 2022",
                "description_one":"Contributed to 1st place win at the International Small Wind Turbine Competition (ISTWC 2022) through sustainability research",
                "description_two":"Analyzed local challenges, such as lack of access to charging stations and water purifiers, in the Kesses Region in Kenya, to evaluate the most effective use for the electricity generated by the future wind turbine",
                "logo": "utwind.png",
                "alt":"UTWind logo",
                "class":"utwind"}, 
              {"title":"Ombudsperson",
                "company": "University of Toronto Engineering Society",
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
                <h3>{item.title} <br></br> <i>{item.company}</i></h3>
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
      <Projects />
      <Extracurricular />
    </div>
  );
}

export default App;
