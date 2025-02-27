
import React from "react";
import { TopBar } from "@/components/home/TopBar";
import { LocationSelector } from "@/components/home/LocationSelector";
import { QuestionCard } from "@/components/home/QuestionCard";
import { AskQuestion } from "@/components/home/AskQuestion";
import { OpinionPoll } from "@/components/home/OpinionPoll";
import { WeeklyQuestion } from "@/components/home/WeeklyQuestion";
import { Navigation } from "@/components/home/Navigation";

const Index = () => {
  return (
    <div className="bg-[rgba(242,242,242,1)] flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-[15px] px-1.5">
      <div className="bg-[rgba(44,44,44,1)] flex shrink-0 h-[167px]" />
      <div className="z-10 flex mt-[-167px] flex-col items-center">
        <div className="items-stretch self-stretch bg-[#2C2C2C] flex w-full flex-col pb-2.5">
          <div className="w-full">
            <TopBar />
            <LocationSelector />
          </div>
          <div className="self-center flex w-[335px] max-w-full flex-col items-stretch mt-[17px]">
            <div className="w-full">
              <div className="text-[rgba(219,219,219,1)] text-base font-medium px-2.5">
                Das beschäftigt Melle
              </div>
              <div className="bg-[rgba(50,50,50,1)] flex w-full items-center gap-[7px] text-sm text-[rgba(83,83,83,1)] font-normal leading-none justify-between mt-[19px] px-2.5">
                <div className="self-stretch bg-[rgba(65,125,181,1)] gap-2.5 text-[rgba(244,244,244,1)] font-bold whitespace-nowrap my-auto px-2.5 py-2 rounded-[5px]">
                  Heute
                </div>
                <div className="self-stretch bg-[rgba(219,219,219,1)] gap-2.5 whitespace-nowrap my-auto px-2.5 py-2 rounded-[5px]">
                  Gestern
                </div>
                <div className="self-stretch bg-[rgba(219,219,219,1)] gap-2.5 my-auto px-2.5 py-2 rounded-[5px]">
                  Diese Woche
                </div>
                <div className="self-stretch bg-[rgba(219,219,219,1)] gap-2.5 my-auto px-2.5 py-2 rounded-[5px]">
                  Diesen Monat
                </div>
              </div>
            </div>

            <div className="self-center w-[311px] max-w-full font-normal mt-[30px]">
              <QuestionCard
                number="#1"
                title="Indoor-Aktivitäten in Melle"
                color="#9EB3FF"
                category="#Freizeit"
                categoryBg="bg-[#1F45CD]"
                question="Was macht ihr in Melle an einem regnerischen Tag? Gibt es coole Indoor-Aktivitäten oder versteckte Orte, die man besuchen sollte?"
                votes={34}
                answers={4}
                views={42}
                author="Sarah98"
                expertAnswered={true}
              />

              <img
                src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/484ca79a89bcb7bc652da7fccb68a544bf52aad5c7d239c975b4dd674854a32b?placeholderIfAbsent=true"
                className="object-contain w-[335px] self-center max-w-full mt-[17px]"
                alt="Divider"
              />

              <QuestionCard
                number="#2"
                title="Straßenarbeiten auf der B65"
                color="#CDE8D0"
                category="#Verkehr"
                categoryBg="bg-[rgba(10,157,47,1)]"
                question="Könnte das Expertenteam mir sagen, wann die Straßenarbeiten auf der B65 in Melle abgeschlossen sind? Die Umleitungen verursachen viel Verkehr, und ich würde gerne wissen, wann wir wieder mit normalem Verkehr rechnen können."
                votes={34}
                answers={2}
                views={15}
                author="Tim_tt"
                expertAnswered={false}
              />
            </div>

            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/22f5f89f92ac79470883b929607fcf667f9a52b91c3a0b72894cae114830de86?placeholderIfAbsent=true"
              className="object-contain w-[335px] self-center max-w-full mt-[17px]"
              alt="Divider"
            />

            <AskQuestion />

            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/11f66f0a860665edab25c3f9d7c135a2f6e51c4256dfda7817eb95fded088445?placeholderIfAbsent=true"
              className="object-contain w-[335px] self-center max-w-full mt-[17px]"
              alt="Divider"
            />

            <OpinionPoll />

            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/092776e025469d07e1c387476922da99376cf65c64c91c2a01380d5f05e7342c?placeholderIfAbsent=true"
              className="object-contain w-[335px] self-center max-w-full mt-[17px]"
              alt="Divider"
            />

            <div className="w-full mt-[17px] pt-[15px]">
              <WeeklyQuestion />
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/da5d3cd85460d2c29911c5e002d048f0d6b09d323d64448c1fb6d3706d9334b3?placeholderIfAbsent=true"
        className="aspect-[2.92] object-contain w-[73px] self-center z-10 mt-[17px]"
        alt="Decoration"
      />
      <Navigation />
    </div>
  );
};

export default Index;
