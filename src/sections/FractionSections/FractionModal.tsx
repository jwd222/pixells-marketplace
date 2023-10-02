import { Modal, Button, Box, Checkbox } from "@mantine/core"
import { walletLinks } from "../../data/WalletModalData"
import Image from "next/image"
import { twStyles } from "@/styles/GlobalStyles"

type ModalComponentProps = {
    opened: boolean
    open: () => void
    close: () => void
    isMobile: boolean | undefined
}

const FractionModal = ({
    opened,
    open,
    close,
    isMobile,
}: ModalComponentProps) => {
    return (
        <Box className="w-full">
            <Modal
                opened={opened}
                onClose={close}
                centered
                classNames={{
                    body: "bg-[#051F39]",
                    content: "border-4 border-white_yellow rounded-none",
                }}
                withCloseButton={false}
                fullScreen={isMobile}
                size={"xl"}
            >
                <Box className="flex flex-col justify-between p-1 text-center font-thaleah sm:p-10 lg:gap-5">
                    <Box className="flex w-full flex-col text-sm uppercase text-white_yellow xxsm:text-lg sm:text-3xl">
                        <Box className="flex justify-between">
                            <p>Marketplace fees : </p>
                            <p>0.2 sol</p>
                        </Box>
                        <Box className="flex justify-between">
                            <p>Transactions fees : </p>
                            <p>0.00001 sol</p>
                        </Box>
                        <hr className="flex-grow border-t-2 border-[#F1F2DA]" />
                        <Box className="flex justify-between">
                            <p>total : </p>
                            <p>0.20001 sol</p>
                        </Box>
                    </Box>
                    <Box className="flex w-full flex-col gap-2 sm:flex-row">
                        <Button
                            className="mt-10 h-[62px] w-full items-center justify-center gap-1 rounded-none border-2 border-white_yellow 
                        bg-[#D59292] text-xl font-medium text-white duration-500 hover:bg-transparent sm:text-3xl md:flex md:py-2 lg:px-8 
                        lg:py-3"
                            onClick={close}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="h-[62px] w-full items-center justify-center gap-1 rounded-none border-2 border-white_yellow 
                            bg-[#79BE77] text-xl font-medium text-white duration-500 hover:bg-transparent sm:mt-10 sm:text-3xl md:flex md:py-2 
                            lg:px-8 lg:py-3"
                            onClick={close}
                        >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Button
                className={`mt-10 h-[62px] xsm:h-[50px] xsm:text-2xl sm:h-[62px] ${twStyles.button}`}
                onClick={open}
            >
                Fractionalize
            </Button>
        </Box>
    )
}

export default FractionModal
