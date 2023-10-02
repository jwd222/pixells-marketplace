import { Box, ScrollArea } from "@mantine/core"
import { useAppContext } from "../../../context/appcontext"
import SelectCardGrid from "./SelectCardGrid"

const SelectNFT = () => {
    const { selectedCards } = useAppContext()

    return (
        <Box className="w-full max-w-full border-2 border-white_yellow lg:max-w-3xl mxl:max-w-4xl 2xl:max-w-[1100px]">
            <p className="mt-6 text-center font-thaleah text-[#F1F2DA] md:mt-10">
                select nfts
            </p>
            <Box className="w-full text-center">
                {selectedCards.length >= 0 && (
                    <p className="text-white">
                        {selectedCards.length} NFT selected.
                    </p>
                )}
            </Box>

            <ScrollArea
                offsetScrollbars
                type="auto"
                scrollbarSize={11}
                className="m-4 flex h-[32rem] border-2 border-white_yellow"
                classNames={{
                    root: "!p-0",
                    scrollbar: "bg-white_yellow h-full",
                    thumb: "!bg-[#FF7777] text-[#FF7777]",
                }}
            >
                <SelectCardGrid type="select" />
            </ScrollArea>
        </Box>
    )
}
export default SelectNFT
