import { Sidebar, Avatar } from "flowbite-react";
import { 
    AdjustmentsVertical,
    Bell,
    Briefcase,
    Ticket,
    ChartBarSquare,
    Camera,
    ChevronLeft, 
} from "svelte-heros-v2";

import { FaHandsHelping } from 'react-icons/fa';
import { GrChannel } from 'react-icons/gr';
import { GiDirectionSigns } from "react-icons/gi";

function RoomBar() {
    return (
        // <div className="w-fit">
        //     <Sidebar aria-label="Sidebar with multi-level dropdown example">
        //         <Sidebar.Items>
        //             <Sidebar.ItemGroup>
        //                 <Sidebar.Item
        //                     href="#"
        //                     icon={Camera}
        //                 >
        //                     Dashboard
        //                 </Sidebar.Item>
        //                 <Sidebar.Collapse
        //                     icon={Camera}
        //                     label="E-commerce"
        //                 >
        //                     <Sidebar.Item href="#">
        //                         Products
        //                     </Sidebar.Item>
        //                 </Sidebar.Collapse>
        //                 <Sidebar.Item
        //                     href="#"
        //                     icon={Camera}
        //                 >
        //                     Inbox
        //                 </Sidebar.Item>
        //                 <Sidebar.Item
        //                     href="#"
        //                     icon={Camera}
        //                 >
        //                     Users
        //                 </Sidebar.Item>
        //                 <Sidebar.Item
        //                     href="#"
        //                     icon={Camera}
        //                 >
        //                     Products
        //                 </Sidebar.Item>
        //                 <Sidebar.Item
        //                     href="#"
        //                     icon={Camera}
        //                 >
        //                     Sign In
        //                 </Sidebar.Item>
        //                 <Sidebar.Item
        //                     href="#"
        //                     icon={Camera}
        //                 >
        //                     Sign Up
        //                 </Sidebar.Item>
        //             </Sidebar.ItemGroup>
        //         </Sidebar.Items>
        //     </Sidebar>
        // </div>
        <aside class="w-64 float-left" aria-label="Sidebar">
   <div class="px-3 py-4 min-h-[95vh] overflow-y-auto rounded bg-beauty dark:bg-gray-800">
      <ul class="space-y-2">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Mentions & Reactions</span>                
            </a>          
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Drafts & sent</span>
               <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">New</span>             
            </a>          
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Slack connect</span>                
            </a>          
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>More</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">bbb</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
         </li>
         <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>
            <li>
                <button type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-connections" data-collapse-toggle="dropdown-connections">
                    <FaHandsHelping />
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Connetions</span>
                    <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-connections" class="hidden py-2 space-y-2">
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">bbb</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Billing</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Invoice</a>
                    </li>
                </ul>
            </li>
            <li>
                <button type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-channel" data-collapse-toggle="dropdown-channel">
                    <span class="text-white"><GrChannel /></span>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Channels</span>
                    <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-channel" class="hidden py-2 space-y-2">
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">bbb</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Billing</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Invoice</a>
                    </li>
                </ul>
            </li>
            <li>
                <button type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-direct-msg" data-collapse-toggle="dropdown-direct-msg">
                    <GiDirectionSigns />
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Direct messages</span>
                    <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-direct-msg" class="hidden py-2 space-y-2">
                    <li className="flex text-2xl">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" class="inline-block h-6 w-6 my-2 ml-2" />                       
                        <p class="items-left w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-2 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Billing</p>
                    </li>
                    <li>
                        <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg pl-11 group hover:bg-turquoise dark:text-white dark:hover:bg-gray-700">Billing</a>
                    </li>
                </ul>
            </li>
         </ul>
         <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:bg-turquoise dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                </a>
            </li>
         </ul>
   </div>
</aside>
    );
}

export default RoomBar;