
export interface ISelectOption {
    label: string;
    value: string | number;
}

export const Immobilientyp: ISelectOption[] = [
    {
        label: "2 Bedroom",
        value: "2 Bedroom",
    },
    {
        value: "3 Bedroom",
        label: "3 Bedroom",
    },
    {
        label: "4 Bedroom",
        value: "4 Bedroom",
    },
    {
        label: "Penthouse",
        value: "Penthouse",
    },
    {
        label: "Villa",
        value: "Villa",
    },
    {
        label: "Townhall",
        value: "Townhall",
    }
]
export const Budgetrahmen: ISelectOption[] = [
    {
        label: "bis AED 2 Millionen",
        value: "bis AED 2 Millionen",
    },
    {
        value: "AED 2 bis 5 Millionen",
        label: "AED 2 bis 5 Millionen",
    },
    {
        label: "AED 5 to 10 Millionen",
        value: "AED 5 to 10 Millionen",
    },
    {
        label: " Town House",
        value: " Town House",
    }
]