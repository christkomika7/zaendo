import localFont from "next/font/local";


export const generalSans = localFont({
    src: [
        {
            path: "../app/fonts/GeneralSans-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/GeneralSans-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/fonts/GeneralSans-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../app/fonts/GeneralSans-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../app/fonts/GeneralSans-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-general-sans",
});
export const ibmPlexMono = localFont({
    src: [
        {
            path: "../app/fonts/IBMPlexMono-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../app/fonts/IBMPlexMono-Regular.ttf",
            weight: "400",
            style: "normal",
        }
    ],
    variable: "--font-general-sans",
});