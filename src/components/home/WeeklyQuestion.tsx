import React from "react";

export const WeeklyQuestion = () => {
  return (
    <div className="bg-[rgba(78,172,229,1)] flex flex-col items-stretch justify-center px-[5px] py-[3px] rounded-[5px]">
      <div className="bg-[rgba(224,235,242,1)] z-10 flex mt-[-5px] w-full flex-col items-stretch px-4 py-[13px] rounded-[5px]">
        <div className="text-[rgba(78,172,229,1)] text-sm font-medium">
          Frage der Woche
        </div>
        <div className="text-[#393939] text-2xl font-normal leading-none mt-5">
          "Welche Veranstaltungen sollte man in Melle im Herbst auf keinen Fall
          verpassen?"
        </div>
        <div className="flex w-full items-center gap-[40px_100px] justify-between mt-5">
          <div className="text-[rgba(133,133,133,1)] text-xs font-bold leading-none underline self-stretch my-auto">
            32 Antworten
          </div>
          <div className="self-stretch flex items-center gap-[9px] text-[10px] text-[#858585] font-medium whitespace-nowrap my-auto">
            <div className="self-stretch flex items-center gap-[3px] my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/ce401eeb1d9707cea8ea6c9e168daf4f2b9c9b27aed922451fa0a7d3a0011ea5?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                alt="Views"
              />
              <div className="self-stretch my-auto">58</div>
            </div>
            <div className="self-stretch flex items-center gap-[3px] my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/48aba140c2f47a77d2ebeda8942449632491794bb867a00c685b84fd48a5032d?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                alt="Comments"
              />
              <div className="self-stretch my-auto">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
