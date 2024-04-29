import { Box, Center } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

export function Options({
  texto,
  Icon,
  onHover,
  href,
}: {
  texto: string;
  Icon?: any;
  onHover?: Dispatch<SetStateAction<boolean>>;
  href: string;
}) {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (boolean: boolean) => {
    setIsHover(boolean);
  };

  return (
    <Box
      as="a"
      href={href}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="md:h-20 md:w-72 p-4 border-2 rounded-md flex flex-1 justify-center items-center hover:cursor-pointer transition hover:bg-[#4EB78D] hover:text-white ease-in-out delay-100 duration-500"
    >
      <Center className="flex gap-3">
        {
          <Icon
            styles="transition-all ease-in-out delay-200 duration-500"
            hover={isHover}
          />
        }
        <p>{texto}</p>
      </Center>
    </Box>
  );
}
