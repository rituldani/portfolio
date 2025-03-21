import React from 'react'

const Home = React.forwardRef((props, ref) => {
  const resumeUrl = "/resume.pdf";
  return (
    <div ref={ref} class="w-full mt-15 flex justify-between lg:flex-row flex-col" >
      <div class="flex flex-1 items-center ">
        <div class="m-30">
          <h1 class="my-1 text-4xl font-bold">Hello,</h1>
          <h2 class="my-1 text-4xl font-bold">I'm Ritul Dani</h2>
          <p class="my-1 text-[1.2em]">I am Ritul Dani, a front-end developer passionate about creating responsive
            and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React.
            With a keen eye for design and performance optimization, I strive to deliver seamless user experiences.</p>
          <a href={resumeUrl} download="resume.pdf">
            <button class="bg-pink-200 hover:bg-pink-300 mt-2 text-[1.2em] p-2 cursor-pointer text-black hover:text-white rounded-md">Download Resume</button>
          </a>
        </div>
      </div>
      <div class="flex flex-1 p-4 justify-center items-center ">
        <img class="h-120 w-100 rounded-3xl" src='./image1.jpg' alt="Home Image" />
      </div>

    </div>
  );
});

export default Home;
// h-[90vh]