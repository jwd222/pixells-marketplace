import TabsComponent from "@/sections/DashboardSections/TabsComponent"
import SmallSidebarButton from "../../../../components/SmallSidebarButton"

const Collection = () => {
    const pageName = "my collection"
    return (
        <div className="mx-2 flex w-full flex-col justify-center font-thaleah text-3xl text-white_yellow sm:mx-5 md:mx-10 lg:w-full lg:text-xl">
            <SmallSidebarButton pageName={pageName} />
            <div className="relative">
                <TabsComponent />S
            </div>
        </div>
    )
}
export default Collection
