"use client"

import Activities from "@/sections/AuctionSections/Activities"
import { MainNFT } from "@/sections/AuctionSections/MainNFT"
import VaultChat from "@/sections/AuctionSections/VaultChat"
import VaultOwner from "@/sections/AuctionSections/VaultOwner"
import VaultSetup from "@/sections/AuctionSections/VaultSetup"
import { Box, Container, Switch } from "@mantine/core"
import { useState } from "react"
import { AppContextProvider } from "../../../context/appcontext"
import Vote from "@/sections/AuctionSections/Vote"
import { twStyles } from "@/styles/GlobalStyles"

const Page = () => {
    const [checked, setChecked] = useState(false)

    return (
        <Container
            size={"100%"}
            className="mx-auto mt-[4%] flex max-w-[95%] flex-col items-center justify-between pb-14 text-center 
            font-thaleah md:max-w-screen-2xl xl:max-w-screen-3xl"
        >
            <Box className="relative flex w-[95%] items-center justify-between text-[#F1F2DA] sm:block">
                <h1 className={`${twStyles.title1}`}>Auction Vote</h1>
                <Switch
                    checked={checked}
                    defaultChecked
                    size="md"
                    color="white"
                    labelPosition="left"
                    label={`SALE: 
                    ${checked ? "On" : "Off"}
                    `}
                    radius="xs"
                    onChange={(event) =>
                        setChecked(event.currentTarget.checked)
                    }
                    classNames={{
                        root: "sm:absolute sm:top-[50%] sm:translate-y-[-50%] sm:right-0",
                        label: "text-white font-thaleah sm:text-xl text-base ",
                        track: `scale-50 xsm:scale-100 ${
                            checked ? "bg-[#BB3998]" : "bg-white"
                        } border-none cursor-pointer`,
                        thumb: `${checked ? "bg-[#fff]" : "bg-[#FF7777]"}`,
                    }}
                />
            </Box>

            <Box className="flex w-[95%] flex-col justify-between gap-4 text-2xl lg:flex-row lg:text-3xl xl:gap-5 xl:text-4xl">
                <VaultChat />
                <VaultOwner />
                <Activities />
            </Box>

            <Box className="mt-24 flex max-w-[95%] flex-auto flex-col justify-between gap-4 text-2xl lg:flex-row lg:text-3xl xl:gap-10 xl:text-4xl">
                <MainNFT />
                <VaultSetup />
            </Box>

            <Box className="mt-24 flex max-w-[95%] flex-auto flex-col justify-between gap-4 text-2xl lg:flex-row lg:text-3xl xl:gap-10 xl:text-4xl">
                <Vote />
            </Box>
        </Container>
    )
}
export default Page
