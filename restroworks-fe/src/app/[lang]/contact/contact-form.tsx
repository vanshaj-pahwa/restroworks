'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactForm } from '@/lib/actions';
import { contactFormSchema } from '@/lib/schemas';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import React from 'react';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

type ContactFormValues = z.infer<typeof contactFormSchema>;

type Dictionary = {
  form: {
    name_label: string;
    name_placeholder: string;
    email_label: string;
    email_placeholder: string;
    message_label: string;
    message_placeholder: string;
    submit_button: string;
    success_title: string;
    success_description: string;
    error_title: string;
    error_description: string;
  };
};

export function ContactForm({ dictionary }: { dictionary: Dictionary }) {
  const [isPending, startTransition] = React.useTransition();
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitContactForm(
        { status: 'idle', message: '' },
        formData
      );

      if (result.status === 'success') {
        setIsSuccess(true);
        toast({
          title: dictionary.form.success_title,
          description: dictionary.form.success_description,
        });
        form.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        toast({
          variant: 'destructive',
          title: dictionary.form.error_title,
          description: result.message || dictionary.form.error_description,
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-semibold">
                {dictionary.form.name_label}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={dictionary.form.name_placeholder}
                  className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-semibold">
                {dictionary.form.email_label}
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={dictionary.form.email_placeholder}
                  className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-semibold">
                {dictionary.form.message_label}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={dictionary.form.message_placeholder}
                  className="min-h-[150px] border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-colors resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Sent!
            </>
          ) : (
            <>
              {dictionary.form.submit_button}
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
