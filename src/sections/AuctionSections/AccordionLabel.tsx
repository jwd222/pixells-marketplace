import { Avatar, Box, Group, Progress, Text } from "@mantine/core"
import { charactersList } from "../../data/AccordionData"

type AccordionLabelProps = (typeof charactersList)[number]

const AccordionLabel = ({
    label,
    image,
    description,
    price,
    progress,
}: AccordionLabelProps) => {
    return (
        <Box className="flex flex-col justify-between text-white md:flex-row">
            <Box className="flex flex-col justify-center gap-4 text-start sm:flex-row sm:justify-start">
                <Avatar src={image} radius="0" size="lg" />
                <Box className="flex-col sm:flex-row sm:justify-start">
                    <Text className="text-base md:text-2xl">{label}</Text>
                    <Text c="dimmed" fw={400} className="text-base md:text-xl">
                        {description}
                    </Text>
                </Box>
            </Box>
            <Box className="flex flex-col items-center justify-between md:w-1/2 md:flex-row">
                <Text className="text-lg xsm:text-2xl">{price}</Text>
                <Text className="text-lg xsm:text-2xl">{`${progress}%`}</Text>
                <Box className="mr-2 flex w-2/3 flex-col justify-between">
                    <Progress
                        color="#83B07E"
                        radius="xs"
                        size="lg"
                        value={progress}
                        classNames={{
                            root: "bg-[#FF7777]",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default AccordionLabel
