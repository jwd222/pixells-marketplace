import { useForm } from "@mantine/form"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { Box, TextInput, NumberInput, Slider, Text } from "@mantine/core"
import FractionModal from "./FractionModal"
import FormSelectInput from "../../../components/FormSelectInput"
import { twStyles } from "@/styles/GlobalStyles"

const VaultSetupForm = () => {
    const form = useForm({
        initialValues: {
            name: "",
            amount: "",
            symbol: "",
            reserveSymbol: "",
            reservePrice: "",
            sliderRange: "",
        },
    })
    const [modalOpened, { open, close }] = useDisclosure(false)

    const isMobile = useMediaQuery("(max-width: xxsm)")

    return (
        <Box className="border-2 border-white_yellow">
            <p className="mt-6 text-center font-thaleah text-[#F1F2DA] md:mt-10">
                setup vault
            </p>

            <div className="px-4 md:px-6 xl:px-8 mxl:px-10">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Box>
                        <TextInput
                            size="md"
                            label="Name:"
                            placeholder="Type here"
                            {...form.getInputProps("name")}
                            className="w-full"
                            classNames={twStyles.inputComp}
                        />
                        <div className="mt-2 flex flex-col justify-between gap-6 sm:flex-row">
                            <NumberInput
                                size="md"
                                label="Amount:"
                                placeholder="Type here"
                                {...form.getInputProps("amount")}
                                hideControls
                                className="basis-2/3"
                                classNames={twStyles.inputComp}
                            />
                            <TextInput
                                size="md"
                                label="Symbol:"
                                placeholder="Type here"
                                {...form.getInputProps("symbol")}
                                className="basis-1/3"
                                classNames={twStyles.inputComp}
                            />
                        </div>

                        <Text className="mt-4 font-thaleah text-2xl text-white_yellow lg:max-2xl:text-xl">
                            reserve price:{" "}
                        </Text>

                        <FormSelectInput form={form} />

                        <Slider
                            color="#C53A9D"
                            showLabelOnHover={false}
                            max={10}
                            radius="none"
                            {...form.getInputProps("sliderRange")}
                            marks={[
                                { value: 0, label: "0%" },
                                { value: 10, label: "10%" },
                            ]}
                            classNames={{
                                root: "mt-10 pb-8",
                                thumb: "bg-[#C53A9D]",
                                label: "bg-white text-black font-spritecoder font-bold text-2xl px-3",
                                markLabel: "text-white_yellow text-3xl",
                            }}
                        />
                    </Box>

                    <FractionModal
                        opened={modalOpened}
                        close={close}
                        open={open}
                        isMobile={isMobile}
                    />
                </form>
            </div>
        </Box>
    )
}
export default VaultSetupForm
