import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

export const Calendario = ({children}:{children: ReactNode}) => {
    return (
        <Box className="flex gap-3 flex-col justify-center flex-1 w-full h-full px-9 py-4">
            {children}
        </Box>
    )
}