'use server';

import type { FormState } from './schemas';
import { contactFormSchema } from './schemas';

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Use NEXT_PUBLIC_ prefix since it's defined in .env.local
    const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_CMS_URL || 'http://localhost:3000';
    
    // Submit to contact-submissions collection
    const response = await fetch(`${payloadUrl}/api/contact-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...validatedFields.data,
        source: 'Contact Form',
      }),
    });

    if (!response.ok) {
      // You might want to parse the response body for more specific errors
      const errorBody = await response.text();
      console.error('Payload submission failed:', errorBody);
      throw new Error(`Submission failed with status: ${response.status}`);
    }

    console.log('Successfully submitted to CMS:', validatedFields.data);

    return { status: 'success', message: 'Your message has been sent!' };
  } catch (e) {
    console.error(e);
    // It's good practice to not expose raw error messages to the client
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
