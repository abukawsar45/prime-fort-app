import { Link } from "react-router-dom";

const Contact = () => {

 
  return (
    <div>
      <div className="py-4 md:py-8 lg:py-12 mx-2 md:mx-4 lg:mx-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-black  flex flex-col justify-between">
            <div className="flex flex-col justify-between py-4 px-2 md:px-12 text-white ">
              <div>
                <h3 className="text-xl" >Get in Touch</h3>
                <p className="my-2">Reach out to us. We can make something awesome together</p>
                <div className="mt-4 md:mt-8">
                  <p className="my-2">info@primefort.net</p>
                  <p className="my-2">
                    Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
                </div>
             </div>
              <div className="bottom-0 mt-12 md:mt-32">
                <Link>Facebook</Link>
                <br />
                <Link>Linkedin</Link>
                <br />
                <Link>Instragram</Link>
              </div>
           </div>
          </div>
          <div className="bg-white ">
            <div className="p-10">

            <div className="text-left my-2 md:mt-8 lg:mt-12">
              <label htmlFor="" className="px-2">Full Name</label>
              <br />
              <input type="text" name="" id="" className="border-b-2 border-b-cyan-500 w-full md:w-96" />
            </div>
            <div className="text-left my-2 md:mt-8 lg:mt-12">
              <label htmlFor="" className="px-2">Email</label>
              <br />
              <input type="email" name="" id="" className="border-b-2 border-b-cyan-500 w-full md:w-96" />
            </div>
            <div className="text-left my-2 md:mt-8 lg:mt-12">
              <label htmlFor="" className="px-2">Subject</label>
              <br />
              <input type="text" name="" id="" className="border-b-2 border-b-cyan-500 w-full md:w-96" />
            </div>
            <div className="text-left my-2 md:mt-8 lg:mt-12">
              <label htmlFor="" className="px-2">Message</label>
                <br />
                <textarea name="" id="" cols="30" rows="10" className="border-b-2 border-b-cyan-500 w-full md:w-96"></textarea>
              
            </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Contact;
