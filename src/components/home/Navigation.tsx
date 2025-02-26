import React from "react";

export const Navigation = () => {
  return (
    <nav className="self-center relative aspect-[4.931] w-full gap-[40px_90px] text-[15px] whitespace-nowrap px-[18px] py-[15px] rounded-[27px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/b55e643774393349956565b4a1f9d43c1c155b874318a7eb777dfc006acdc5f6?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Navigation background"
      />
      <div className="relative flex items-stretch justify-between">
        <div className="flex items-stretch gap-[30px] flex-1">
          <div className="flex flex-col items-center text-[rgba(78,172,229,1)] font-bold">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/3621a7c49f1460aec532fa43698240f1d4b35843b8939a8c335db262caf5f29f?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6"
              alt="Home"
            />
            <div className="mt-2">Home</div>
          </div>
          <div className="flex flex-col items-stretch text-[rgba(83,83,83,1)] font-normal">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/1e3331d8d0873f28e46ac2b7dbed056e5ba54c776ed14030b9c272fee03ad926?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-center"
              alt="Questions"
            />
            <div className="mt-2">Fragen</div>
          </div>
        </div>
        <div className="flex items-stretch gap-[31px] text-[rgba(83,83,83,1)] font-normal flex-1">
          <div className="flex flex-col items-stretch">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/adeb9e33022078b16b01fee9260461a621a747c1066a461be173bd7042507dd4?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-center"
              alt="Opinion"
            />
            <div className="mt-2">Meinung</div>
          </div>
          <div className="flex flex-col items-stretch">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/c0689131ef5e895585e725ff27a60282bafc444515528d8f30e46a14c0abdc77?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-center"
              alt="News"
            />
            <div className="mt-2">News</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
