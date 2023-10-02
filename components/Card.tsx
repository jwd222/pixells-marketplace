import { Box, Text } from "@mantine/core"
import Image from "next/image"

const Card = ({
    id,
    selected,
    onSelect,
    title,
    image,
    user,
    type,
}: {
    id: number
    selected: boolean
    onSelect: (id: number) => void
    title: string
    image: string
    user: string
    type: string
}) => {
    const handleCardClick = () => {
        onSelect(id)
    }
    return (
        <Box
            className={`relative m-2 flex cursor-pointer flex-col border-2 border-card_border text-black`}
            onClick={handleCardClick}
        >
            <div className="border-b-2 border-card_border ">
                <Image
                    src={image}
                    alt="image"
                    width={200}
                    height={100}
                    className="w-full"
                />
            </div>
            <div className="gap-0 bg-[#828F9C] p-1 text-center">
                <h2 className="text-lg leading-tight text-[#FFCE96] md:text-xl xl:text-2xl mxl:text-3xl">
                    {title}
                </h2>
                <h5 className="-mt-2.5 font-spritecoder text-sm text-white_yellow md:text-base xl:text-lg">
                    {user}
                </h5>
            </div>

            {selected && (
                <div className="absolute flex h-[20%] w-full items-center justify-center bg-[#5ac24e]/90 text-white">
                    <p className="flex justify-center text-lg xxsm:text-xl xsm:text-4xl ">
                        {type === "main" ? "Main" : "Selected"}
                    </p>
                </div>
            )}
        </Box>
    )
}

export default Card
