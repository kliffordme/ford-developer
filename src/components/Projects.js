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
                        <h4>
                        <b>
                        iLearn (Staging)
                        </b>
                        </h4>
                        <a href='https://stage.ilearn-ksmhub.com/admin/login' target="_blank" className=' text-white mx-2'>Live</a>
                    </div>
                    <div >
                    <p>KSM Outsourcing Smart Solutions, Incorporation</p>
                    <p>Position: Junior Developer (FULLSTACK) (June 2021 - February 2022)</p>
                    <p>programming languages used: React js, Javascript, Laravel, PHP.</p>
                    <p>Theme: Metronic</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
