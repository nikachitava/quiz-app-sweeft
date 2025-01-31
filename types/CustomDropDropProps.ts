import { Control } from "react-hook-form";
import { categoryDataType } from "./CategoryDataType";

export interface CustomDropDownProps {
    name: string;
    control: Control<any>;
    data?: categoryDataType[];
    placeholder: string;
}
