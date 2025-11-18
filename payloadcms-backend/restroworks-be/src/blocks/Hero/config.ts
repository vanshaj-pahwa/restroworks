import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    { 
      name: 'badge', 
      type: 'text', 
      localized: true,
      label: 'Badge Text (Optional)',
      admin: {
        description: 'Small badge text above headline (e.g., "New Feature", "Limited Offer")',
      },
    },
    { 
      name: 'headline', 
      type: 'text', 
      required: true, 
      localized: true,
      label: 'Main Headline',
      admin: {
        description: 'Primary headline - will be displayed prominently',
      },
    },
    { 
      name: 'highlightedText', 
      type: 'text', 
      localized: true,
      label: 'Highlighted Text',
      admin: {
        description: 'Text to highlight with gradient (optional)',
      },
    },
    { 
      name: 'subheadline', 
      type: 'textarea', 
      localized: true,
      label: 'Subheadline',
      admin: {
        description: 'Supporting text below the headline',
      },
    },
    { 
      name: 'cta_button', 
      type: 'text', 
      localized: true,
      label: 'Primary CTA Button Text',
      admin: {
        description: 'Text for the main call-to-action button',
      },
    },
    { 
      name: 'cta_link', 
      type: 'text', 
      label: 'Primary CTA Link',
      admin: {
        description: 'URL for the primary button (e.g., /contact)',
      },
    },
    { 
      name: 'secondary_cta_button', 
      type: 'text', 
      localized: true,
      label: 'Secondary CTA Button Text',
      admin: {
        description: 'Text for the secondary button (optional)',
      },
    },
    { 
      name: 'secondary_cta_link', 
      type: 'text', 
      label: 'Secondary CTA Link',
      admin: {
        description: 'URL for the secondary button',
      },
    },
    { 
      name: 'image', 
      type: 'upload', 
      relationTo: 'media',
      label: 'Hero Image',
      admin: {
        description: 'Optional hero image or illustration',
      },
    },
    {
      name: 'style',
      type: 'select',
      label: 'Hero Style',
      defaultValue: 'gradient',
      options: [
        { label: 'Gradient Background', value: 'gradient' },
        { label: 'Image Background', value: 'image' },
        { label: 'Minimal', value: 'minimal' },
        { label: 'Split Screen', value: 'split' },
      ],
      admin: {
        description: 'Choose the visual style for the hero section',
      },
    },
    {
      name: 'showStats',
      type: 'checkbox',
      label: 'Show Statistics',
      defaultValue: false,
      admin: {
        description: 'Display trust indicators/statistics below the hero',
      },
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics',
      admin: {
        condition: (data) => data.showStats === true,
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Stat Value',
          admin: {
            description: 'e.g., "99.9%", "10K+", "24/7"',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
          label: 'Stat Label',
          admin: {
            description: 'e.g., "Uptime", "Happy Customers", "Support"',
          },
        },
      ],
    },
  ],
}
