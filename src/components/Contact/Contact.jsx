import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/contact_form_bg.jpg';
import { BiLogoGmail, BiSolidLocationPlus } from 'react-icons/bi';
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  
} from 'react-icons/bs';


const Contact = () => {
  // console.log(bgImage);
    const { register, handleSubmit, reset } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        alert('Message send successfully')
        reset();
      };



  return (
    <div className='relative my-4 z-0 md:my-8 lg:my-16 object-center bg-slate-700 bg-cover bg-opacity-10 w-screen h-screen '>
      <div className='absolute my-4 md:my-8  lg:my-32 mx-2 md:mx-4 lg:mx-6 w-full'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='bg-black  flex flex-col justify-between'>
            <div className='grid grid-rows-2 py-4 px-2 md:px-12 text-white '>
              <div className='my-4 md:my-8 lg:my-12'>
                <h3 className='text-xl md:text-2xl lg:text-3xl'>
                  Get in Touch
                </h3>
                <p className='my-2'>
                  Reach out to us. We can make something awesome together
                </p>
                <div className='mt-4 md:mt-8 lg:mt-16'>
                  <p className='mt-2 md:mt-6 lg:mt-10 flex justify-start items-center gap-2 md:gap-5'>
                    <span>
                      <BiLogoGmail className='text-xl text-blue-500' />
                    </span>{' '}
                    info@primefort.net
                  </p>

                  <p className='my-2 flex justify-start items-center gap-2 md:gap-5'>
                    <span>
                      <BiSolidLocationPlus className='text-xl text-blue-500' />
                    </span>{' '}
                    Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai,
                    Chennai - 600002
                  </p>
                </div>
              </div>
              {/* social link */}
              <div className='mb-0 mt-auto  flex md:h-80 lg:h-96 justify-start items-end gap-5'>
                <Link>
                  {' '}
                  <span>
                    <BsFacebook className='text-2xl hover:text-blue-500' />
                  </span>{' '}
                </Link>
                <Link>
                  {' '}
                  <span>
                    <BsTwitter className='text-2xl hover:text-blue-500' />
                  </span>{' '}
                </Link>
                <Link>
                  {' '}
                  <span>
                    <BsInstagram className='text-2xl hover:text-blue-500' />
                  </span>{' '}
                </Link>
                <Link>
                  {' '}
                  <span>
                    <BsLinkedin className='text-2xl hover:text-blue-500' />
                  </span>{' '}
                </Link>
              </div>
            </div>
          </div>
          {/* input form */}
          <div className='bg-white '>
            <form onSubmit={handleSubmit(onSubmit)} className='p-10'>
              <div className='text-left my-2 md:mt-8 lg:mt-12'>
                <label htmlFor='' className='px-2'>
                  Full Name
                </label>
                <br />
                <input
                  type='text'
                  id=''
                  {...register('name', { required: true })}
                  className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
                />
              </div>
              <div className='text-left my-2 md:mt-8 lg:mt-12'>
                <label htmlFor='' className='px-2'>
                  Email
                </label>
                <br />
                <input
                  type='email'
                  id=''
                  {...register('email', { required: true })}
                  className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
                />
              </div>
              <div className='text-left my-2 md:mt-8 lg:mt-12'>
                <label htmlFor='' className='px-2'>
                  Subject
                </label>
                <br />
                <input
                  type='text'
                  id=''
                  {...register('subject', { required: true })}
                  className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
                />
              </div>
              <div className='text-left my-2 md:mt-8 lg:mt-12'>
                <label htmlFor='' className='px-2'>
                  Message
                </label>
                <br />
                <textarea
                  id=''
                  {...register('message', { required: true })}
                  cols='20'
                  rows='7'
                  className='px-2 md:px-4 py-1 md:py-2 border-b-2 border-b-cyan-500 w-full md:w-96'
                ></textarea>
              </div>
              <div>
                <input
                  type='submit'
                  value='send message'
                  className='bg-gray-400 mt-4 md:mt-6 text-blue-900 hover:bg-white px-2 md:px-4 lg:px-5 py-1 md:py-2 lg:py-3 uppercase border-2 font-bold border-sky-600 '
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// background-color: transparent transition: background-color 0.3s ease backroop-filter: blur-9px
