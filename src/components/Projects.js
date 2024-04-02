import React from 'react'
import { Card } from 'react-bootstrap'

export const Projects = () => {
  return (
    <div id='projects'  className='bg-dark text-white py-5'>
      <div className='py-3 mx-5' id="title">
              Recent Projects
      </div>
      <div>
        <div className='position-relative'>
            <div id='project' className=' p-5 mt-5 shadow-lg'>
              <a href='https://sleepy-wozniak-f4c1cb.netlify.app/' id="projectLink" className='shadow-lg p-5 mb-2 d-flex justify-content-center' target="_blank">
              <img src='blog-app.png' id='projectImage' className="" />
              </a>
                <div className=''  id='projectDetails'>
                  <h4>
                    <b>
                    YourBlog
                    </b>
                  </h4>
                  <p>a react-laravel full stack application where users can post, comment, like and follow other users.</p>
                  <p>programming languages used: React js, Javascript, Laravel, PHP.</p>
                  <p>Styling: CSS and Boostrap</p>
                  <a href='https://sleepy-wozniak-f4c1cb.netlify.app/' target="_blank" className='text-white mx-2'>Live</a>
                  <a href='https://github.com/kliffordme/yourblog-react' target="_blank" className='text-white mx-2'>Code</a>
                </div>
            </div>

            <div id='project' className=' p-5 mt-5 shadow-lg'>
                <div className='' id='projectDetails'>
                  <h4>
                    <b>
                    Ford's Pet Shop
                    </b>
                  </h4>
                  <p>a small react application using third party API stripe.</p>
                  <p>programming languages used: React js, Javascript.</p>
                  <p>Styling: CSS and Boostrap</p>
                  <a href='https://vigilant-meninsky-56e3d6.netlify.app/' target="_blank" className='text-white m-2'>Live</a>
                  <a href='https://github.com/kliffordme/pet-shop-react' target="_blank" className='text-white m-2'>Code</a>
                </div>
                <a href='https://vigilant-meninsky-56e3d6.netlify.app/' id='projectLink' className='shadow-lg p-5 d-flex justify-content-center' target="_blank">
                <img src='pet-app.png' id='projectImage' className="mx-2" />
                </a>
            </div>

            <div id='project' className=' p-5 mt-5 shadow-lg'>
              <a href='https://epic-brattain-e4eeaf.netlify.app/' id="projectLink" className='shadow-lg p-5 mb-2 d-flex justify-content-center' target="_blank">
              <img src='chat.png' id='projectImage' className="" />
              </a>
                <div className=''  id='projectDetails'>
                  <h4>
                    <b>
                    Chat-app (Socket.io)
                    </b>
                  </h4>
                  <p>a react-app using popular third party api socket.io, perfect for real time application such as a chat-app.</p>
                  <p>programming languages used: React js, Javascript.</p>
                  <p>Styling: CSS and Boostrap</p>
                  <a href='https://epic-brattain-e4eeaf.netlify.app/' target="_blank" className='text-white mx-2'>Live</a>
                  <a href='https://github.com/kliffordme/chat-app-react' target="_blank" className='text-white mx-2'>Code</a>
                </div>
            </div>


            <div className='pt-5 mx-5' id="title">
              Experience
          </div>
            <div id='project' className='  p-5 mt-5'>
                <a href='https://stage.ilearn-ksmhub.com/admin/login' id="projectLink" className='shadow-lg p-5 d-flex justify-content-center' target="_blank">
                <img id='projectImage' src='iLearn.png' className="mx-2 " />
                </a>
                <div id="projectDetails" className=''>
                    <div className=' d-flex justify-content-start'>
                        <h4 className='pb-3'>
                        <b>
                        KSM Outsourcing Smart Solutions, Incorporation
                        </b>
                        </h4>
                    </div>
                    <div >
                    <p>Position: Junior Developer (FULLSTACK) (Feb 2019 - May 2020)</p>
                    <p>programming languages used: ReactJs, Javascript, Laravel, CSS, HTML and PHP.</p>
                    </div>
                </div>
            </div>
            <div id='project' className=' p-5 mt-5 shadow-lg'>
                <div className='' id='projectDetails'>
                  <h4 className='pb-3'>
                    <b>
                    Red Core I.T Solutions
                    </b>
                  </h4>
                  <p>Position: Senior]Developer (FULLSTACK) (June 2020 - Jan 2024)</p>
                  <p>programming languages used: ReactJs, Javascript, Nodejs, AWS, CSS and HTML.</p>
                  <p>Visit Singlife Philippines 
                    <a href='https://singlife.com.ph/' target="_blank" className='text-white m-2'>here</a>
                  </p>
                </div>
                <a href='https://singlife.com.ph/' id='projectLink' className='shadow-lg p-5 d-flex justify-content-center' target="_blank">
                <img src='singlife-logo.png' id='projectImage' className="mx-2" />
                </a>
            </div>
            <div id='project' className='  p-5 mt-5'>
                <a href='https://www.unicare.ph/' id="projectLink" className='shadow-lg p-5 d-flex justify-content-center' target="_blank">
                <img id='projectImage' src='unicare.png' className="mx-2 " />
                </a>
                <div id="projectDetails" className=''>
                    <div className=' d-flex justify-content-start'>
                        <h4 className='pb-3'>
                        <b>
                        Unicare Labs Incorporation
                        </b>
                        </h4>
                        <a href='https://www.unicare.ph/' target="_blank" className=' text-white mx-2'>Live</a>
                    </div>
                    <div >
                    <p>Position: Senior Developer (FULLSTACK) (Project Based)</p>
                    <p>programming languages used: NextJs, Javascript, Laravel, CSS, and Tailwind.</p>
                    <p>Visit Unicare Philippines
                    <a href='https://www.unicare.ph/' target="_blank" className='text-white m-2'>here</a>
                  </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
