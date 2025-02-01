import { z } from "zod";

export const quizSetupFormSchema = z.object({
    playerName: z.string().min(2, "Name must be at least 2 characters"),
    category: z.number().min(0, "Category is required"),
    difficulty: z.string().min(1, "You must select difficulty"),
});