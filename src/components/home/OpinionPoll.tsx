import React, { useState } from "react";

export const OpinionPoll = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { text: "unbedingt", emoji: "🤩" },
    { text: "wäre ganz nett", emoji: "😊" },
    { text: "ist mir egal", emoji: "😒" },
    { text: "eher nein", emoji: "😑" },
    { text: "nein", emoji: "🤨" },
  ];

  return (
    <div className="bg-[rgba(229,146,78,0.2)] shadow-[0px_2px_10px_rgba(0,0,0,0.15)] flex w-full flex-col pt-[25px] pb-3.5 px-3 rounded-[10px] border-[rgba(229,146,78,0.3)] border-solid border-2">
      <div className="text-[rgba(217,98,0,1)] text-sm font-medium">
        Deine Meinung
      </div>
      <div className="text-[#393939] text-[26px] font-bold leading-none self-stretch mt-[15px]">
        Brauchen wir einen neuen Supermarkt in Gesmold?
      </div>
      <div className="flex flex-wrap gap-2 mt-[22px]">
        {options.map((option) => (
          <button
            key={option.text}
            onClick={() => setSelectedOption(option.text)}
            className={`rounded bg-[rgba(255,253,251,1)] border flex items-center gap-[5px] px-2.5 py-[5px] border-[rgba(210,210,210,1)] border-solid ${
              selectedOption === option.text
                ? "border-[rgba(229,146,78,1)]"
                : ""
            }`}
          >
            <div className="text-[#393939] text-xl leading-none self-stretch my-auto">
              {option.text}
            </div>
            <div className="text-[rgba(57,57,57,1)] text-base leading-none self-stretch my-auto">
              {option.emoji}
            </div>
          </button>
        ))}
      </div>
      <div className="self-center flex items-center gap-[5px] mt-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/04331ca854112d6cf9f45b2c370f85d66a9f84bdc3fd159bc358c62061f85a15?placeholderIfAbsent=true"
          className="aspect-[10.99] object-contain w-[22px] self-stretch shrink-0 my-auto"
          alt="Progress 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/784efc5f8a423c7f5663f55d13a4523d1c48a960578ca118f68834578cae027d?placeholderIfAbsent=true"
          className="aspect-[5.99] object-contain w-3 self-stretch shrink-0 my-auto"
          alt="Progress 2"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/784efc5f8a423c7f5663f55d13a4523d1c48a960578ca118f68834578cae027d?placeholderIfAbsent=true"
          className="aspect-[5.99] object-contain w-3 self-stretch shrink-0 my-auto"
          alt="Progress 3"
        />
      </div>
    </div>
  );
};
