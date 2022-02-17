import React from 'react'

export const Languages = () => {

    const images = [
        {
            id:1,
            type: 'version control',
            name: 'Bitbucket',
            img: '/bitbucket.png'
        },
        {
            id:2,
            type: 'styling',
            name: 'Bootstrap',
            img: '/bootstrap.png'
        },
        {
            id:3,
            type: 'styling',
            name: 'CSS',
            img: '/css.png'
        },
        {
            id:4,
            type: 'version control',
            name: 'Github',
            img: '/github.png'
        },
        {
            id:5,
            type: 'development',
            name: 'Heroku',
            img: '/heroku.png'
        },
        {
            id:6,
            type: 'coding language',
            name: 'HTML',
            img: '/html.png'
        },
        {
            id:7,
            type: 'coding language',
            name: 'Javascript',
            img: '/javascript.png'
        },
        {
            id:8,
            type: 'framework',
            name: 'Laravel',
            img: '/laravel.png'
        },
        {
            id:9,
            type: 'deployment',
            name: 'netlify',
            img: '/netlify.png'
        },
        {
            id:10,
            type: 'framework',
            name: 'React JS',
            img: '/logo512.png'
        },
        {
            id:11,
            type: 'coding language',
            name: 'PHP',
            img: '/php.png'
        },
        {
            id:12,
            type: 'server environment',
            name: 'Node Js',
            img: '/express.png'
        },
        {
            id:13,
            type: 'development',
            name: 'Firebase',
            img: '/firebase.png'
        },
    ]
    
  return (
    <div id='languages' className='py-5 bg-dark text-white'>
        <div id="title" className='p-5'>
            Programming Experties
        </div>
        <div  className='d-flex flex-wrap justify-content-center' id="languageContainer">
            {images.map((image)=> (<div key={image.id} className=' shadow-lg' id="languageAdjustments">
                <div  className=''> 
                <div > 
                <h3  className=''>
                {image.name}
                </h3>
                <span>{image.type}</span>
                </div>
                <div className='d-flex justify-content-center'>
                <img src={image.img} id="languageImage" className='mt-5' />
                </div>
                </div>

                </div>))}

        </div>
    </div>
  )
}
