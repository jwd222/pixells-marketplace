"use client"
import { twStyles } from "@/styles/GlobalStyles"
import { Box, Burger, Transition } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import SmallSidebar from "./SmallSidebar"

const SmallSidebarButton = ({ pageName }: { pageName: string }) => {
    const [opened, { toggle }] = useDisclosure(false)
    return (
        <div>
            <div className="mb-2 flex items-center gap-4 lg:justify-center">
                <div
                    className="flex h-11 w-14 items-center justify-center gap-1 rounded-none border-2 border-white_yellow 
                    bg-[#4A2480] font-medium lg:hidden xl:text-[2.5rem]"
                >
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        color="#fff"
                        size="md"
                        aria-label="Toggle navigation"
                    />
                </div>
                <h1 className={`${twStyles.title1}`}>{pageName}</h1>
            </div>
            <Transition
                transition="pop-top-right"
                duration={200}
                mounted={opened}
            >
                {(styles) => (
                    <Box
                        className="top-30 absolute z-10 w-3/4 overflow-hidden overflow-y-auto rounded-none border-4
                        border-white_yellow bg-background sm:w-fit md:top-44 lg:hidden"
                        style={styles}
                    >
                        <SmallSidebar />
                    </Box>
                )}
            </Transition>
        </div>
    )
}
export default SmallSidebarButton
