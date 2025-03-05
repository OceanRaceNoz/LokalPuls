
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface QuestionCardProps {
  number: string;
  title: string;
  color: string;
  category: string;
  categoryBg: string;
  question: string;
  votes: number;
  answers: number;
  views: number;
  author: string;
  expertAnswered: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  number,
  title,
  color,
  category,
  categoryBg,
  question,
  votes: initialVotes,
  answers,
  views: initialViews,
  author,
  expertAnswered,
}) => {
  const [votes, setVotes] = useState(initialVotes);
  const [views, setViews] = useState(initialViews);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [expanded, setExpanded] = useState(false);

  // Simulate a view count increment on component mount
  React.useEffect(() => {
    // This would normally be tracked via a backend
    const timer = setTimeout(() => {
      setViews(prev => prev + 1);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleVote = (voteType: 'up' | 'down') => {
    if (userVote === voteType) {
      // Undo vote
      setVotes(voteType === 'up' ? votes - 1 : votes + 1);
      setUserVote(null);
      toast({
        title: "Abstimmung zurückgezogen",
        duration: 2000,
      });
    } else {
      // Apply new vote (and remove old vote if existed)
      let change = voteType === 'up' ? 1 : -1;
      if (userVote !== null) {
        change *= 2; // Double the effect if changing from up to down or vice versa
      }
      
      setVotes(votes + change);
      setUserVote(voteType);
      
      toast({
        title: voteType === 'up' ? "Upvote erfolgreich" : "Downvote erfolgreich",
        duration: 2000,
      });
    }
  };

  return (
    <div className="bg-[#393939] flex w-full flex-col overflow-hidden items-stretch justify-center px-3 py-[35px] rounded-[10px]">
      <div className="w-full">
        <div className="flex w-full flex-col items-stretch">
          <div className="flex w-full items-stretch justify-between">
            <div className="flex-1 shrink basis-[0%] text-xl font-semibold" style={{ color }}>
              {title}
            </div>
            <button 
              onClick={() => setExpanded(!expanded)}
              className="focus:outline-none hover:opacity-70 transition-opacity"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/c05aa67bb6643d7acc1eec5e46ab5454e023473c74883fabd77c191e4f18d75b?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 shrink-0"
                alt="More"
              />
            </button>
          </div>
          <div
            className={`${categoryBg} inline-block gap-2.5 text-sm text-white font-normal whitespace-nowrap leading-none mt-3 px-[15px] py-[9px] rounded-sm max-w-fit`}
          >
            {category}
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-[30px]">
          <div 
            className={`text-[#C8C8C8] text-2xl font-normal leading-5 self-stretch flex-1 shrink basis-[0%] my-auto ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {question}
          </div>
          <div className="self-stretch flex items-center gap-2.5 w-[30px] my-auto pl-2.5">
            <div className="self-stretch flex w-5 flex-col items-center my-auto">
              <button 
                className={`flex w-5 flex-col items-center justify-center focus:outline-none ${
                  userVote === 'up' ? 'text-[#4EACE5]' : 'text-[#858585] hover:text-gray-400'
                }`}
                onClick={() => handleVote('up')}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/abfee50c7c9e9eeaaf19cd42a97a348f28b3256c4548514adc5a8f037e84e54f?placeholderIfAbsent=true"
                  className={`aspect-[0.87] object-contain w-full ${userVote === 'up' ? 'filter brightness-150' : ''}`}
                  alt="Upvote"
                />
                <div className="mt-1.5 text-xl font-normal whitespace-nowrap leading-none">{votes}</div>
              </button>
              <div className="border min-h-px w-3 mt-[9px] border-[rgba(57,57,57,1)] border-solid" />
              <button 
                className={`rotate-[-3.141592653589793rad] flex w-5 items-center gap-0.5 justify-center mt-[9px] focus:outline-none ${
                  userVote === 'down' ? 'text-[#E5924E]' : 'text-[#858585] hover:text-gray-400'
                }`}
                onClick={() => handleVote('down')}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/f744b61a5f80e88ac5a06a049432db43094d46569301511d4ef6438ec1885e4e?placeholderIfAbsent=true"
                  className={`aspect-[0.87] object-contain w-5 self-stretch my-auto ${userVote === 'down' ? 'filter brightness-150' : ''}`}
                  alt="Downvote"
                />
              </button>
            </div>
          </div>
        </div>
        
        {question.length > 100 && !expanded && (
          <button 
            onClick={() => setExpanded(true)}
            className="text-[#4EACE5] text-sm mt-2 hover:underline focus:outline-none"
          >
            Weiterlesen...
          </button>
        )}
        
        {expanded && (
          <button 
            onClick={() => setExpanded(false)}
            className="text-[#4EACE5] text-sm mt-2 hover:underline focus:outline-none"
          >
            Weniger anzeigen
          </button>
        )}
        
        <div className="flex w-full gap-4 justify-between mt-[30px]">
          <div className="flex flex-col items-stretch w-[204px]">
            <div className="flex w-full items-center gap-1 text-sm text-[#858585] font-normal leading-none">
              <img
                src={
                  expertAnswered
                    ? "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/09115157848aede6ae2017c02f3713ccddacf8371250aa21d8d68fb77ba52692?placeholderIfAbsent=true"
                    : "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/b3af46201b8d84b79fad764d012972889c152056d9b5a231860299d508cf6387?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto rounded-[1px]"
                alt="Expert status"
              />
              <div className="self-stretch my-auto">
                {expertAnswered
                  ? "Vom Expertenteam beantwortet"
                  : "Vom Expertenteam noch nicht beantwortet"}
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-base text-[#C8C8C8] mt-[15px]">
              <div className="self-stretch flex items-center gap-1 font-bold my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/5c6c02e022f8e3fe38862aa3c1a33582fb29feabe5c1020862f95f8d8cce4d29?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
                  alt="Answers"
                />
                <div className="self-stretch my-auto">{answers} Antworten</div>
              </div>
              <div className="self-stretch flex items-center gap-1 font-medium whitespace-nowrap my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/ce401eeb1d9707cea8ea6c9e168daf4f2b9c9b27aed922451fa0a7d3a0011ea5?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
                  alt="Views"
                />
                <div className="self-stretch my-auto">{views}</div>
              </div>
            </div>
          </div>
          <div className="relative flex gap-2 text-xs text-[rgba(57,57,57,1)] font-normal text-right leading-loose">
            <div className="self-stretch flex-1 shrink basis-[0%] z-0 gap-2.5 w-[67px] pb-1">
              <span className="text-[rgba(200,200,200,1)]">von</span>{" "}
              <span className="font-bold text-[rgba(113,183,206,1)]">
                {author}
              </span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/78ef9f482949556fee014507c039900929e56aec43812f80c22465d974722768?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 z-0 shrink-0 rounded-[50%]"
              alt="Author"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/f9ed0dcca63f16140b3b8b4bcfac7c4603b013cb7f5634bfc3f38da8325ac837?placeholderIfAbsent=true"
              className="aspect-[0.79] object-contain w-[15px] absolute z-0 shrink-0 h-[19px] right-0 bottom-0"
              alt="Status"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
