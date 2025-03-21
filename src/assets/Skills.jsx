import React, { useState, useEffect } from 'react'

const Skills = React.forwardRef((props, ref) => {
  const images = [
    "./images/a.png",
    "./images/b.png",
    "./images/c.png",
    "./images/d.png",
    "./images/e.png",
    "./images/f.png",
  ]
  return (
    <div ref={ref} class="w-full flex justify-evenly md:h-[90vh] flex-col items-center">
      <h1 class="sm:text-5xl text-2xl font-medium">EXPERIENCE WITH</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`img-${index}`} style={{ height: '100px', width: '100px', margin: '10px' }} />
        ))}
      </div>
      <div class="sm:block hidden text-center text-[1.3em] px-30">I have a strong foundation in programming, with proficiency in languages like C++, Python, and basic knowledge of Java.
        My web development skills cover both front-end and back-end technologies. On the front-end, I am skilled in HTML, CSS, JavaScript, and React.
        For back-end development, I have worked with PHP and Django for my projects only.
        My expertise also includes using frameworks and libraries such as React with Redux for state management
      </div>
    </div>
  );
});
// flex justify-evenly items-center
export default Skills;