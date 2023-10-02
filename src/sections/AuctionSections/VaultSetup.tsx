"use client"
import { Box, Button, ScrollArea, TextInput, Textarea } from "@mantine/core"
import { useForm } from "@mantine/form"
import FormSelectInput from "../../../components/FormSelectInput"
import { useState } from "react"
import { twStyles } from "@/styles/GlobalStyles"

const values = {
    name: "",
    description: "",
}

const VaultSetup = () => {
    const form = useForm({
        initialValues: values,
    })

    const [inputCount, setInputCount] = useState(0)
    const [inputValues, setInputValues] = useState<string[]>([])

    const handleAddInput = () => {
        setInputCount(inputCount + 1)
        setInputValues([...inputValues, ""]) // Initialize the new input's value as an empty string
    }
    return (
        <Box className="flex w-full flex-auto flex-col border-2 border-white_yellow xl:w-[60%]">
            <h2 className={`mt-[2%] ${twStyles.title}`}>setup vault</h2>
            <Box className="flex max-w-full justify-center text-start xs:max-sm:mx-4">
                <form
                    onSubmit={form.onSubmit((values) => console.log(values))}
                    className="w-full sm:max-w-[90%]"
                >
                    <Box className="flex flex-col">
                        <TextInput
                            placeholder="Type here"
                            label="Name:"
                            {...form.getInputProps("name")}
                            className="w-full"
                            classNames={twStyles.inputComp}
                        />
                        <Textarea
                            rows={4}
                            autosize={false}
                            placeholder="Type here..."
                            label="Descriptionn:"
                            {...form.getInputProps("description")}
                            className="w-full"
                            classNames={{
                                input: "text-white_yellow font-spritecoder text-lg md:text-xl xl:text-2xl bg-transparent border-2 border-white rounded-none -mt-2",
                                label: "lg:max-2xl:text-xl text-2xl font-thaleah text-white_yellow leading-none",
                            }}
                        />
                        <Box>
                            <p className="mt-[2%] text-start font-thaleah text-2xl text-[#F1F2DA]  lg:max-2xl:text-xl">
                                social media:
                            </p>
                            <ScrollArea
                                offsetScrollbars
                                type="auto"
                                scrollbarSize={11}
                                className="flex h-[10rem] border-2 border-white_yellow text-white"
                                classNames={{
                                    root: "!p-0",
                                    scrollbar: "bg-white_yellow h-full",
                                    thumb: "!bg-[#FF7777] text-[#FF7777]",
                                }}
                            >
                                {inputValues.map((value, index) => (
                                    <FormSelectInput form={form} key={index} />
                                ))}
                                <FormSelectInput form={form} />
                                <FormSelectInput form={form} />
                            </ScrollArea>
                            <Button
                                className="w-full items-center rounded-none border-2 border-white_yellow text-center font-bittypix text-[0.8rem]"
                                onClick={handleAddInput}
                            >
                                + add another link
                            </Button>
                        </Box>
                        <Button
                            className={`mt-[5%] sm:h-[62px] ${twStyles.button}`}
                        >
                            confirm
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}
export default VaultSetup
