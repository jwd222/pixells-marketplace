type ButtonData = {
    name: string
    panels: string[]
    href: string
}

export const buttonData: ButtonData[] = [
    {
        name: "general",
        panels: ["active bids, past bids"],
        href: "/dashboard",
    },
    {
        name: "account",
        panels: ["active bids, past bids"],
        href: "/dashboard/account",
    },
    {
        name: "my collection",
        panels: ["active bids, past bids"],
        href: "/dashboard/collection",
    },
    {
        name: "vaults and baskets",
        panels: ["active bids, past bids"],
        href: "/dashboard/vaults",
    },
    {
        name: "my bids",
        panels: ["active bids, past bids"],
        href: "/dashboard/bids",
    },
]
