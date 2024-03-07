import EditContainer from "@/components/edit-invoice/EditContainer";
import ElementsContainer from "@/components/edit-invoice/ElementsContainer";
import { Button } from "@/components/ui/button";

const EditInvoicePage = () => {
  return (
    <div className="  flex-grow  px-6 py-8  w-full max-w-screen-desktop desktop:mx-auto">
      <div className="flex justify-between items-center ">
        <div className="">
          <h1 className=" text-3xl font-light text-color--4C4D4F">Invoice</h1>
          <h3 className=" mt-2  text-color--4C4D4F opacity-85 text-[20px]">
            Invoice list
          </h3>
        </div>
        <Button className=" max-tablet:hidden px-[52px]">Add Discount</Button>
      </div>

      <div className="flex flex-col tablet:flex-row gap-6 mt-8 w-full max-sm:mt-2   ">
        {/* <TabsContainer /> */}
        <EditContainer />
        <ElementsContainer />
      </div>
    </div>
  );
};

export default EditInvoicePage;
