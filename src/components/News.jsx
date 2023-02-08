import React from "react";

const SearchSidebarLeft = () => {
  return (
    <div>
      <div className="sidenav-left lg:absolute h-full w-80 sm:left-0 sm:pt-5 sm:mt-20 sm:ml-5 ml-8 sm:top-0 overflow-x-hidden mt-5 ">
        <div className="border-b-2 pb-3 border-gray-400">
          <h1 className="font-bold text-sm">News Feed</h1>
          <h2 className="text-base my-2">9 New Books We Recommend This Week</h2>
          <img
            src="https://www.realsimple.com/thmb/KrGb42aamhHKaMzWt1Om7U42QsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg"
            alt=""
          />
        </div>

        <div>
          <h2 className="my-2 text-base">
            25 Expert Tips to Reading WAY More Books This Year
          </h2>
          <img
            src="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/3TaaZPxqIZbAGz2LFvimQk.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSidebarLeft;
