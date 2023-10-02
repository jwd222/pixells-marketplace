"use client"
import { cardData } from "../../data/CardData"
import { useAppContext } from "../../../context/appcontext"
import Card from "../../../components/Card"
import { Box } from "@mantine/core"

const SelectCardGrid = ({ type }: { type: string }) => {
    const { selectedCards, handleCardSelect } = useAppContext()

    return (
        <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            {cardData.map((item, index) => (
                <div key={index}>
                    <Card
                        id={index + 1}
                        selected={selectedCards.includes(index + 1)}
                        onSelect={handleCardSelect}
                        title={item.title}
                        user={item.user}
                        image={item.image}
                        type={type}
                    />
                </div>
            ))}
        </div>
    )
}

export default SelectCardGrid
