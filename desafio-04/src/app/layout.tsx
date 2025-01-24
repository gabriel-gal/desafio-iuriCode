import { Archivo } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"]
})

export const metadata: Metadata = { title: "Login" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="pt-br">
            <body className={`${archivo.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
