import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const leadFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  businessName: z.string().optional(),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  goals: z.string().optional(),
  'bot-field': z.string().optional(), // For Netlify honeypot
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export default function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      businessName: '',
      website: '',
      goals: '',
      'bot-field': '',
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    // If honeypot is filled, treat as spam
    if (data['bot-field']) return;

    // Build form data for Netlify
    const formData = new FormData();
    formData.append('form-name', 'lead-capture');
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value ?? '');
    });

    try {
      await fetch('/', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/x-www-form-urlencoded' },
      });
      setIsSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your request. Our team will contact you within 24 hours with your personalized growth plan.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
      name="lead-capture"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="lead-capture" />
      <div style={{ display: 'none' }}>
        <Label htmlFor="bot-field">Don’t fill this out if you're human:</Label>
        <Input id="bot-field" {...form.register('bot-field')} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-left block font-medium">First Name *</Label>
          <Input
            id="firstName"
            {...form.register('firstName')}
            className="w-full"
            placeholder="John"
          />
          {form.formState.errors.firstName && (
            <p className="text-sm text-red-600">{form.formState.errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-left block font-medium">Last Name *</Label>
          <Input
            id="lastName"
            {...form.register('lastName')}
            className="w-full"
            placeholder="Smith"
          />
          {form.formState.errors.lastName && (
            <p className="text-sm text-red-600">{form.formState.errors.lastName.message}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-left block font-medium">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...form.register('email')}
          className="w-full"
          placeholder="john@company.com"
        />
        {form.formState.errors.email && (
          <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="businessName" className="text-left block font-medium">Business Name</Label>
        <Input
          id="businessName"
          {...form.register('businessName')}
          className="w-full"
          placeholder="Your Company LLC"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="website" className="text-left block font-medium">Current Website (Optional)</Label>
        <Input
          id="website"
          type="url"
          {...form.register('website')}
          className="w-full"
          placeholder="https://yourwebsite.com"
        />
        {form.formState.errors.website && (
          <p className="text-sm text-red-600">{form.formState.errors.website.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="goals" className="text-left block font-medium">What's your biggest lead generation challenge?</Label>
        <Textarea
          id="goals"
          {...form.register('goals')}
          rows={4}
          className="w-full"
          placeholder="E.g., 'Not getting enough qualified leads', 'Website traffic but no conversions', 'Need to reduce dependence on paid ads'..."
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 h-14 rounded-2xl text-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 border-0"
      >
        Start My Website Project
      </Button>
    </form>
  );
}
