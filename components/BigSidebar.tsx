import { buttonData } from "@/data/ButtonData"
import { Button } from "@mantine/core"
import Link from "next/link"
import UserInfo from "./UserInfo"

const BigSidebar = () => {
    const buttons = buttonData.map((item, index) => (
        <Link href={item.href} key={index}>
            <Button
                className="h-20 w-full items-center rounded-none border-2 border-white_yellow p-4 font-thaleah text-3xl uppercase 
            text-white_yellow"
            >
                {item.name}
            </Button>
        </Link>
    ))
    return (
        <div className="flex h-full flex-col justify-between">
            <UserInfo />
            {buttons}
        </div>
    )
}
export default BigSidebar
