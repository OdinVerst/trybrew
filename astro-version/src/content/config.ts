import {defineCollection, z} from 'astro:content';

const recipesCollection = defineCollection(
	{
		type: 'content', schema: z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()).or(z.string()),
			name: z.string(),
			time: z.string().optional(),
			water: z.string(),
			temperature: z.string().optional(),
			coffeeWeight: z.string(),
			author: z.string(),
			authorImg: z.string().optional(),
			recipeLink: z.string().optional(),
		}),
	});

export const collections = {
	'recipes': recipesCollection,
};
