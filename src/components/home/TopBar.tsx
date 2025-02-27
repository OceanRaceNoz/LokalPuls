
import React from "react";

export const TopBar = () => {
  return (
    <div className="bg-[#2C2C2C] w-full">
      <div className="pb-[9px]">
        <div className="justify-between items-center flex min-h-[50px] w-full gap-[40px_100px] pl-2.5 pr-5">
          <div className="self-stretch flex items-stretch text-lg text-[rgba(246,246,246,1)] font-bold whitespace-nowrap w-28 my-auto rounded-[10px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/32dbd905763e5af50c7069e025a965892f32ba851790801ea973110566f51451?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[10px]"
              alt="Logo"
            />
            <div className="mt-5">LocalPuls</div>
          </div>
          <div className="self-stretch relative flex items-center gap-2.5 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/6ab9ae18ddef4844631a6c60c52a81b9b4a0144d38fbcd49a6719ea36e529b4c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch z-0 shrink-0 my-auto"
              alt="Notification"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/f68aac2105293bb5010805fa0f96b22734b57d61c2bbb6501ddf1476ff86943c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[50px] self-stretch z-0 shrink-0 my-auto rounded-[50%]"
              alt="Profile"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/0f2b056e307a28b74570e86d1286633a01f25d0a6efc336bcbb56a495072c22f?placeholderIfAbsent=true"
              className="aspect-[0.88] object-contain w-[15px] absolute z-0 shrink-0 h-[17px] right-px bottom-0"
              alt="Status"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
