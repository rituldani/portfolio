import React from 'react'

const Projects = React.forwardRef((props, ref) => {
  const image = [
    "./projects/project1.png",
    "./projects/project2.png",
    "./projects/project3.png",
    "./projects/project4.png",
    "./projects/project5.png",
    "./projects/project6.png",
  ]
  return (
      <div ref={ref} class="w-full md:h-[90vh] flex flex-col gap-5 md:gap-10 items-center relative z-1 ">
        <h1 class="text-center text-4xl font-medium">Projects I have</h1> 
        <div class="w-[90%] flex flex-wrap justify-around">
          <div class="pb-5">
            <img class="h-50 w-90 rounded-lg" src={image[0]} />
            <p class="text-center text-[1.2em]">Placement Cell Web Application</p>
          </div>
          <div class="pb-5">
            <img class="h-50 w-90 rounded-lg" src={image[1]} />
            <p class="text-center text-[1.2em]">Chat API</p>
          </div>
          <div class="pb-5">
            <img class="h-50 w-90 rounded-lg" src={image[2]} />
            <p class="text-center text-[1.2em]">React Quiz App</p>
          </div>
          <div class="pb-5">
            <img class="h-50 w-90 rounded-lg" src={image[3]} />
            <p class="text-center text-[1.2em]">React To-Do-List</p>
          </div>
          <div class="pb-5">
            <img class="h-50 w-90 rounded-lg" src={image[4]} />
            <p class="text-center text-[1.2em]">Rock-Paper_Scissors Game</p>
          </div>
          <div class="pb-5">
            <img class="h-50 w-90 rounded-lg" src={image[5]} />
            <p class="text-center text-[1.2em]">Login Page</p>
          </div>
        </div>    
      </div>
  );
});

export default Projects;
