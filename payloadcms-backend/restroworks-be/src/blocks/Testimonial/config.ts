import type { Block } from 'payload'

export const Testimonial: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    { 
      name: 'title', 
      type: 'text', 
      required: true, 
      localized: true,
      label: 'Section Title',
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      maxRows: 10,
      fields: [
        { 
          name: 'quote', 
          type: 'textarea', 
          required: true, 
          localized: true,
          label: 'Testimonial Quote',
        },
        { 
          name: 'author', 
          type: 'text', 
          localized: true,
          label: 'Author Name',
        },
        { 
          name: 'role', 
          type: 'text', 
          localized: true,
          label: 'Author Role/Title',
        },
        { 
          name: 'authorImage', 
          type: 'upload', 
          relationTo: 'media',
          label: 'Author Photo',
        },
      ],
    },
  ],
}
