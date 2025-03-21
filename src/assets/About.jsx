import React from 'react'

// export default function About() {
//   return (
//     <div class="w-full h-screen">About</div>
//   )
// }

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} class="w-full h-[90vh] flex justify-center items-center">
      <div class="h-130 bg-white w-[75%] rounded-lg flex">
        <div class="lg:flex lg:flex-1 lg:justify-center items-center hidden " >
          <img class="h-120 w-100" src="./image1.jpg" alt="" srcset="" />
        </div>
        <div class="flex-1 p-10 sm:text-[1.1em]">
          <h1 class="text-[2.3em] pt-6 pb-3 font-bold ">I'm a Software Developer</h1>
          <p class="">
            I am Ritul Dani, a Computer Science Engineering student with a specialization in Artificial Intelligence and Machine Learning.
            I have a strong foundation in C++ programming and web development technologies like HTML, CSS, JavaScript, and ReactJS.
            <span class="sm:block hidden">My academic journey has been enriched with hands-on projects such as a Placement Cell application, quizApp using react and many more.
            I am passionate about learning, building innovative solutions, and contributing to projects that make an impact.</span>
          </p>
        </div>

      </div>
    </div>
  );
});

export default About;
