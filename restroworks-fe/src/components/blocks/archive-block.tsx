import type { ArchiveBlockType } from '@/lib/payload-types';

export function ArchiveBlockRenderer(block: ArchiveBlockType) {
  // Archive block typically lists posts/documents from a collection
  // This is a placeholder that renders the block information

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Archive</h2>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {block.label && <p>Label: {block.label}</p>}
            {block.archive_limit && (
              <p>Showing up to {block.archive_limit} items</p>
            )}
            {block.categories && block.categories.length > 0 && (
              <p>Categories: {block.categories.join(', ')}</p>
            )}
          </div>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded p-4 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Archive content will be populated from your collection in Payload CMS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
