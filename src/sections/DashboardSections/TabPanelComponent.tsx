"use client"

import { Button, Input, ScrollArea, Select } from "@mantine/core"
import { AiOutlineSearch } from "react-icons/ai"
import { FiChevronDown } from "react-icons/fi"
import { pastBids } from "../../data/PastBidData"
import { useState } from "react"

const TabPanelComponent = () => {
    const [value, setValue] = useState<string | null>(null)
    console.log(value)

    return (
        <div className="flex flex-col">
            <div className="m-4 flex items-center justify-end gap-2 lg:gap-4">
                <Input
                    placeholder="seacrch for a token..."
                    variant="unstyled"
                    className="w-full"
                    classNames={{
                        input: "text-white_yellow font-spritecoder",
                        wrapper: "border-2 border-white_yellow max-w-[20rem]",
                    }}
                />
                <AiOutlineSearch className="aspect-square scale-[1.3] bg-white_yellow text-black lg:scale-[2]" />
                <Select
                    placeholder="sort by.."
                    data={["oldest", "newest", "highest", "lowest"]}
                    rightSection={<FiChevronDown className="scale-50" />}
                    classNames={{
                        input: "md:min-w-[15rem] bg-transparent  rounded-none text-white_yellow px-2 h-9 w-24 xsm:w-32 font-spritecoder",
                        dropdown: "max-h-[200px] overflow-hidden",
                        options: "font-spritecoder bg-transparent",
                        wrapper: " border-2 border-white_yellow",
                    }}
                    value={value}
                    onChange={setValue}
                />
            </div>
            <div className="">
                <ScrollArea
                    classNames={{
                        root: "!p-0 h-[30rem] mxl:h-[40rem] mxl:m-4 mxl:mt-2 mxl:border-2 border-white_yellow",
                        scrollbar: "bg-white_yellow h-full",
                        thumb: "!bg-[#FF7777] text-[#FF7777]",
                    }}
                    offsetScrollbars
                    type="auto"
                    scrollbarSize={11}
                >
                    {pastBids.map(
                        ({ name, nftCount, valueInSOL, bidCount }, index) => (
                            <div
                                className="mx-1 flex flex-col items-center justify-between border-b-2 
                                border-white_yellow text-sm first:border-t-2 xxsm:py-3 sm:flex-row sm:py-4 mxl:py-6"
                                key={index}
                            >
                                <div className="flex w-full items-center justify-between gap-2 px-2 text-lg md:text-xl mxl:text-3xl">
                                    <p>{name}</p>
                                    <p className="font-bittypix text-2xs mxl:text-sm">
                                        {nftCount} NFT
                                    </p>
                                    <p className="font-bittypix text-2xs mxl:text-sm">
                                        {valueInSOL} sol
                                    </p>
                                    <p>{bidCount} bids</p>
                                </div>
                                <Button
                                    className="mb-2 h-[1.5rem] w-full items-center justify-center gap-1 rounded-none border-2 border-white_yellow bg-violet text-white_yellow 
                                    duration-500 hover:bg-transparent xsm:h-[2rem] xsm:text-xl sm:m-2 sm:w-1/3  sm:text-xl md:flex md:py-2 
                                    lg:px-8"
                                >
                                    see auction
                                </Button>
                            </div>
                        )
                    )}
                </ScrollArea>
            </div>
        </div>
    )
}
export default TabPanelComponent
