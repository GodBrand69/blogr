import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
    <section id="intro">
      <Navbar />
      <div className="text-white text-center mb-6">
        <h1 className="max-md:text-4xl md:text-6xl font-Ubuntu font-medium mb-6">A modern publishing platform</h1>
        <p className="text-md mb-10 leading-5 font-extralight">Grow your audience and build your online brand</p>
      </div>
      <div className="space-x-3 text-center pb-40">
        <button className="rounded-3xl font-medium transition ease-in duration-300 hover:text-white text-red-600 bg-white px-6 py-2 signUp-btn">Start for Free</button>
        <button className="rounded-3xl border-2 transition ease-in duration-300 hover:bg-white hover:text-red-600 text-white px-6 py-2">Learn More</button>
      </div>
    </section>
    <section className="max-lg:text-center">
      <h1 className="text-center pt-32 text-3xl heads font-bold">Designed for the future</h1>
      <img className="w-screen pt-10 lg:hidden lg:text-center" src="/illustration-editor-mobile.svg" />
      <div className="flex gap-8">
      <div className="lg:ml-40">
      <div className="mt-24 pb-10">
          <h3 className="text-2xl font-bold pb-7 heads">
          Introducing an extensible editor
          </h3>
          <p className="leading-7 text-sm">
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
          change the looks of a blog.
          </p>
      </div>
      <div>
          <h3 className="text-2xl font-bold pb-7 heads">
          Robust content management
          </h3>
          <p className="leading-7 text-sm">
          Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
          </p>
      </div>
      </div>
      <img className="w-2/4 max-lg:hidden illustration relative" src="/illustration-editor-desktop.svg" />
      </div>
    </section>
    <section className="relative max-lg:text-center" id="body">
      <div className="ws">
      {/* <img className="relative phone" src="/bg-pattern-circles.svg" /> */}
      <div className="body-shi max-lg:text-center relative mt-32 flex"> 
        <div className="py-20 max-lg:mx-auto max-lg:pt-20 lg:ml-96 max-lg:static lg:relative lg:-right-80 w-2/5 ">
        <h3 className="text-3xl text-white font-bold pb-7">State of the Art Infrastructure</h3>
        <p className="leading-7 text-white text-sm">
        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
        </div>
      </div>
      <img className="w-1/3 max-xl:hidden ml-36 phone z-2 absolute max-lg:-top-20 max-lg:left-1/4 lg:-top-32 lg:left-10 z-2" src="/illustration-phones.svg" />
      </div>  
    </section>

    <section>
    <div className="lg:flex pt-32">
    <img className="max-lg:hidden w-2/4" src="/illustration-laptop-desktop.svg" />
    <img className="lg:hidden w-screen" src="/illustration-laptop-mobile.svg" />
    <div className="max-lg:text-center lg:mr-40">
      <div className="mt-24 pb-10">
          <h3 className="text-2xl font-bold pb-7 heads">
          Introducing an extensible editor
          </h3>
          <p className="leading-7 text-sm">
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
          change the looks of a blog.
          </p>
      </div>
      <div>
          <h3 className="text-2xl font-bold pb-7 heads">
          Robust content management
          </h3>
          <p className="leading-7 text-sm">
          Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
          </p>
      </div>
      </div>
    </div>
    </section>
    <section className="max-md:mt-16 max-lg:mt-20" id="footer">
    <div className="max-md:text-center md:flex text-white justify-between pt-20">
    <img className="md:ml-32 max-md:my-20 md:my-28 max-md:mx-auto md:relative lomgo" src="/logo.svg" />
    <div className="max-md:my-10">
      <h2 className="text-md font-bold">Product</h2>
      <ul className="py-3 text-xs">
        <li className="py-2 hover:underline">Overview</li>
        <li className="py-2 hover:underline">Pricing</li>
        <li className="py-2 hover:underline">Marketplace</li>
        <li className="py-2 hover:underline">Features</li>
        <li className="py-2 hover:underline">Integrations</li>
      </ul>
    </div>
    <div className="max-md:my-10">
      <h2 className="text-md font-bold">Company</h2>
      <ul className="py-3 text-xs">
        <li className="py-2 hover:underline">About</li>
        <li className="py-2 hover:underline">Team</li>
        <li className="py-2 hover:underline">Blog</li>
        <li className="py-2 hover:underline">Careers</li>
      </ul>
    </div>
    <div className="md:mr-52">
      <h2 className="text-md font-bold">Connect</h2>
      <ul className="py-3 text-xs">
        <li className="py-2 hover:underline">Contact</li>
        <li className="py-2 hover:underline">Newsletter</li>
        <li className="py-2 hover:underline">Linkedin</li>
      </ul>
    </div>
    </div>
    
    </section>
      
    </>
  )
}
