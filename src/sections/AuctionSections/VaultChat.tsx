import { Box, Button, ScrollArea, Text, TextInput } from "@mantine/core"
import { chatData } from "../../data/UserChatData"
import { useForm } from "@mantine/form"
import { twStyles } from "@/styles/GlobalStyles"

import { BsPlayFill } from "react-icons/bs"

const VaultChat = () => {
    const form = useForm({
        initialValues: {
            chat: "",
        },
    })
    const chats = chatData.map(({ username, text }, index) => (
        <div className="m-2 flex items-center gap-2 px-4" key={index}>
            <Text className="flex text-2xl text-[#FF7777]">{username}:</Text>
            <Text className="grow whitespace-normal font-bittypix text-[0.6rem]">
                {text}
            </Text>
        </div>
    ))

    return (
        <Box className="mt-[2%] w-full flex-auto border-2 border-white_yellow lg:w-1/3">
            <h2 className={`mt-[5%] ${twStyles.title}`}>vault chat</h2>

            <Box className="flex max-w-full flex-col items-center justify-center px-4 text-start text-[#F1F2DA] sm:mx-auto">
                <ScrollArea
                    offsetScrollbars
                    type="auto"
                    scrollbarSize={11}
                    className="m-4 flex border-2 border-white_yellow"
                    classNames={{
                        root: "!p-0 w-full",
                        scrollbar: "bg-white_yellow h-full",
                        thumb: "!bg-[#FF7777] text-[#FF7777]",
                    }}
                    h={448}
                >
                    {chats}
                </ScrollArea>

                <form
                    onSubmit={form.onSubmit((values) => console.log(values))}
                    className="mt-3 w-full"
                >
                    <div className="flex w-full items-center justify-between space-x-4">
                        <TextInput
                            {...form.getInputProps("chat")}
                            className="w-full"
                            placeholder="Your message..."
                            classNames={twStyles.inputComp}
                        />
                        <Button
                            size="lg"
                            className="-mt-1.5 h-10 rounded-none border-2 border-white_yellow bg-card_border px-4 text-white md:h-12 mxl:h-14"
                            type="submit"
                        >
                            <BsPlayFill className="h-auto w-6 text-white_yellow xl:w-8" />
                        </Button>
                    </div>
                </form>
            </Box>
        </Box>
    )
}
export default VaultChat
