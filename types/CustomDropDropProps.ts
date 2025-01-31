import { Control } from "react-hook-form";

export interface CustomDropDownProps {
    name: string;
    control: Control<any>;
    data: string[];
    placeholder: string;
}