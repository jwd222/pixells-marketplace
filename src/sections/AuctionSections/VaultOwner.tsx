import { twStyles } from "@/styles/GlobalStyles"
import { Box, Stack } from "@mantine/core"
import Mosaic from "./Mosaic"

const VaultOwner = () => {
    return (
        <Stack className="mt-[2%] w-full border-2 border-white_yellow lg:w-1/3">
            <h2 className={`my-[5%] ${twStyles.title}`}>vault owners</h2>
            <Box className="mx-auto justify-center">
                <Mosaic />
            </Box>
            <Box className="flex flex-col items-center justify-center pb-4 text-[#F1F2DA]">
                <p className="">about</p>
                <Stack className="flex w-[90%] flex-col border-2 border-white_yellow p-4 text-xs xsm:max-lg:w-[83%] xsm:max-lg:text-base lg:w-[92%]">
                    <Box className="flex items-center justify-center gap-2">
                        <p className="font-thaleah text-2xl">owner :</p>
                        <p className="font-bittypix text-[0.5rem]">
                            {" "}
                            NFThunter
                        </p>
                    </Box>
                    <p className="flex items-center justify-center font-bittypix text-[.5rem] xsm:text-xs lg:text-[.6rem] xl:text-xs">
                        (dfE4q6SD65azE651cQr68azF)
                    </p>
                    <Box className="flex items-center justify-center gap-2">
                        <p className="font-thaleah">part : </p>
                        <p className="font-bittypix text-xs">15.6%</p>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}
export default VaultOwner
