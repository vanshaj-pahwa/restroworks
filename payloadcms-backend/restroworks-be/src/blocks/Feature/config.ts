import type { Block } from 'payload'

export const Feature: Block = {
  slug: 'feature',
  labels: {
    singular: 'Features Section',
    plural: 'Features Sections',
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
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      maxRows: 10,
      fields: [
        { 
          name: 'title', 
          type: 'text', 
          required: true, 
          localized: true,
          label: 'Feature Title',
        },
        { 
          name: 'description', 
          type: 'textarea', 
          localized: true,
          label: 'Feature Description',
        },
        { 
          name: 'icon', 
          type: 'upload', 
          relationTo: 'media',
          label: 'Feature Icon/Image',
        },
      ],
    },
  ],
}
