import { Container, Button } from "@mantine/core"
import Link from "next/link"
import DividerWithMiddleText from "../../../components/DividerWithMiddleText"
import { twStyles } from "@/styles/GlobalStyles"

const Content = () => {
    return (
        <div className="crossHeader flex min-h-screen w-full items-center justify-center">
            <Container
                size={"100%"}
                fluid
                className="mx-auto flex max-w-[90%] flex-col items-center justify-between text-center font-thaleah 
                md:max-w-screen-md xl:max-w-screen-lg"
            >
                <p className="font-thaleah text-4xl text-[#F1F2DA] xl:text-5xl">
                    Unable to{" "}
                    <span className="bg-[#DB6666] px-2 text-black">
                        acquire
                    </span>{" "}
                    a complete{" "}
                    <span className="bg-[#FFCE96] px-2 text-black">NFT ?</span>
                </p>
                <p className="w-3/4 font-spritecoder text-2xl text-[#F1F2DA] xl:text-3xl">
                    Acquire a fraction and enjoy all the benefits associated
                    with fractional ownership.
                </p>

                <Link href="/trade" className="mt-4 inline-block">
                    <Button
                        className={`h-11 w-full items-center px-6 xsm:h-[50px] xsm:text-2xl sm:h-[62px] sm:text-3xl md:flex md:h-14 md:py-2 md:text-2xl lg:py-3 
                    xl:h-[62px] xl:text-3xl ${twStyles.button}`}
                    >
                        Trade a fraction
                    </Button>
                </Link>

                <DividerWithMiddleText text="or" color="#F1F2DA" size="5" />

                <p className="font-thaleah text-4xl text-[#F1F2DA] xl:text-5xl">
                    Looking to maximize your NFT&apos;s{" "}
                    <span className="bg-[#83B07E] px-2">profitability</span>?
                </p>
                <p className="w-3/4 font-spritecoder text-2xl text-[#F1F2DA] xl:text-3xl">
                    Sell a portion of the fractions while retaining ownership of
                    the rest.
                </p>

                <Link href="/fraction" className="mt-4 inline-block">
                    <Button
                        className={`h-11 w-full items-center px-6 xsm:h-[50px] xsm:text-2xl sm:h-[62px] sm:text-3xl md:flex md:h-14 md:py-2 md:text-2xl lg:py-3 
                    xl:h-[62px] xl:text-3xl ${twStyles.button}`}
                    >
                        fraction your nft
                    </Button>
                </Link>
                <Link href="/auction" className="mt-4 inline-block">
                    <Button
                        className={`h-11 w-full items-center gap-1 px-6  xsm:h-[50px] xsm:text-2xl sm:h-[62px] sm:text-3xl 
                    md:flex md:h-14 md:py-2 md:text-2xl lg:py-3 xl:h-[62px] xl:text-3xl ${twStyles.button}`}
                    >
                        Auction
                    </Button>
                </Link>
            </Container>
        </div>
    )
}
export default Content
