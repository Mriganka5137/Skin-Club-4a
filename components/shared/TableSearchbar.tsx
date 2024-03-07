import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const TableSearchbar = () => {
  return (
    <div className=" bg-color--F8F8F8 h-10  rounded-[8px] flex justify-between items-center max-tablet:text-[8px] w-full mobile:h-20 tablet:h-9 ">
      <input
        type="text"
        placeholder="Search by patient name"
        className="bg-transparent w-full h-full px-4 placeholder:text-[10px] tablet:placeholder:text-[10px] text-color--4C4D4F opacity-50 placeholder:font-extralight  mobile:placeholder:text-[18px]"
      />
      <div className="flex gap-1 h-full items-center mx-2 ">
        <Separator orientation="vertical" className="h-[60%] w-[1px]" />
        <FaMagnifyingGlass className="mx-2 tablet:mx-3 text-color--4C4D4F opacity-50 size-3 mobile:size-8 tablet:size-3" />
      </div>
    </div>
  );
};

export default TableSearchbar;
