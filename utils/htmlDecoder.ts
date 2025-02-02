import entities from '../data/static/entities.json';

export const decodeHTMLEntities = (text: string): string => {
	return text.replace(
		/&#?\w+;/g,
		(match: string) => (entities as Record<string, string>)[match] || match
	);
};