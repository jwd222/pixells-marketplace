"use client"
import { cardData } from "../../data/CardData"
import { useAppContext } from "../../../context/appcontext"
import Card from "../../../components/Card"
import { Box } from "@mantine/core"

const AuctionCardGrid = ({ type }: { type: string }) => {
    const { selectedCards, handleCardSelect } = useAppContext()

    return (
        <div className="flex flex-wrap">
            {cardData.map((item, index) => (
                <Box key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
                    <Card
                        id={index + 1}
                        selected={selectedCards.includes(index + 1)}
                        onSelect={handleCardSelect}
                        title={item.title}
                        user={item.user}
                        image={item.image}
                        type={type}
                    />
                </Box>
            ))}
        </div>
    )
}

export default AuctionCardGrid
