import { Modal, Button, Box, Checkbox } from "@mantine/core"
import { walletLinks } from "../../data/WalletModalData"
import Image from "next/image"
import { useAppContext } from "../../../context/appcontext"
import { IoNotifications, IoPerson } from "react-icons/io5"
import Link from "next/link"
import { twStyles } from "@/styles/GlobalStyles"

type ModalComponentProps = {
    opened: boolean
    open: () => void
    close: () => void
    isMobile: boolean | undefined
}

const ModalComponent = ({
    opened,
    open,
    close,
    isMobile,
}: ModalComponentProps) => {
    const { wallet, connectWallet } = useAppContext()
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                centered
                classNames={{
                    body: "bg-[#051F39]",
                    content:
                        "border md:border-2 border-white_yellow rounded-none max-w-full xsm:max-w-sm md:max-w-md",
                }}
                withCloseButton={false}
                fullScreen={isMobile}
            >
                <Box className="m-0 flex flex-col justify-between gap-5 p-5 text-center">
                    <p className="font-spritecoder text-lg font-bold uppercase text-[#A5CEA0] lg:text-xl xl:text-2xl">
                        Connect with one of the available wallet providers or
                        create a new wallet
                    </p>

                    <Checkbox
                        defaultChecked={false}
                        label="I have reviewed and agree to the site's disclaimer, privacy policy, and terms of use"
                        color="green"
                        radius="xs"
                        size="md"
                        classNames={{
                            inner: "w-6 md:w-8 h-6 md:h-8 aspect-square",
                            input: "w-full h-full bg-transparent border-4",
                            label: "font-bittypix text-3xs md:text-2xs text-white_yellow text-start uppercase leading-snug",
                        }}
                    />
                    <Box className="flex h-full w-full flex-col border border-red-900">
                        {walletLinks.map((link, index) => (
                            <Link
                                className="flex h-1/3 items-center justify-start rounded-none border-2 border-white_yellow p-0"
                                key={index}
                                href="/dashboard"
                                onClick={() => {
                                    connectWallet()
                                    close()
                                }}
                            >
                                <Image
                                    src={link.image}
                                    alt={link.label}
                                    width={59}
                                    height={59}
                                />
                                <p
                                    key={link.label}
                                    className="flex pl-4 font-thaleah text-white_yellow xs:text-sm xxsm:text-xl sm:text-2xl"
                                >
                                    {link.label}
                                </p>
                            </Link>
                        ))}
                    </Box>
                    <p className="font-bittypix  text-3xs uppercase text-white_yellow md:text-2xs">
                        connect with one of the available wallet providers or
                        create a new wallet
                    </p>
                </Box>
            </Modal>

            {wallet ? (
                <Box className="flex justify-center gap-2">
                    <Button className="flex h-11 items-center justify-center gap-1 rounded-none border-2 border-white_yellow bg-[#DB6666] px-3 font-medium text-white duration-500 hover:bg-transparent lg:px-8 xl:h-14 mxl:h-[62px]">
                        <IoNotifications className="h-auto w-5 xl:w-7" />
                    </Button>
                    <Button className="flex h-11 items-center justify-center gap-1 rounded-none border-2 border-white_yellow bg-violet px-3 font-medium text-white duration-500 hover:bg-transparent lg:px-8 xl:h-14 mxl:h-[62px]">
                        <IoPerson className="h-auto w-5 xl:w-7" />
                    </Button>
                </Box>
            ) : isMobile ? (
                <Button
                    className={`h-11 px-4 lg:text-xl xl:h-14 xl:text-3xl mxl:h-[62px] ${twStyles.button}`}
                    onClick={open}
                >
                    Connect Wallet
                </Button>
            ) : (
                <Button
                    className={`h-11 px-4 md:h-11 lg:text-xl xl:h-14 xl:text-3xl mxl:h-[62px] ${twStyles.button}`}
                    onClick={open}
                >
                    Connect Wallet
                </Button>
            )}
        </>
    )
}

export default ModalComponent
