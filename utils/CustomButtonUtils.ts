export const getButtonStyle = (variant: "primary" | "secondary") => {
    switch (variant) {
        case "primary":
            return "bg-primary";
        case "secondary":
            return "bg-gray-200";
        default:
            return "bg-primary";
    }
};

export const getTextStyle = (variant: "primary" | "secondary") => {
    switch (variant) {
        case "primary":
            return "text-neutral";
        case "secondary":
            return "text-gray-700";
        default:
            return "text-neutral";
    }
};

export const getIconColor = (variant: "primary" | "secondary") => {
    switch (variant) {
        case "primary":
            return "white";
        case "secondary":
            return "#374151";
        default:
            return "white";
    }
};