"use client"

import VaultSetupForm from "@/sections/FractionSections/VaultSetupForm"
import { twStyles } from "@/styles/GlobalStyles"
import { Container, Box } from "@mantine/core"
import SelectNFT from "../../sections/FractionSections/SelectNFT"

const Page = () => {
    return (
        <Container
            size={"100%"}
            className="pb-8 font-thaleah md:max-w-screen-lg xl:max-w-screen-3xl"
        >
            <h1 className={`${twStyles.title1} my-10`}>Fraction your NFT</h1>

            <Box className="flex flex-col justify-between gap-4 text-2xl lg:flex-row lg:gap-10 lg:text-3xl xl:text-4xl">
                <SelectNFT />
                <VaultSetupForm />
            </Box>
        </Container>
    )
}
export default Page
