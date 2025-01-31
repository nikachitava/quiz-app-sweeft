import { useAxios } from "@/hooks/useAxios";
import { ApiError } from "@/types/ApiError";
import { categoryDataResponse } from "@/types/CategoryDataType";
import { useQuery } from "@tanstack/react-query";



export const useFetchCategoriesQuery = () => {
    return useQuery<categoryDataResponse, ApiError>({
        queryKey: ['getCategories'],
        queryFn: fetchCategories
    })
}

const fetchCategories = async (): Promise<categoryDataResponse> => {
    try {
        
        const { data } = await useAxios.get<categoryDataResponse>(
            "/api_category.php"
        );
        return data;
    } catch (error) {
        throw error;
    }
};




