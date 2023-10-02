import { Button, ButtonGroup, Text } from "@mantine/core"
import Image from "next/image"
import { LiaCopy } from "react-icons/lia"
import { BsArrowUpRight } from "react-icons/bs"

const UserInfo = () => {
    return (
        <div className="flex flex-col items-center border-2 border-white_yellow">
            <p className="text-2xl">NFT hunter</p>
            <div className="flex w-full flex-col items-center border-[#00303B] sm:flex-row">
                <Image
                    src="/accordion-logos/3.png"
                    width={100}
                    height={100}
                    alt="userImage"
                    className="m-2 aspect-square w-[4rem]"
                />
                <Button
                    className="flex w-full gap-2 rounded-none bg-white_yellow px-2 text-black"
                    classNames={{
                        inner: "w-full",
                        label: "w-full justify-between",
                    }}
                >
                    <Text
                        truncate="end"
                        classNames={{
                            root: "text-base m-0 xsm:text-lg sm:text-xl",
                        }}
                    >
                        0xqsd5qs1d3sd32q1d0xqsd5qs1d3sd32q1
                    </Text>
                    <LiaCopy className="scale-[2] text-black" />
                    <BsArrowUpRight />
                </Button>
            </div>
            <div className="flex w-full text-center uppercase">
                <div className="w-full border">
                    <p className="font-spritecoder text-sm xsm:text-base sm:text-lg">
                        Total Value{" "}
                    </p>
                    <p className="text-base sm:text-xl">0.1564</p>
                </div>
                <div className="w-full flex-col border">
                    <p className="font-spritecoder text-sm xsm:text-base sm:text-lg">
                        # of vaults{" "}
                    </p>
                    <p className="text-base sm:text-xl">3</p>
                </div>
            </div>
        </div>
    )
}
export default UserInfo
