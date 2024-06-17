import React from "react";

function Nav() {
  return (
    <>
     <div class="relative w-full bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <span>
      <text x="10" y="50" class="three-d" font-family="Arial" font-size="45" transform="rotate(-20 100,100)">&lt;/&gt;</text>
    </span>
      <span class="font-bold">DevUI</span>
    </div>
    <div class="hidden lg:block">
      <ul class="ml-12 inline-flex space-x-8">
        <li>
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Contact
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2 h-4 w-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex grow justify-end">
      <input
        class="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Serach"
      />
    </div>
    <div class="ml-2 mt-2 hidden lg:block">
      <span class="relative inline-block">
        <img
          class="h-10 w-10 rounded-full"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          alt="Dan_Abromov"
        />
        <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
      </span>
    </div>
    <div class="ml-2 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

    </>
  )
}
export default Nav;

