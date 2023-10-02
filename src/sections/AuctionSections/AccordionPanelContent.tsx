import { Avatar, Box, Group, Progress, Stack, Text } from "@mantine/core"
import { votersList } from "../../data/AccordionData"

type VotersProps = (typeof votersList)[number]

const AccordionPanelContent = ({
    label,
    image,
    description,
    progress,
}: VotersProps) => {
    return (
        <Group
            wrap="nowrap"
            className="flex flex-col items-center justify-between border-t-2 text-white last:border-b-2 md:flex-row"
        >
            <Box className="flex flex-row items-center justify-start gap-4 text-start">
                <Avatar src={image} radius="0" size="xl" />
                <Box className="flex-col justify-start">
                    <Text className="text-lg xsm:text-2xl">{label}</Text>
                    <Text c="dimmed" fw={400} className="text-lg xsm:text-xl">
                        {description}
                    </Text>
                </Box>
            </Box>

            <Box className="flex w-1/2 flex-col items-center justify-between xsm:flex-row">
                <Text className="text-lg xsm:text-2xl">{`${progress}%`}</Text>
                <Box className="mr-2 flex w-2/3 flex-col justify-between">
                    <Progress
                        color="#FF7777"
                        radius="xs"
                        size="lg"
                        value={progress}
                        classNames={{
                            root: "bg-[#F1F2DA]",
                        }}
                    />
                </Box>
            </Box>
        </Group>
    )
}

export default AccordionPanelContent
