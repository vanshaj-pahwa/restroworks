import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  access: {
    create: anyone, // Allow anyone to submit contact forms
    read: authenticated, // Only authenticated users can read submissions
    update: authenticated, // Only authenticated users can update
    delete: authenticated, // Only authenticated users can delete
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea', required: true },
    { 
      name: 'source', 
      type: 'text', 
      defaultValue: 'Contact Form',
      admin: {
        readOnly: true,
      },
    },
  ],
}
