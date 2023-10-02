import BigSidebar from "../../../components/BigSidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="mx-auto mt-[2rem] flex w-full gap-4 font-thaleah lg:max-w-[90%]">
            <div className="xl:[5rem] mt-[4.5rem] hidden h-screen w-1/4 flex-col justify-between lg:mt-[3rem] lg:flex xl:mt-[4.5rem]">
                {/* Include shared UI here e.g. a header or sidebar */}
                <BigSidebar />
            </div>
            {children}
        </section>
    )
}
