import React, { useState } from "react";

export const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, question, category });
  };

  return (
    <div className="bg-[rgba(10,35,58,1)] shadow-[0px_3px_14px_rgba(36,54,66,0.15)] flex w-full flex-col items-stretch pt-[25px] pb-[13px] px-[11px] rounded-[10px]">
      <div className="text-[rgba(78,172,229,1)] text-xl font-medium">
        Jetzt bist du dran!
      </div>
      <div className="text-[rgba(133,133,133,1)] text-sm font-medium mt-[11px]">
        Stelle deine Fragen an unser Experten-team.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative bg-[rgba(228,228,228,1)] flex items-stretch gap-5 text-[#858585] font-normal justify-between mt-[30px] px-4 py-[15px] rounded-[7px] border-[rgba(78,172,229,1)] border-solid border-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Gib deiner Frage einen Titel..."
            className="text-2xl bg-transparent w-full outline-none"
            maxLength={60}
          />
          <div className="text-[15px] text-right">{title.length}/60</div>
        </div>
        <div className="bg-[rgba(228,228,228,1)] flex w-full flex-col items-stretch text-[#858585] font-normal mt-2 pt-[18px] pb-2.5 px-2.5 rounded-[7px]">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Deine Frage hier eingeben..."
            className="text-2xl bg-transparent w-full outline-none resize-none min-h-[100px]"
            maxLength={360}
          />
          <div className="flex items-stretch gap-5 text-[15px] whitespace-nowrap text-right justify-between mt-11">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/14fefe645c71f1a00d66d845f593c59b7c99c0a465292d9b5636f8bda88ee48b?placeholderIfAbsent=true"
              className="aspect-[1.04] object-contain w-[25px] shrink-0"
              alt="Attachment"
            />
            <div className="mt-[15px]">{question.length}/360</div>
          </div>
        </div>
        <div className="flex w-full items-stretch gap-[11px] text-[15px] leading-none mt-[21px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[rgba(228,228,228,1)] flex min-h-10 items-center gap-2.5 text-[rgba(133,133,133,1)] font-normal justify-center px-[18px] py-[13px] rounded-[7px]"
          >
            <option value="">Kategorie auswählen</option>
            <option value="freizeit">#Freizeit</option>
            <option value="verkehr">#Verkehr</option>
            <option value="politik">#Politik</option>
          </select>
          <button
            type="submit"
            className="bg-[rgba(26,133,198,1)] flex min-h-10 items-center gap-2.5 text-[rgba(246,246,246,1)] font-semibold whitespace-nowrap justify-center px-[18px] py-2.5 rounded-[7px]"
          >
            <span>Senden</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/313370cfcb370ffffde737642b037948ef4ff5426661d402b915424f143fcd62?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Send"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
