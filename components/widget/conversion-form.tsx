'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { ReloadIcon } from '@radix-ui/react-icons';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CRYPTO_CURRENCIES, FIAT_CURRENCIES } from '@/lib/constants/currencies';
import { ConversionFormData, conversionSchema } from '@/lib/validations/conversion-schema';
import { CurrencyInput } from './currency-input';
import { PaymentMethodSelect } from './payment-method-select';
import { WalletSelector } from './wallet-selector';
import { ComingSoonFormData, comingSoonSchema } from '@/lib/validations/coming-soon-schema';

export function ConversionWidget() {
  const [activeTab, setActiveTab] = useState('crypto-to-cash');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<ConversionFormData>({
    resolver: zodResolver(conversionSchema),
    defaultValues: {
      payAmount: 1.0,
      payCurrency: 'ETH',
      receiveAmount: 1.0,
      receiveCurrency: 'NGN',
      payFrom: '',
      payTo: ''
    }
  });

  const payAmount = form.watch('payAmount');
  const payCurrency = form.watch('payCurrency');
  const receiveCurrency = form.watch('receiveCurrency');

  useEffect(() => {
    if (payAmount && payCurrency && receiveCurrency) {
      const mockExchangeRate = 1500;
      const receiveAmount = payAmount * mockExchangeRate;
      form.setValue('receiveAmount', receiveAmount);
    }
  }, [payAmount, payCurrency, receiveCurrency, form]);

  const onSubmit = async (data: ConversionFormData) => {
    if (Object.keys(form.formState.errors).length > 0) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const txId = `NC${Math.random().toString().slice(2, 11)}`;
      router.push(`/success?txId=${txId}`);
    } catch (error) {
      console.error('Conversion error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-[28px] md:rounded-[32px] px-6 py-6 md:px-12 md:py-8 shadow-2xl animate-scale-in">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="crypto-to-cash">Crypto to cash</TabsTrigger>
          <TabsTrigger value="cash-to-crypto">Cash to crypto</TabsTrigger>
          <TabsTrigger value="crypto-to-fiat-loan">Crypto to fiat loan</TabsTrigger>
        </TabsList>

        <div className="min-h-[480px] md:min-h-[520px]">
          <TabsContent value="crypto-to-cash" className="space-y-4 mt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="payAmount"
                  render={({ field }) => (
                    <FormItem>
                      <CurrencyInput
                        label="You pay"
                        value={field.value}
                        currency={form.watch('payCurrency')}
                        currencies={CRYPTO_CURRENCIES}
                        onValueChange={field.onChange}
                        onCurrencyChange={(currency) => form.setValue('payCurrency', currency)}
                        error={form.formState.errors.payAmount?.message}
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="receiveAmount"
                  render={({ field }) => (
                    <FormItem>
                      <CurrencyInput
                        label="You receive"
                        value={field.value}
                        currency={form.watch('receiveCurrency')}
                        currencies={FIAT_CURRENCIES}
                        onValueChange={field.onChange}
                        onCurrencyChange={(currency) => form.setValue('receiveCurrency', currency)}
                        error={form.formState.errors.receiveAmount?.message}
                        readOnly
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="payFrom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                        Pay from
                      </FormLabel>
                      <FormControl>
                        <WalletSelector value={field.value} onSelect={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="payTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                        Pay to
                      </FormLabel>
                      <FormControl>
                        <PaymentMethodSelect value={field.value} onSelect={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-3 md:pt-4">
                  <Button
                    type="submit"
                    className="w-full h-12 md:h-14 bg-nova hover:bg-nova text-nova-light-teal text-base md:text-lg font-semibold rounded-full transition-all"
                    disabled={isLoading}
                  >
                    {isLoading && <ReloadIcon className="mr-2 h-5 w-5 animate-spin" />}
                    {isLoading ? 'Processing...' : 'Convert now'}
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="cash-to-crypto" className="mt-0">
            <ComingSoon type="Cash to Crypto" />
          </TabsContent>

          <TabsContent value="crypto-to-fiat-loan" className="mt-0">
            <ComingSoon type="Crypto to Fiat Loan" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

function ComingSoon({ type }: { type: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const comingSoonForm = useForm<ComingSoonFormData>({
    resolver: zodResolver(comingSoonSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: ComingSoonFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);

      comingSoonForm.reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center min-h-[480px] md:min-h-[520px]">
      <div className="text-center space-y-4 md:space-y-6 px-4 max-w-md w-full">
        <h2 className="text-2xl md:text-3xl font-medium text-nova font-clash mt-20">
          Coming Soon!
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          {type} is almost here.
          <br />
          Enter your email and we'll let you know the moment it's live.
        </p>

        <Form {...comingSoonForm}>
          <form onSubmit={comingSoonForm.handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
            <FormField
              control={comingSoonForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel className="text-xs md:text-sm font-medium text-gray-700">
                    Email
                  </FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="w-full px-4 py-2.5 md:py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-900 focus:border-transparent text-sm md:text-base"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm text-green-700 font-medium">
                  ✓ Thank you! We'll notify you when {type} is live.
                </p>
              </div>
            )}

            <div className="pt-20">
              {' '}
              <Button
                type="submit"
                className="w-full h-11 md:h-12 bg-nova hover:bg-nova text-nova-light-teal font-semibold rounded-full text-sm md:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? 'Submitting...' : 'Update me'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
