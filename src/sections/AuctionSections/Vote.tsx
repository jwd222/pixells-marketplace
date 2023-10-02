import { Text, Accordion, Box, Button, Stack } from "@mantine/core"
import AccordionLabel from "./AccordionLabel"
import { charactersList, votersList } from "../../data/AccordionData"
import DividerWithMiddleText from "../../../components/DividerWithMiddleText"
import VoteInfo from "./VoteInfo"
import Voters from "./Voters"
import { twStyles } from "@/styles/GlobalStyles"

const Vote = () => {
    const items = charactersList.map((item, index) => (
        <Accordion.Item
            value={item.id}
            key={index}
            onClick={() => console.log(item.id)}
        >
            <Accordion.Control>
                <AccordionLabel {...item} />
            </Accordion.Control>

            <Accordion.Panel>
                <Box className="flex flex-col justify-between gap-4 md:flex-row">
                    <Stack className="w-full justify-center border-2 border-white_yellow text-white md:w-1/3">
                        <VoteInfo {...item} />
                    </Stack>

                    <Stack className="h-[20rem] w-full justify-start gap-0 border-white_yellow text-white md:w-2/3">
                        <Voters />
                    </Stack>
                </Box>
            </Accordion.Panel>
        </Accordion.Item>
    ))

    return (
        <Box className="flex w-full flex-auto flex-col border-2 border-white_yellow px-6 md:px-8 lg:px-10 xl:px-14">
            <h2 className={`my-10 ${twStyles.title}`}>
                Vote for an auction price
            </h2>

            <div className="border-white_yellow">
                <Accordion
                    chevronPosition="right"
                    variant="contained"
                    classNames={{
                        item: "bg-[#051F39] border-4 border-white_yellow !rounded-none",
                        chevron: "text-white [&>*]:!w-auto [&>*]:!h-10 w-10",
                        icon: "w-14 h-14",
                    }}
                >
                    {items}
                </Accordion>
            </div>

            <Box className="flex justify-center">
                <DividerWithMiddleText
                    text="or open a new vote"
                    color="#00303B"
                    size="2"
                />
            </Box>

            <Box className="m-4 flex flex-col justify-center text-white">
                <Text className="font-bittypix text-sm">
                    In order to initiate an auction, the total sum of tokens
                    held by the voters must be greater than 80%. Once the price
                    has been voted on, a 7-day auction begins.
                </Text>

                <Button
                    className={`mx-auto mt-[5%] h-[50px] max-w-xl xsm:h-[50px] sm:h-[62px] ${twStyles.button}`}
                >
                    Start a new vote
                </Button>
            </Box>
        </Box>
    )
}
export default Vote
