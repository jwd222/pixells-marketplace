import { Box, NumberInput, Select } from "@mantine/core"

const classNames = {
    root: "w-full",
    input: "text-white_yellow font-spritecoder text-lg md:text-xl xl:text-2xl bg-transparent h-10 md:h-12 mxl:h-14 border-2 border-white rounded-none w-full flex-grow",
    label: "lg:max-2xl:text-xl text-2xl font-thaleah text-white_yellow leading-none",
}

const FormSelectInput = ({ form }: any) => {
    return (
        <Box className="flex w-full">
            <Select
                placeholder="Pick value"
                data={["SOL", "BTC", "DOGE"]}
                defaultValue="BTC"
                {...form.getInputProps("reserveSymbol")}
                classNames={{
                    label: "text-[#E1E3E9]/90 text-sm xlH:xsm:text-base mb-1",
                    input: "bg-white_yellow border border-white_yellow rounded-none text-black text-2xl px-4 xlH:xsm:text-2xl h-10 md:h-12 mxl:h-14 w-24 xsm:w-32 font-thaleah",
                    dropdown: "max-h-[200px] overflow-hidden",
                    option: "text-2xl font-thaleah",
                }}
            />
            <NumberInput
                size="md"
                placeholder="Type here"
                {...form.getInputProps("reservePrice")}
                hideControls
                classNames={classNames}
            />
        </Box>
    )
}
export default FormSelectInput
