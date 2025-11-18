import type { FormBlockType } from '@/lib/payload-types';

export function FormBlockRenderer(block: FormBlockType) {
  // Form block renders a form from Payload CMS
  // The form data would typically come from block.form ID reference

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Form</h2>

          {block.label && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">{block.label}</p>
          )}

          <div className="bg-white dark:bg-gray-800 rounded p-6 space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                placeholder="Your message..."
              />
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md">
              Submit
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Connected to form: {block.form ? `${block.form}` : 'Contact Form'}
          </p>
        </div>
      </div>
    </section>
  );
}
