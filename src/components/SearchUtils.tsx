export interface SearchableItem {
  id: string | number;
  title: string;
  course?: string;
  name?: string;
  description?: string;
  assignment?: string;
  instructor?: string;
  type?: string;
}

export function filterItems<T extends SearchableItem>(items: T[], query: string): T[] {
  if (!query.trim()) return items;
  
  const searchTerm = query.toLowerCase();
  
  return items.filter(item => {
    const searchableFields = [
      item.title,
      item.course,
      item.name,
      item.description,
      item.assignment,
      item.instructor,
      item.type,
    ].filter(Boolean) as string[];
    
    return searchableFields.some(field => 
      field.toLowerCase().includes(searchTerm)
    );
  });
}

export function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded">
        {part}
      </mark>
    ) : part
  );
}