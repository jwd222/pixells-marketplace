const DividerWithMiddleText = ({
    text,
    color,
    size,
}: {
    text: string
    color: "#F1F2DA" | "#00303B"
    size: string
}) => {
    // console.log(color)
    return (
        <div className="mt-4 w-3/4 py-7">
            <div className="flex items-center">
                <hr
                    className="flex-grow"
                    style={{
                        borderTop: `${size}px solid ${color}`,
                    }}
                />
                <span className="px-4 font-spritecoder text-2xl uppercase text-[#F1F2DA]">
                    {text}
                </span>
                <hr
                    className="flex-grow"
                    style={{
                        borderTop: `${size}px solid ${color}`,
                    }}
                />
            </div>
        </div>
    )
}
export default DividerWithMiddleText
