import React from "react";

export default function ChatRoom() {
  return (
    <ul class="space-y-0 p-1.5 border-t border-[#FFFFFF33] ">
      <li>
        <button
          type="button"
          class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 rounded-lg group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
          aria-controls="dropdown-connections"
          data-collapse-toggle="dropdown-connections"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>

          <span
            class="flex-1 ml-3 text-left whitespace-nowrap"
            sidebar-toggle-item
          >
            Channels
          </span>
          <svg
            sidebar-toggle-item
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul id="dropdown-connections" class="hidden p-1 space-y-0">
          <li>
            <a
              href="/channels/chat-app"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75  pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              # chat-app
            </a>
          </li>
          <li>
            <a
              href="/channels/general"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              # general
            </a>
          </li>
          <li>
            <a
              href="/channels/random"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              # random
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z"
                  clipRule="evenodd"
                />
              </svg>

              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
              >
                Add channels
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <button
          type="button"
          class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
          aria-controls="dropdown-direct-msg"
          data-collapse-toggle="dropdown-direct-msg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          <span
            class="flex-1 ml-3 text-left whitespace-nowrap"
            sidebar-toggle-item
          >
            Direct messages
          </span>
          <svg
            sidebar-toggle-item
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul id="dropdown-direct-msg" class="hidden p-1 space-y-0">
          <li className="flex text-2xl">
            <a
              href="/directmessages/satellite"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>

              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
              >
                satellite
              </span>
            </a>
          </li>
          <li>
            <a
              href="/directmessages/speedo"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.56 1.14a.75.75 0 01.177 1.045 3.989 3.989 0 00-.464.86c.185.17.382.329.59.473A3.993 3.993 0 0110 2c1.272 0 2.405.594 3.137 1.518.208-.144.405-.302.59-.473a3.989 3.989 0 00-.464-.86.75.75 0 011.222-.869c.369.519.65 1.105.822 1.736a.75.75 0 01-.174.707 7.03 7.03 0 01-1.299 1.098A4 4 0 0114 6c0 .52-.301.963-.723 1.187a6.961 6.961 0 01-1.158.486c.13.208.231.436.296.679 1.413-.174 2.779-.5 4.081-.96a19.655 19.655 0 00-.09-2.319.75.75 0 111.493-.146 21.239 21.239 0 01.08 3.028.75.75 0 01-.482.667 20.874 20.874 0 01-5.153 1.249 2.51 2.51 0 01-.107.247 20.86 20.86 0 015.253 1.257.75.75 0 01.48.74 20.946 20.946 0 01-.907 5.107.75.75 0 01-1.433-.444c.415-1.34.69-2.743.806-4.19-.495-.174-1-.328-1.512-.461.05.284.076.575.076.873 0 1.814-.517 3.312-1.426 4.37A4.639 4.639 0 0110 19a4.64 4.64 0 01-3.574-1.63C5.516 16.311 5 14.813 5 13c0-.298.026-.59.076-.873-.513.133-1.017.287-1.512.46.116 1.448.39 2.85.806 4.191a.75.75 0 01-1.433.444 20.94 20.94 0 01-.908-5.107.75.75 0 01.482-.74 20.857 20.857 0 015.252-1.257 2.481 2.481 0 01-.107-.247 20.874 20.874 0 01-5.153-1.249.75.75 0 01-.482-.667 21.342 21.342 0 01.08-3.028.75.75 0 111.493.146 19.745 19.745 0 00-.09 2.32c1.302.459 2.668.785 4.08.959.066-.243.166-.471.297-.679a6.962 6.962 0 01-1.158-.486A1.348 1.348 0 016 6a4 4 0 01.166-1.143 7.032 7.032 0 01-1.3-1.098.75.75 0 01-.173-.707 5.48 5.48 0 01.822-1.736.75.75 0 011.046-.176z"
                  clip-rule="evenodd"
                />
              </svg>

              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
              >
                speedo
              </span>
            </a>
          </li>
          <li className="flex text-2xl">
            <a
              href="/directmessages/friend"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
              >
                friend
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center w-full p-1 text-base font-normal text-gray-400 transition duration-75 pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item
              >
                Add teammates
              </span>
            </a>
          </li>
        </ul>
      </li>
      <li class="pt-4 mt-4 space-y-0 ">
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
            <path
              fillRule="evenodd"
              d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 00-.552.698 5 5 0 004.503 5.152 6 6 0 002.946 1.822A6.451 6.451 0 017.768 13H7.5A1.5 1.5 0 006 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 00-1.5-1.5h-.268a6.453 6.453 0 01-.684-2.202 6 6 0 002.946-1.822 5 5 0 004.503-5.152.75.75 0 00-.552-.698A31.804 31.804 0 0016 2.562v-.387a.75.75 0 00-.629-.74A33.227 33.227 0 0010 1zM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 01-1.855-2.68zm14.95 0a3.503 3.503 0 01-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332z"
              clipRule="evenodd"
            />
          </svg>

          <span class="flex-1 ml-3 whitespace-nowrap">
            Free trial in progress
          </span>
        </a>
      </li>
    </ul>
  );
}
