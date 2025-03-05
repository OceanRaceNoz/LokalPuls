
import React from "react";
import { toast } from "@/components/ui/use-toast";

export const LocationSelector = () => {
  const handleLocationClick = () => {
    toast({
      title: "Standortwechsel",
      description: "Hier könntest du deinen Standort ändern.",
      duration: 3000,
    });
  };

  return (
    <div className="justify-center items-stretch bg-[#2C2C2C] flex min-h-16 w-full flex-col overflow-hidden text-base px-5 py-3.5">
      <div className="text-[rgba(232,232,232,1)] font-medium font-spartan">
        Guten Morgen, <span className="font-bold">Stefan!</span>
      </div>
      <div 
        onClick={handleLocationClick}
        className="flex items-center gap-0.5 text-[rgba(78,172,229,1)] font-bold whitespace-nowrap underline mt-2.5 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/34c18c8df71c138c3a9c219a0d2eddedd74c951d10f017f6a28b24c3b9acf487?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Location"
        />
        <div className="self-stretch flex items-center gap-px my-auto">
          <div className="self-stretch my-auto font-spartan">Melle</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/451932fcf0ca91185692e62932f8b1e82ee0647b1ea7838a8722d5ad8711b419?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Arrow"
          />
        </div>
      </div>
    </div>
  );
};
