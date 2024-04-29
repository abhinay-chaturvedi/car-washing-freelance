import BookingForm from "@/components/BookingForm";
import Footer from "@/components/footer";
import React from "react";

const Page = ({ params }: { params: { plan: string } }) => {
  console.log(params.plan.split("-").join(" "));
  return (
    <div>
      <div className="tw-p-3 tw-bg-yellow-50">
        <BookingForm plan={params.plan.split("-").join(" ")}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
