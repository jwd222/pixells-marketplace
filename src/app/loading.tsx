import { Progress } from "@mantine/core"

export default function Loading() {
    return (
        <div
            className="fixed left-0 top-0 h-screen w-full"
            style={{ zIndex: 999999 }}
        >
            <Progress color="orange" value={100} striped />
        </div>
    )
}
