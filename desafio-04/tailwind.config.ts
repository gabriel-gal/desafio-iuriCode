import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                backgroundImage: "#F3FFF2",
                brandColor: "#1e9e6a",
                dark: "#1a202c",
                gray10: "#656769",
                gray20: "#e8e8e8",
                gray30: "#f7fafc",
            },
        },
    },
    plugins: [],
} satisfies Config;