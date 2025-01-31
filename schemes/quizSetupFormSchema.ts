import { z } from "zod";

export const quizSetupFormSchema = z.object({
    playerName: z.string().min(6, "Name must be at least 6 characters"),
    category: z.string().min(1, "You must select category"),
    difficulty: z.string().min(1, "You must select difficulty"),
});