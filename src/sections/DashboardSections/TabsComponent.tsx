"use client"
import { Box, Tabs, rem } from "@mantine/core"
import { buttonData } from "../../data/ButtonData"
import TabPanelComponent from "./TabPanelComponent"

const TabsComponent = () => {
    return (
        <Box className="h-full w-full">
            <Tabs
                defaultValue="past"
                className="border-2 border-white_yellow"
                classNames={{
                    tab: "border-b-2 border-white_yellow rounded-none aria-selected:bg-[#C53A9D] border-x-2 text-xl xsm:text-xl mxl:text-5xl",
                }}
            >
                <Tabs.List grow>
                    <Tabs.Tab value="active">Active Bids</Tabs.Tab>
                    <Tabs.Tab value="past">Past Bids</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="active">
                    <TabPanelComponent />
                </Tabs.Panel>

                <Tabs.Panel value="past">
                    <TabPanelComponent />
                </Tabs.Panel>
            </Tabs>
        </Box>
    )
}
export default TabsComponent
