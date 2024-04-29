import React, { ReactNode } from "react";

interface ItemProps {
  label?: string;
  title: string;
  content?: string;
  isCurrent?: boolean;
  size?: string
}

export const CalendarItem = ({
  label,
  title,
  content,
  isCurrent = true,
  size
}: ItemProps) => {
  return (
    <div
      className={
        isCurrent
          ? `font-bold ${size? null : 'max-w-56 md:w-max'} flex flex-col justify-center text-lg px-4 border-l-2 border-[#007F9F]`
          : `${size? null : 'max-w-56 md:max-w-72'} text-sm md:text-md flex flex-col text-[#BBB9B9] justify-center px-4 border-l-2 border-gray-400`
      }
    >
      <p className="text-xs font-light break-words">{label}</p>
      <p className="text-md break-words font-bold">{title}</p>
      <p className="text-sm break-words font-bold">{content}</p>
    </div>
  );
};
