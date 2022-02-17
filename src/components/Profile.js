import React from 'react'

export const Profile = () => {
  return (
    <div id="profile" className=' bg-dark text-white py-5' >
                <div id="title" className='mx-5 py-5'>
            Profile
        </div>
        <div id="project" className='d-flex flex-column shadow-lg pb-5'>

        <div className='d-flex justify-content-center m-5 ' >
            <img src='profile.png'  id='profileImage'/>
        </div>
        <div className='shadow-lg ' id="profileContainer">
            <h2 id='profileDetails'>Hi, I'm Klifford Orquillas</h2>
            <p id="profileDetails" className=''>
                a motivated self-taught developer, who shows professionalism and dedication. 
                Clean at writing codes, knows DRY (Don't Repeat Yourself) codes, learns languages fast. <br/>
                Efficient at working the task on given deadline without sacrificing the quality of the output. <br/>
                Enthusiastic at personal growth, easy to work with and very open-minded of constructive criticism
                of other developers/team. My dedication to pursue my craft as a web-developer made it very easy to learn programming
                languages as I am hungry for honing my skills and develop not only user-friendly but also quality websites.
            </p>
        </div>
        </div>

    </div>
  )
}
