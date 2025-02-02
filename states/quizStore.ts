import { useAxios } from '@/hooks/useAxios';
import { QuizStoreType } from '@/types/QuizStoreType'
import { create } from 'zustand'

export const useQuizStore = create<QuizStoreType> ((set)=> ({
    points: 0,
    incrementPoint: () => set((state) => ({points: state.points + 1})),
    currentQuestion: 0,
    nextQuestion: () => set((state) => ({currentQuestion: state.currentQuestion + 1})),
    questionsList: [],
    setQuestionList: async (category, difficulty) => {
        try {
            const response = await useAxios.get(`/api.php?amount=10&category=${category}&difficulty=${difficulty}`)

            set({ questionsList: response.data.results })
        } catch (error) {
            throw error;
        }
    },
    resetQuiz: () => set({
        points: 0,
        currentQuestion: 0,
        questionsList: [],
      })

}))


