import { Text } from "@mantine/core"
import { charactersList } from "../../data/AccordionData"

type VoteInfoProps = (typeof charactersList)[number]

const VoteInfo = ({ price, progress }: VoteInfoProps) => {
    return (
        <>
            <Text className="font-spritecoder text-xl">
                dFT565qSd6as2D5g6sd5fAze5sd6f9sD
            </Text>
            <Text className="font-bittypix text-xs">
                Has started a vote for a reserve price of :{" "}
            </Text>
            <Text className="font-thaleah text-3xl">{price}</Text>
            <Text className="font-bittypix text-xs">
                the total result of votes is :{" "}
            </Text>
            <Text className="font-thaleah text-3xl">{progress}%</Text>
        </>
    )
}
export default VoteInfo
