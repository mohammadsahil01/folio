const Contact = () => {
    return ( <div className="mt-16" id="contact">
         <h1 className="flex items-center justify-center text-white text-4xl lg:text-6xl">
        Contact <span className="ml-5 text-[#6fc1ce]">Me</span>
      </h1>

      <div className=" pt-5 pb-10 text-white flex items-center justify-center flex-col">
        <div>
        Shoot me an email at -
        </div>
        <div>
        <a href="mailto:mohammadsahil7972@gmail.com" className="underline">mohammadsahil7972@gmail.com</a>
        </div>
        
      </div>

    </div> );
}
 
export default Contact;