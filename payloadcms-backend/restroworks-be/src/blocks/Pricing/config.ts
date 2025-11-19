import type { Block } from 'payload'

export const Pricing: Block = {
  slug: 'pricing',
  interfaceName: 'PricingBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Simple, Transparent Pricing',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Section Subtitle',
      defaultValue: 'Choose the plan that\'s right for your business',
    },
    {
      name: 'plans',
      type: 'array',
      label: 'Pricing Plans',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Plan Name',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price (e.g., $29 or Custom)',
          required: true,
        },
        {
          name: 'period',
          type: 'text',
          label: 'Billing Period',
          defaultValue: '/mo',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Short Description',
        },
        {
          name: 'popular',
          type: 'checkbox',
          label: 'Mark as Popular',
          defaultValue: false,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          minRows: 1,
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Feature',
              required: true,
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Get Started',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link',
          defaultValue: '/contact',
        },
      ],
    },
  ],
}
