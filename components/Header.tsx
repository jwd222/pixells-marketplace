"use client"

import React, { useState } from "react"
import { Container, Transition, Box, Button, Burger } from "@mantine/core"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import Link from "next/link"
import Image from "next/image"
import { links } from "../src/data/HeaderData"
import { BsMoonFill } from "react-icons/bs"
import { RiSettings5Fill } from "react-icons/ri"
import WalletModal from "@/sections/HomeSections/WalletModal"

const HeaderView = () => {
    const [opened, { toggle }] = useDisclosure(false)
    const [modalOpened, { open, close }] = useDisclosure(false)

    const [selectedNavItem, setSelectedNavItem] = useState("#home")
    const isMobile = useMediaQuery("(max-width: xxsm)")

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            onClick={() => setSelectedNavItem(`${link.link}`)}
            className={`relative block px-5 py-2.5 text-xl font-medium transition-all duration-300 md:px-0 
      md:py-0 lg:text-3xl xl:text-4xl ${
          link.link === selectedNavItem
              ? "font-semibold text-[#C53A9D]"
              : "font-medium text-white_yellow"
      }`}
        >
            <span>{link.label}</span>
        </Link>
    ))

    return (
        <header className="z-50 flex h-20 justify-normal bg-background md:h-24 xl:h-28">
            <Container
                size={"100%"}
                className="flex h-full w-full max-w-screen-3xl items-center justify-between border-b-2 border-divider px-4 font-thaleah md:px-6 lg:px-10 mxl:border-b-4"
            >
                <div className="flex items-center justify-start">
                    <a href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            width={64}
                            height={64}
                            alt="Logo"
                            className="w-12 lg:w-14 xl:w-16"
                        />
                    </a>
                    <div className="ml-5 hidden items-center justify-start gap-4 md:flex lg:ml-10 lg:gap-6 xl:gap-12 mxl:ml-14 mxl:gap-20">
                        {items}
                    </div>
                </div>

                <Box className="hidden items-center gap-2 md:flex">
                    <WalletModal
                        opened={modalOpened}
                        close={close}
                        open={open}
                        isMobile={isMobile}
                    />
                    <Button
                        className="group flex h-11 items-center justify-center gap-1 rounded-none border-2 border-white_yellow 
                    bg-white_yellow px-3 font-medium text-black duration-500 hover:bg-transparent lg:px-8 xl:h-14 mxl:h-[62px]"
                    >
                        <BsMoonFill className="h-auto w-5 group-hover:text-white xl:w-6" />
                    </Button>
                    <Button
                        className="flex h-11 items-center justify-center gap-1 rounded-none border-2 border-white_yellow bg-pink px-3 
                    py-0 font-medium text-black duration-500 hover:bg-transparent hover:text-white lg:px-8 xl:h-14 xl:text-[2.5rem] mxl:h-[62px]"
                    >
                        <RiSettings5Fill className="h-auto w-6 xl:w-8" />
                    </Button>
                </Box>

                <div className="flex items-center justify-end md:hidden">
                    <Button className="flex h-11 w-14 items-center justify-center gap-1 rounded-none border-2 border-white_yellow bg-white_yellow font-medium xl:text-3xl">
                        <BsMoonFill className="h-auto w-4 text-black" />
                    </Button>

                    <Button className="flex h-11 w-14 items-center justify-center gap-1 rounded-none border-2 border-white_yellow bg-pink font-medium xl:text-[2.5rem]">
                        <RiSettings5Fill className="h-auto w-5 text-white" />
                    </Button>

                    <div className="flex h-11 w-14 items-center justify-center gap-1 rounded-none border-2 border-white_yellow bg-[#4A2480] font-medium xl:text-[2.5rem]">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            color="#fff"
                            size="md"
                        />
                    </div>
                </div>

                {/* Phone */}
                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Box
                            className="absolute left-0 top-20 z-10 w-full overflow-hidden overflow-y-auto rounded-none bg-background md:top-24 
                            md:hidden xl:top-28"
                            style={styles}
                        >
                            {items}
                            <WalletModal
                                opened={modalOpened}
                                close={close}
                                open={open}
                                isMobile={isMobile}
                            />
                        </Box>
                    )}
                </Transition>
            </Container>
        </header>
    )
}

export default HeaderView
