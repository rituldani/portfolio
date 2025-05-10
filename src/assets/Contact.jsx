import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  const image = [
    "./loc.png",
    "./mail.png",
    "./call.png",
  ]
  return (
    <div ref={ref} class="w-full sm:h-[90vh] flex items-center ">
      <div class="h-[75%] w-full flex flex-col justify-around items-center">
        <h1 class="text-center text-[3em] font-medium">Contact Me</h1>
        <div class="w-[90%] flex items-center justify-evenly sm:flex-row flex-col">
          <div class="h-45 w-62 flex justify-evenly items-center flex-col text-lg">
            <img src={image[0]} alt='#' height={100} width={100} />
            <p class="">Location</p>
            <p class="">Chittorgarh Raj.</p>
          </div>
          <div class="h-45 w-62 flex justify-evenly items-center text-lg flex-col">
            <img src={image[1]} alt='#' height={100} width={100} />
            <p class="">Email</p>
            <p class="">rituldani2003@gmail.com</p>
          </div>
          <div class="h-45 w-62 flex justify-evenly items-center text-lg flex-col">
            <img src={image[2]} alt='#' height={100} width={100} />
            <p class="">Phone Number</p>
            <p class="">+91 9461261816</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;