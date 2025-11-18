import Image from 'next/image';
import type { MediaBlockType } from '@/lib/payload-types';

export function MediaBlockRenderer(block: MediaBlockType) {
  if (!block.media) {
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-800 h-96 flex items-center justify-center">
        <p className="text-gray-500">No media available</p>
      </div>
    );
  }

  const { url, alt, mimeType } = block.media;
  const isImage = mimeType?.startsWith('image/');
  const isVideo = mimeType?.startsWith('video/');

  const positionClass = {
    left: 'float-left mr-4 mb-4 w-1/2',
    center: 'mx-auto my-8 w-full',
    right: 'float-right ml-4 mb-4 w-1/2',
    fullscreen: 'w-full h-96 object-cover',
  }[block.position || 'center'];

  return (
    <figure className={`${positionClass} space-y-2`}>
      {isImage ? (
        <div className="relative w-full h-96">
          <Image
            src={url}
            alt={alt || 'Media content'}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ) : isVideo ? (
        <video
          controls
          className="w-full rounded-lg"
          aria-label={alt || 'Video content'}
        >
          <source src={url} type={mimeType} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Download {alt || 'file'}
        </a>
      )}
      {block.caption && (
        <figcaption className="text-sm text-gray-500 dark:text-gray-400 italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}
