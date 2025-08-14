import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    form.reset();
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-fade-in-up">
        <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 hover-glow">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-gray-300 text-lg mb-6 max-w-md mx-auto">
          We've received your request. Our team will contact you within 24 hours with your personalized growth plan.
        </p>
        <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-800/50 card-hover hover-lift">
          <h4 className="font-semibold text-blue-300 mb-2">What happens next?</h4>
          <ul className="text-sm text-blue-200 space-y-1 text-left">
            <li>• We'll analyze your current website and business goals</li>
            <li>• Create a customized lead generation strategy</li>
            <li>• Provide a detailed proposal and timeline</li>
            <li>• Schedule a follow-up call to discuss next steps</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-left text-sm font-medium text-gray-300 mb-2">
            First Name *
          </label>
          <Input
            id="firstName"
            {...form.register('firstName')}
            className="w-full h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-gray-800 text-white placeholder-gray-400"
            placeholder="John"
          />
          {form.formState.errors.firstName && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-left text-sm font-medium text-gray-300 mb-2">
            Last Name *
          </label>
          <Input
            id="lastName"
            {...form.register('lastName')}
            className="w-full h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-gray-800 text-white placeholder-gray-400"
            placeholder="Doe"
          />
          {form.formState.errors.lastName && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-left text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            {...form.register('email')}
            className="w-full h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-gray-800 text-white placeholder-gray-400"
            placeholder="john@company.com"
          />
          {form.formState.errors.email && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-300 mb-2">
            Phone *
          </label>
          <Input
            id="phone"
            type="tel"
            {...form.register('phone')}
            className="w-full h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-gray-800 text-white placeholder-gray-400"
            placeholder="(555) 123-4567"
          />
          {form.formState.errors.phone && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-left text-sm font-medium text-gray-300 mb-2">
          Company *
        </label>
        <Input
          id="company"
          {...form.register('company')}
          className="w-full h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-gray-800 text-white placeholder-gray-400"
          placeholder="Your Company"
        />
        {form.formState.errors.company && (
          <p className="text-red-400 text-sm mt-1">{form.formState.errors.company.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="website" className="block text-left text-sm font-medium text-gray-300 mb-2">
          Website (Optional)
        </label>
        <Input
          id="website"
          type="url"
          {...form.register('website')}
          className="w-full h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-gray-800 text-white placeholder-gray-400"
          placeholder="https://yourcompany.com"
        />
        {form.formState.errors.website && (
          <p className="text-red-400 text-sm mt-1">{form.formState.errors.website.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-left text-sm font-medium text-gray-300 mb-2">
          Tell us about your business goals *
        </label>
        <Textarea
          id="message"
          {...form.register('message')}
          rows={4}
          className="w-full border-2 border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl bg-gray-800 text-white placeholder-gray-400 resize-none"
          placeholder="Describe what you're looking to achieve with your website and lead generation..."
        />
        {form.formState.errors.message && (
          <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>

      {/* Checkbox for phone consent */}
      <div className="flex items-start mb-2">
        <input
          id="phoneConsent"
          type="checkbox"
          className="mt-1 mx-1 accent-blue-600"
          required
        />
        <label htmlFor="phoneConsent" className="text-sm text-gray-400 select-none">
          By providing my phone number,I agree to receive messages from AutoFlow.
        </label>
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-semibold rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
              Processing...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              Get My Free Website Audit
              <ArrowRight className="ml-3 w-5 h-5" />
            </div>
          )}
        </Button>
      </div>

     
    </form>
  );
}
