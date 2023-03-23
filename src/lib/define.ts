type DefinitionsRaw = {
  list: ListRaw[];
}

type ListRaw = {
  definition:   string;
  permalink:    string;
  thumbs_up:    number;
  author:       string;
  word:         string;
  defid:        number;
  current_vote: string;
  written_on:   string;
  example:      string;
  thumbs_down:  number;
}

const defineRaw = async (word: string) => {
  const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${word}`);
  const data = await response.json();

  return data as DefinitionsRaw;
}

export type Definition = {
  word: string;
  writtenOn: string;
  content: string;
  example: string;
  urbanLink: string;
  rating: { up: number; down: number; };
  author: string;
}

export const define = async (word: string): Promise<Definition[]> => {
  const raw = await defineRaw(word);

  return raw.list.map(def => ({
    word: def.word,
    writtenOn: def.written_on,
    author: def.author,
    content: formatContent(def.definition),
    example: formatContent(def.example),
    urbanLink: def.permalink,
    rating: { up: def.thumbs_up, down: def.thumbs_down },
  }))
}

const formatContent = (content: string) => content.replaceAll(/\[([^\[\]]+)\]/g, `<a href="/define/$1" class="underline font-bold">$1</a>`);
