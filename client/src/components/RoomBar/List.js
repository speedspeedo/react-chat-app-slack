import React from "react";

export default function List() {
  return (
    <ul class="space-y-0 p-1.5 border-t border-[#FFFFFF33] ">
      <li>
        <a
          href="#"
          class="flex items-center p-1 text-base font-normal text-gray-400  dark:text-white hover:bg-turquoise dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
              clipRule="evenodd"
            />
          </svg>

          <span class="ml-3">Mentions & Reactions</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-1 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
          </svg>

          <span class="ml-3">Drafts & sent</span>
          {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                New
              </span> */}
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center p-1 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M1 2.75A.75.75 0 011.75 2h10.5a.75.75 0 010 1.5H12v13.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5H2v-13h-.25A.75.75 0 011 2.75zM4 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM4.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM8.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM14.25 6a.75.75 0 00-.75.75V17a1 1 0 001 1h3.75a.75.75 0 000-1.5H18v-9h.25a.75.75 0 000-1.5h-4zm.5 3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="ml-3">Slack connect</span>
        </a>
      </li>
      <li>
        <button
          type="button"
          class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 rounded-lg group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>

          <span
            class="flex-1 ml-3 text-left whitespace-nowrap"
            sidebar-toggle-item
          >
            More
          </span>
        </button>
        <ul id="dropdown-example" class="hidden py-2 space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              bbb
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              Billing
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              Invoice
            </a>
          </li>
        </ul>
      </li>{" "}
    </ul>
  );
}
