import { buttonData } from "@/data/ButtonData"
import { Button } from "@mantine/core"
import Link from "next/link"
import UserInfo from "./UserInfo"

const SmallSidebar = () => {
    const buttons = buttonData.map((item, index) => (
        <Link href={item.href} key={index}>
            <Button
                className="w-full items-center rounded-none border-2 border-white_yellow font-thaleah font-light uppercase 
            text-white_yellow lg:h-16 lg:text-3xl"
            >
                {item.name}
            </Button>
        </Link>
    ))
    return (
        <div className="max-w-[30rem]">
            <UserInfo />
            {buttons}
        </div>
    )
}
export default SmallSidebar
