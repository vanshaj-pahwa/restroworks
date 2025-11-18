import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'customCTA',
  labels: {
    singular: 'Call to Action',
    plural: 'Call to Actions',
  },
  fields: [
    { 
      name: 'text', 
      type: 'text', 
      required: true, 
      localized: true,
      label: 'Main Heading',
      admin: {
        description: 'Primary CTA heading (e.g., "Ready to Get Started?")',
      },
    },
    { 
      name: 'description', 
      type: 'textarea', 
      localized: true,
      label: 'Description',
      admin: {
        description: 'Supporting text below heading (e.g., "Join thousands of satisfied customers...")',
      },
    },
    { 
      name: 'buttonText', 
      type: 'text', 
      localized: true,
      label: 'Primary Button Text',
      admin: {
        description: 'Text for the main button (e.g., "Get Started Free")',
      },
    },
    { 
      name: 'buttonLink', 
      type: 'text',
      label: 'Primary Button Link',
      admin: {
        description: 'URL for the button (e.g., "/contact")',
      },
    },
    { 
      name: 'secondaryButtonText', 
      type: 'text', 
      localized: true,
      label: 'Secondary Button Text (Optional)',
      admin: {
        description: 'Text for secondary button (e.g., "Learn More")',
      },
    },
    { 
      name: 'secondaryButtonLink', 
      type: 'text',
      label: 'Secondary Button Link',
      admin: {
        description: 'URL for secondary button',
      },
    },
  ],
}
