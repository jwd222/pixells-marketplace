import { ScrollArea, Stack, Text } from "@mantine/core"
import { votersList } from "../../data/AccordionData"
import AccordionPanelContent from "./AccordionPanelContent"

const Voters = () => {
    return (
        <>
            <h2 className="mb-4 text-left text-3xl leading-[0.7] text-white_yellow">
                Voters
            </h2>

            <ScrollArea
                offsetScrollbars
                type="auto"
                scrollbarSize={11}
                className="flex w-full text-white"
                classNames={{
                    root: "!p-0",
                    scrollbar: "bg-white_yellow h-full",
                    thumb: "!bg-[#FF7777] text-[#FF7777]",
                }}
            >
                <Stack className="gap-0">
                    {votersList.map((voter, index) => (
                        <AccordionPanelContent {...voter} key={index} />
                    ))}
                </Stack>
            </ScrollArea>
        </>
    )
}
export default Voters
