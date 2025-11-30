// export default function TableHeader () {
//     return (
//          <thead className="bg-gray-100">
//                         <tr>
//                           <th className="border border-gray-300 px-4 py-2 lg:w-[19%] w-[10%] text-center ">
//                             Id
//                           </th>
//                           <th className="border border-gray-300 px-4 py-2 lg:w-[45%] w-[20%] truncate lg:text-nowrap ">
//                             Todo
//                           </th>
//                           <th className="border border-gray-300 px-4 py-2 lg:w-[12%] w-[5%] ">
//                             Status
//                           </th>
//                           <th className="border border-gray-300 px-4 py-2 w-[15.5%]">
//                             Mark as Complete
//                           </th>
//                           <th className="border border-gray-300 px-4 py-2 lg:w-[8.5%] w-[5%]">
//                             Delete
//                           </th>
//                         </tr>
//                       </thead>
//     )
// }

// export default function TableHeader() {
//   return (
//     <thead className="bg-gray-100 text-xs sm:text-sm">
//       <tr>
//         <th className="border border-gray-300 px-2 py-2 w-[15%] sm:w-[10%] text-center whitespace-normal break-words">
//           Id
//         </th>

//         <th className="border border-gray-300 px-2 py-2 w-[45%] sm:w-[30%] whitespace-normal break-words lg:truncate lg:text-nowrap">
//           Todo
//         </th>

//         <th className="border border-gray-300 px-2 py-2 w-[20%] sm:w-[15%] whitespace-normal break-words">
//           Status
//         </th>

//         <th className="border border-gray-300 px-2 py-2 w-[20%] sm:w-[35%] whitespace-normal break-words text-center">
//           Mark as Complete
//         </th>

//         <th className="border border-gray-300 px-2 py-2 w-[20%] sm:w-[10%] whitespace-normal break-words text-center">
//           Delete
//         </th>
//       </tr>
//     </thead>
//   );
// }

export default function TableHeader() {
  return (
    <thead className="bg-gray-100 text-[10px] xs:text-xs sm:text-sm">
      <tr>
        <th className="border border-gray-300 px-2 py-2 w-[12%] text-center whitespace-normal break-words">
          Id
        </th>

        <th className="border border-gray-300 px-2 py-2 w-[20%] whitespace-normal break-words lg:truncate lg:text-nowrap">
          Todo
        </th>

        <th className="border border-gray-300 px-2 py-2 w-[24%] whitespace-normal break-words text-center">
          Status
        </th>

        <th className="border border-gray-300 px-2 py-2 w-[34%] whitespace-normal break-words text-center">
          Mark as Complete
        </th>

        <th className="border border-gray-300 px-2 py-2 w-[10%] whitespace-normal break-words text-center">
          Delete
        </th>
      </tr>
    </thead>
  );
}

