import { useAxios } from '@/hooks/useAxios';
import { QuizStoreType } from '@/types/QuizStoreType'
import { create } from 'zustand'

export const useQuizStore = create<QuizStoreType> ((set)=> ({
    points: 0,
    currentQuestion: 0,
    questionsList: [],
    setQuestionList: async (category, difficulty) => {
        try {
            const response = await useAxios.get(`/api.php?amount=10&category=${category}&difficulty=${difficulty}`)

            set({ questionsList: response.data.results })
        } catch (error) {
            throw error;
        }
    },
}))


