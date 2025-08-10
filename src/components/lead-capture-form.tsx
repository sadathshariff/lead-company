import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

const leadFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  businessName: z.string().optional(),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  goals: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export default function LeadCaptureForm() {
  const { toast } = useToast();
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
    },
  });

  const submitLead = useMutation({
    mutationFn: async (data: LeadFormData) => {
      return apiRequest('POST', '/api/leads', data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your growth plan request has been submitted. We'll contact you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LeadFormData) => {
    submitLead.mutate(data);
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
        disabled={submitLead.isPending}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 h-14 rounded-2xl text-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 border-0"
      >
{submitLead.isPending ? 'Submitting...' : 'Start My Website Project'}
      </Button>
    </form>
  );
}
