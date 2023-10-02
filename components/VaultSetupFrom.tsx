import { useForm } from "@mantine/form"
import { BiSolidChevronDown } from "react-icons/bi"
import {
    Box,
    Button,
    TextInput,
    NumberInput,
    NativeSelect,
    Slider,
} from "@mantine/core"

const VaultSetupForm = () => {
    const form = useForm({
        initialValues: {
            name: "",
        },
    })

    return (
        <Box className="w-1/2 flex-auto border-4 border-white_yellow">
            <p className="text-center font-thaleah text-[2.93rem] text-[#F1F2DA]">
                setup vault
            </p>
            <Box maw={340} mx="auto" className="items-center">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Box>
                        <TextInput
                            variant="unstyled"
                            label="Name:"
                            {...form.getInputProps("name")}
                            className="w-full"
                            classNames={{
                                input: "text-white_yellow font-spritecoder",
                                label: "text-2xl font-thaleah text-white_yellow",
                                wrapper: "border-2 border-white_yellow ",
                            }}
                        />
                        <Box className="flex justify-between gap-6">
                            <NumberInput
                                variant="unstyled"
                                label="Amount:"
                                {...form.getInputProps("amount")}
                                className="basis-2/3"
                                classNames={{
                                    input: "text-white_yellow font-spritecoder",
                                    label: "text-2xl font-thaleah text-white_yellow",
                                    wrapper: "border-2 border-white_yellow ",
                                }}
                            />
                            <NumberInput
                                variant="unstyled"
                                label="Symbol:"
                                {...form.getInputProps("symbol")}
                                className="basis-1/3"
                                classNames={{
                                    input: "text-white_yellow font-spritecoder",
                                    label: "text-2xl font-thaleah text-white_yellow",
                                    wrapper: "border-2 border-white_yellow ",
                                }}
                            />
                        </Box>
                        <Box className="flex w-full items-end">
                            <NumberInput
                                variant="unstyled"
                                label="Reserve price:"
                                rightSection={
                                    <NativeSelect
                                        variant="unstyled"
                                        size="xl"
                                        radius="xs"
                                        data={["SOL", "BTC", "DOGE"]}
                                        rightSection={<BiSolidChevronDown />}
                                        classNames={{
                                            input: "text-[#00303B] font-thaleah font-light bg-white_yellow",
                                            wrapper: "bg-black h-1/2",
                                        }}
                                    />
                                }
                                {...form.getInputProps("reserePrice")}
                                classNames={{
                                    input: "text-white_yellow font-spritecoder",
                                    label: "text-2xl font-thaleah text-white_yellow",
                                    wrapper: "border-2 border-white_yellow ",
                                }}
                            />
                        </Box>
                        <Slider
                            color="white_yellow"
                            marks={[
                                { value: 0, label: "0%" },
                                { value: 100, label: "10%" },
                            ]}
                            thumbSize={20}
                            labelAlwaysOn={true}
                            max={10}
                            className="mt-10"
                            classNames={{
                                mark: "bg-[#C53A9D]",
                            }}
                        />
                    </Box>
                    <Button
                        className="mt-10 h-[62px] w-full items-center 
                        justify-center gap-1 rounded-none border-2 border-white_yellow bg-violet px-6 text-3xl font-medium text-white duration-500 hover:bg-transparent
                        md:flex md:py-2 lg:px-8 lg:py-3"
                    >
                        Fractionalize
                    </Button>
                </form>
            </Box>
        </Box>
    )
}
export default VaultSetupForm
