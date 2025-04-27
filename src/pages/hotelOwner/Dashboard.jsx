import React, { useState } from "react";
import { Title } from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

export const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      /> 

      {/* Cards */}
       <div className="flex flex-col sm:flex-row gap-4 my-8">
         {/* Total Bookings */}
         <div className="bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4  sm:w-1/2">
          <img
            src={assets.totalBookingIcon}
            alt="Total Bookings"
            className="hidden sm:block h-10"
          />
          <div className="flex flex-col ml-0 sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg sm:text-xl">Total Bookings</p>
            <p className="text-gray-600 text-base sm:text-lg">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4 w-full sm:w-1/2">
          <img
            src={assets.totalRevenueIcon}
            alt="Total Revenue"
            className="hidden sm:block h-10"
          />
          <div className="flex flex-col ml-0 sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg sm:text-xl">Total Revenue</p>
            <p className="text-gray-600 text-base sm:text-lg">
              $ {dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}

      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>
      <div className="w-full max-w-3x1 text-left border border-gray-300 rounded-1g max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th
                className="py-3 px-4 text-gray-800 font-medium
max-sm:hidden"
              >
                Room Name
              </th>
              <th
                className="py-3 px-4 text-gray-800 font-medium
text-center"
              >
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium">
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.user.username}
                </td>
                <td
                  className="py-3 px-4 text-gray-700 border-t border-gray-300
max-sm:hidden"
                >
                  {item.room.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  ${item.totalPrice}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 flex">
                <button
                className={`py-1 px-4 text-xs rounded-full ${
                  item.isPaid
                    ? "bg-green-200 text-green-700"
                    : "bg-yellow-200 text-yellow-700"
                }`}
              >
                {item.isPaid ? "Completed" : "Pending"}
              </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};






// import React, { useState } from "react";
// import { Title } from "../../components/Title";
// import { assets, dashboardDummyData } from "../../assets/assets";

// export const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState(dashboardDummyData);

//   return (
//     <div className="min-h-screen flex flex-col">
//     <div className="flex-1 px-4 sm:px-8 py-6">
//       <Title
//         align="left"
//         font="outfit"
//         title="Dashboard"
//         subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
//       />

//       {/* Cards */}
//       <div className="flex flex-col sm:flex-row gap-4 my-8">
//         {/* Total Bookings */}
//         <div className="bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4 w-full sm:w-1/2">
//           <img
//             src={assets.totalBookingIcon}
//             alt="Total Bookings"
//             className="hidden sm:block h-10"
//           />
//           <div className="flex flex-col ml-0 sm:ml-4 font-medium">
//             <p className="text-blue-500 text-lg sm:text-xl">Total Bookings</p>
//             <p className="text-gray-600 text-base sm:text-lg">
//               {dashboardData.totalBookings}
//             </p>
//           </div>
//         </div>

//         {/* Total Revenue */}
//         <div className="bg-primary/5 border border-primary/10 rounded-lg flex items-center p-4 w-full sm:w-1/2">
//           <img
//             src={assets.totalRevenueIcon}
//             alt="Total Revenue"
//             className="hidden sm:block h-10"
//           />
//           <div className="flex flex-col ml-0 sm:ml-4 font-medium">
//             <p className="text-blue-500 text-lg sm:text-xl">Total Revenue</p>
//             <p className="text-gray-600 text-base sm:text-lg">
//               $ {dashboardData.totalRevenue}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Recent Bookings */}
//       <h2 className="text-2xl text-blue-900 font-semibold mb-5">Recent Bookings</h2>

//       {/* Table without scrolls */}
//       <div className="w-full max-w-5xl border border-gray-300 rounded-lg p-4">
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-semibold bg-gray-100 p-2 rounded">
//           <p>User Name</p>
//           <p className="hidden sm:block">Room Name</p>
//           <p className="text-center">Total Amount</p>
//           <p className="text-center">Payment Status</p>
//         </div>

//         {dashboardData.bookings.map((item, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-2 items-center text-gray-700 border-b"
//           >
//             <p>{item.user.username}</p>
//             <p className="hidden sm:block">{item.room.roomType}</p>
//             <p className="text-center">${item.totalPrice}</p>
//             <div className="text-center">
//               <button
//                 className={`py-1 px-4 text-xs rounded-full ${
//                   item.isPaid
//                     ? "bg-green-200 text-green-700"
//                     : "bg-yellow-200 text-yellow-700"
//                 }`}
//               >
//                 {item.isPaid ? "Completed" : "Pending"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };
