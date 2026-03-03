import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";

interface WorkflowCardProps {
  uses: number;
  workflowName: string;
  steps: string[];
}

export default function WorkflowCard({
  uses,
  workflowName,
  steps,
}: WorkflowCardProps) {
  const usesString = uses + " uses";

  return (
    <Card className="flex flex-col w-[30vw] h-[20vh] mt-2 rounded-2xl bg-stone-900">
      <div className="flex flex-row items-start justify-between m-4">
        {/* TODO: change this "div" element to proper workflow icon later... */}
        <div className="bg-white h-10 w-10 rounded-md" />
        <h5 className="text-white opacity-70 text-xs">{usesString}</h5>
      </div>
      <h2 className="text-white font-bold opacity-90 ml-4">{workflowName}</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start ml-4 mt-auto mb-4">
        {steps.map((value, index) => {
          if (index === steps.length - 1)
            return (
              <span
                key={index}
                className="bg-stone-500 text-center text-white text-xs rounded-md px-1.5 w-fit"
              >
                {value}
              </span>
            );

          return (
            <>
              <span
                key={index}
                className="bg-stone-500 text-center text-white text-xs rounded-md px-1.5 w-fit"
              >
                {value}
              </span>
              <ArrowRight className="text-stone-500 opacity-70" size={20} />
            </>
          );
        })}
      </div>
    </Card>
  );
}
