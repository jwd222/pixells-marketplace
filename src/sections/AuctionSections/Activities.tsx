import { Box } from "@mantine/core"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { chatData } from "../../data/UserChatData"
import { twStyles } from "@/styles/GlobalStyles"

const Activities = () => {
    const activityData = [...chatData]
    const activityPerPage = 8
    const numberOfSlides = Math.ceil(activityData.length / activityPerPage)
    const slideIndices = Array.from({ length: numberOfSlides }).map(
        (_, index) => index
    )

    return (
        <Box className="mt-[2%] w-full flex-auto flex-col border-2 border-white_yellow px-3 md:px-4 lg:w-1/3 xl:px-5">
            <p className={`my-[5%] ${twStyles.title}`}>activities</p>
            <>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="flex items-center justify-center"
                >
                    {slideIndices.map((slideIndex) => (
                        <SwiperSlide
                            key={slideIndex}
                            className="flex h-full items-center justify-center bg-background pb-8 text-center"
                        >
                            <Box className="group flex flex-col text-white">
                                {activityData
                                    .slice(
                                        slideIndex * activityPerPage,
                                        slideIndex * activityPerPage +
                                            activityPerPage
                                    )
                                    .map((item, index) => (
                                        <div
                                            key={index}
                                            className={`m-2 p-2 ${
                                                index % 2 === 0
                                                    ? "bg-[#374C5B]"
                                                    : "bg-[#051F39]"
                                            } flex items-start gap-2 text-xl`}
                                        >
                                            <p className="">{item.username} </p>
                                            <p className="text-start font-bittypix text-[0.6rem] font-thin">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </Box>
    )
}
export default Activities
