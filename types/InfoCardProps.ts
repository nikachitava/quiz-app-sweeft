import { AntDesign } from "@expo/vector-icons";

export interface InfoCardProps {
    icon: keyof typeof AntDesign.glyphMap;
    label: string;
    value: string;
    iconColor?: string;
    labelColor?: string;
    valueColor?: string;
  }