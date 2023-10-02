import { twStyles } from "@/styles/GlobalStyles"
import { Box, Button, ScrollArea } from "@mantine/core"
import CardGrid from "../FractionSections/SelectCardGrid"
import AuctionCardGrid from "./AuctionCardGrid"

export const MainNFT = () => {
    return (
        <Box className="w-full flex-auto  xl:w-[40%]">
            <Box className="mb-2 border-2 border-white_yellow">
                <h2 className={`mt-[2%] ${twStyles.title}`}>main nft</h2>

                <ScrollArea
                    offsetScrollbars
                    type="auto"
                    scrollbarSize={11}
                    className="m-8 mt-4 flex h-[27rem] border-2 border-white_yellow text-white"
                    classNames={{
                        root: "!p-0",
                        scrollbar: "bg-white_yellow h-full",
                        thumb: "!bg-[#FF7777] text-[#FF7777]",
                    }}
                >
                    <AuctionCardGrid type="main" />
                </ScrollArea>
            </Box>
            <Box className="flex flex-col gap-2">
                <Button className={`${twStyles.button}`}>
                    view on solscan
                </Button>
                <Button className={`${twStyles.button}`}>verify vault</Button>
                <Button className={`${twStyles.button}`}>
                    claim the vault
                </Button>
            </Box>
        </Box>
    )
}
