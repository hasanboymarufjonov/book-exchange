import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-6 sm:p-2  text-xs border-t">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <p className="mb-6 font-semibold text-gray-100 uppercase dark:text-white">
                Resources
              </p>
              <ul classNameName="">
                <li className="mb-4 ">Hello</li>
                <li>Hello 2</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className=" text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
