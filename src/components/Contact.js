import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Button } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';

export const Contact = () => {
    const [loading, setLoading] = useState(false)
    const form = useRef();
    const [success, setSuccess] = useState(false)


    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            emailjs.sendForm('service_x239d3a', 'template_byb36sr', form.current, 'user_LqcvahmoJvnx8vA0boggP')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
            });
        }catch(e){
            console.log(e)
        }
        setLoading(false)
    }

  return (
    <div id="contact" className=' bg-dark text-white'>
        <div id='title' className='p-5 '>
        Contact
        </div>
        <div className='pb-3'>
        <div  className=' p-4 shadow-lg ' id='contactMain'>
            <div id="contactContainer" >
            <h4 className='p-3 my-3'>
                Get in touch, let's talk.
            </h4>
                    <div className=''>
                            <form ref={form} onSubmit={submit}>
                                <div>
                                <label className='m-2'>
                                    Subject
                                </label>
                                <input type="text" className="form-control" placeholder='Subject' name='subject'/>
                                </div>
                                <label className='m-2'>
                                    Name
                                </label>
                                <div>
                                <input type="text" className="form-control" placeholder='Name' name='name'/>
                                </div>
                                <label className='m-2'>
                                    Email
                                </label>
                                <div >
                                <input type="text" className="form-control" placeholder='Email' name='email'/>
                                </div>
                                <label className='m-2'>
                                    Message
                                </label>
                                <div >
                                <textarea type="text" className="form-control" placeholder='Message' name='message'/>
                                </div>
                                <div className='my-3'>
                                <Button type="submit" variant='secondary' value="Send" >Send</Button>
                                </div>
                        </form>
                        <div className='d-flex justify-content-center mb-5'>
                        <ClipLoader loading={loading}  color='white' />
                        {success ? <div>Sent!</div> : null}
                        </div>
                    </div>
                    <div>
                    <div id='contactDetails'  className='d-flex justify-content-center '>
                        <div>
                        <div>
                            Contact number: +639771966894
                            </div>
                            <div>
                            Gmail: fordorq@gmail.com
                            </div>
                        </div>
                        </div>
                    <div  className='flex-fill p-5 m-2 d-flex justify-content-center'>
                        <div id="" className='m-2'>
                            <a href='https://www.facebook.com/klifford.orquillas/' target="_blank">
                            <img src='facebook.png' width={50} />
                            </a>
                        </div>
                        <div id="willHide" className='m-2'>
                            <a href='https://github.com/kliffordme' target="_blank">
                            <img src='github.png' width={50} />
                            </a>
                        </div>
                        <div id="" className='m-2'>
                            <a href='https://twitter.com/fordorq' target="_blank">
                            <img src='twitter.jpg' className='rounded' width={60} height={50} />
                            </a>
                        </div>
                    </div>

                    </div>

            </div>

        </div>
        </div>
        
    </div>
  )
}
