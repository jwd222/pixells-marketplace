import "@mantine/core/styles.css"
import "./globals.css"
import { MantineProvider, ColorSchemeScript } from "@mantine/core"
import HeaderView from "../../components/Header"
import Footer from "../../components/Footer"
import { AppContextProvider } from "../../context/appcontext"
import localFont from "next/font/local"

const thaleahFont = localFont({
    src: "../fonts/2ThaleahFat.ttf",
    display: "fallback",
    variable: "--font-thaleah",
})

const spritecoderFont = localFont({
    src: "../fonts/Spritecoder_Regular.ttf",
    display: "fallback",
    variable: "--font-spritecoder",
})

const bittypixFont = localFont({
    src: "../fonts/Bittypix_Monospace.otf",
    display: "fallback",
    variable: "--font-bittypix",
})

export const metadata = {
    title: "Pixsells Marketplace",
    description: "Hello world this is Pixsells Marketplace",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body
                className={`${thaleahFont.variable} ${spritecoderFont.variable} ${bittypixFont.variable} bg-background`}
            >
                <AppContextProvider>
                    <MantineProvider>
                        <main className="text-white">
                            <HeaderView />
                            {children}
                            <Footer />
                        </main>
                    </MantineProvider>
                </AppContextProvider>
            </body>
        </html>
    )
}
