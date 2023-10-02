import { Box } from "@mantine/core"
import React from "react"

const Mosaic = () => {
    return (
        <Box className="flex w-full flex-wrap p-4 xsm:min-h-[30rem] sm:mx-auto sm:min-h-[21rem]">
            <Box className="flex w-2/3 items-center justify-center bg-[#BAB5DB] text-xl font-semibold text-white xsm:text-lg">
                Tile 1 (Large)
            </Box>
            <Box className="flex w-1/3 items-center justify-center bg-[#7C428F] text-xl font-semibold text-white xsm:text-lg">
                Tile 2 (Small)
            </Box>
            <Box className="flex w-1/3 items-center justify-center bg-[#2E6C65] text-xl font-semibold text-white xsm:text-lg">
                Tile 3 (Small)
            </Box>
            <Box className="flex w-2/3 items-center justify-center bg-[#A9D7E1] text-xl font-semibold text-white xsm:text-lg">
                Tile 4 (Medium)
            </Box>
            <Box className="flex w-1/3 items-center justify-center bg-[#E3A195] text-xl font-semibold text-white xsm:text-lg">
                Tile 5 (Small)
            </Box>
            <Box className="flex w-2/3 items-center justify-center bg-[#3E7F93] text-xl font-semibold text-white xsm:text-lg">
                Tile 6 (Large)
            </Box>
        </Box>
    )
}

export default Mosaic
