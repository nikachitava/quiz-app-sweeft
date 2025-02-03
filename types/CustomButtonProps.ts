import { AntDesign } from "@expo/vector-icons";

export interface CustomButtonProps {
    onPress: () => void;
    variant?: "primary" | "secondary";
    icon?: keyof typeof AntDesign.glyphMap;
    label: string;
    disabled?: boolean;
    fullWidth?: boolean;
}