import React from "react";

const Card = () => {
  return (
    // <div className="p-10">
    //   <div className=" w-full lg:max-w-full lg:flex">
    //     <div
    //       className="h-48 lg:h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
    //       style={{
    //         backgroundImage: `url("https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg")`,
    //       }}
    //       title="Mountain"
    //     ></div>
    //     <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //       <div className="mb-8">
    //         <p className="text-sm text-gray-600 flex items-center">
    //           <svg
    //             className="fill-current text-gray-500 w-3 h-3 mr-2"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //           >
    //             <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
    //           </svg>
    //           Members only
    //         </p>
    //         <div className="text-gray-900 font-bold text-xl mb-2">
    //           Best Mountain Trails 2020
    //         </div>
    //         <p className="text-gray-700 text-base">
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //           Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    //           exercitationem praesentium nihil.
    //         </p>
    //       </div>
    //       <div className="flex items-center">
    //         <img
    //           className="w-10 h-10 rounded-full mr-4"
    //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/800px-George_Orwell_press_photo.jpg"
    //           alt="Avatar of Writer"
    //         />
    //         <div className="text-sm">
    //           <p className="text-gray-900 leading-none">John Smith</p>
    //           <p className="text-gray-600">Aug 18</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="lg:mx-96 lg:my-3 px-5  py-0  bg-white border  shadow md:flex-row md:max-w-10xl hover:bg-gray-100 dark:border-white-700">
        <div class=" flex items-center space-x-4 my-2 object-cover">
          <img
            class="w-10 h-10 rounded-full"
            src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
            alt=""
          />
          <div class="font-medium">
            <div>Mark</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              PHP Developer
            </div>
          </div>
        </div>
        <hr />
        <a href="#" className="flex items-center">
          {/* flex-col */}
          <img
            className="object-cover w-24 h-36 md:h-auto md:w-24 md:rounded-none "
            src="https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              1984
              <p className="text-sm">by George Orwell</p>
            </h5>
            <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Lorem ipsum dolor sit amet
            </p>

            <p className="mt-3">
              <span className="font-bold text-xs">Status: </span>
              <span className="bg-amber-100 text-black rounded-md px-1 py-1 text-xs">
                Free
              </span>
              <button className="bg-yellow-900 text-white  px-2 py-1 rounded-md  hover:bg-teal-600 sm:float-right text-sm ml-10 sm:ml-0">
                Exchange
              </button>
              {/* block ml-0 sm:ml-auto */}
            </p>
            {/* <button className="bg-teal-700 text-white w-max px-2 py-1 rounded-md mt-3 hover:bg-teal-600 block ml-0 sm:ml-auto">
              Want to read
            </button> */}
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;
