import type { ContentBlockType } from '@/lib/payload-types';

// Helper function to extract text from Lexical JSON structure
function extractTextFromLexical(richText: any): string {
  if (!richText) return '';
  
  if (typeof richText === 'string') {
    return richText;
  }

  if (richText.root && richText.root.children) {
    return richText.root.children
      .map((node: any) => {
        if (node.children && Array.isArray(node.children)) {
          return node.children
            .map((child: any) => child.text || '')
            .join('');
        }
        return node.text || '';
      })
      .join('\n');
  }

  return '';
}

export function ContentBlockRenderer(block: ContentBlockType) {
  // Handle columns structure from Payload CMS
  const columns = (block as any).columns;
  
  if (!columns || columns.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((column: any, index: number) => {
          const text = extractTextFromLexical(column.richText);
          return (
            <div key={index} className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
