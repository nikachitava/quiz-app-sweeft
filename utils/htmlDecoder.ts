export const decodeHTMLEntities = (text: string): string => {
	const entities: { [key: string]: string } = {
		"&#039;": "'",
		"&quot;": '"',
		"&lt;": "<",
		"&gt;": ">",
		"&amp;": "&",
	};

	return text.replace(
		/&#?\w+;/g,
		(match: string) => entities[match] || match
	);
};
