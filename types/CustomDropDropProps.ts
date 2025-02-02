import { Control } from "react-hook-form";

export interface CustomDropDownProps<T> {
    name: string;
    control: Control<any>;
    data?: T[];
    placeholder: string;
    valueField?: 'id' | 'name';
    getDisplayText?: (item: T) => string;
}
