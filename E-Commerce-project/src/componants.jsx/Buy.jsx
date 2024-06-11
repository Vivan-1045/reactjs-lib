import React from "react";
function Buy(){
    return(
        <>
        <div class="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
  <div class="overflow-hidden">
    <div class="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
      <div class="items-start justify-between lg:flex lg:space-x-8">
        <div class="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
          <div class="w-full xl:flex xl:flex-row-reverse">
            <div class="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
              <div class="relative flex items-center justify-center">
                <img
                  alt="Product gallery 1"
                  src="https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1548&amp;q=80"
                  width="650"
                  height="590"
                  class="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                />
              </div>
              <div class="absolute top-2/4 z-10 flex w-full items-center justify-between">
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
                  class="text-white"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
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
                  class="text-white"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
            <div class="flex gap-2 xl:flex-col">
              <div class="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                <img
                  alt="Product 0"
                  src="https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=924&amp;q=80"
                  decoding="async"
                  loading="lazy"
                  class="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                />
              </div>
              <div class="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                <img
                  alt="Product 1"
                  src="https://images.unsplash.com/photo-1580902394743-1394a7ec93d2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  decoding="async"
                  loading="lazy"
                  class="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                />
              </div>
              <div class="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 ">
                <img
                  alt="Product 2"
                  src="https://images.unsplash.com/photo-1580902394767-81b0facc0894?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  decoding="async"
                  loading="lazy"
                  class="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
          <div class="pb-5">
            <h2 class="text-lg font-semibold md:text-xl xl:text-2xl">
              Nike Airmax Pro V2
            </h2>
            <p class="mt-4 font-semibold">$250</p>
          </div>
          <div class="mb-2 pt-0.5">
            <h4 class="text-15px mb-3 font-normal capitalize text-opacity-70">
              available in:
            </h4>
            <ul class="flex flex-wrap space-x-2">
              <li class="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                8 UK
              </li>
              <li class="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                9 UK
              </li>
              <li class="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10">
                10 UK
              </li>
            </ul>
          </div>
          <div class="pb-2"></div>
          <div class="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
            <button
              type="button"
              class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add To Cart
            </button>
            <div class="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-3"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
                <span class="block">Wishlist</span>
              </button>
              <div class="relative">
                <button
                  type="button"
                  class="inline-flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-3"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                  <span class="block">Share</span>
                </button>
              </div>
            </div>
          </div>
          <div class="pt-6 xl:pt-8">
            <h3 class="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
              Product Details:
            </h3>
            <p class="text-sm">
              A chip (often just chip, or crisp in British and Irish English)
              may be a thin slice of potato that has been either deep fried or
              baked until crunchy. theyre commonly served as a snack, side dish,
              or appetizer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Buy;