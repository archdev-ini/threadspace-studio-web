'use server';

/**
 * @fileOverview An AI agent to generate page content based on a given prompt.
 *
 * - generatePageContent - A function that generates content for a specific page section.
 * - GeneratePageContentInput - The input type for the generatePageContent function.
 * - GeneratePageContentOutput - The return type for the generatePageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePageContentInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate content for a specific page section.'),
});
export type GeneratePageContentInput = z.infer<typeof GeneratePageContentInputSchema>;

const GeneratePageContentOutputSchema = z.object({
  content: z.string().describe('The generated content for the page section.'),
});
export type GeneratePageContentOutput = z.infer<typeof GeneratePageContentOutputSchema>;

export async function generatePageContent(input: GeneratePageContentInput): Promise<GeneratePageContentOutput> {
  return generatePageContentFlow(input);
}

const generatePageContentPrompt = ai.definePrompt({
  name: 'generatePageContentPrompt',
  input: {schema: GeneratePageContentInputSchema},
  output: {schema: GeneratePageContentOutputSchema},
  prompt: `You are a creative content writer. Please generate content based on the following prompt:\n\nPrompt: {{{prompt}}}`,
});

const generatePageContentFlow = ai.defineFlow(
  {
    name: 'generatePageContentFlow',
    inputSchema: GeneratePageContentInputSchema,
    outputSchema: GeneratePageContentOutputSchema,
  },
  async input => {
    const {output} = await generatePageContentPrompt(input);
    return output!;
  }
);
