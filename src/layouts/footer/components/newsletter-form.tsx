'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { FOOTER_NEWSLETTER } from '@/layouts/footer/components/footer-data'

const newsletterSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập email').email('Email không hợp lệ'),
})

type NewsletterValues = z.infer<typeof newsletterSchema>

export function NewsletterForm() {
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(_values: NewsletterValues) {
    form.reset()
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      className='mt-5 w-full max-w-sm xsm:max-w-none'
    >
      <Controller
        name='email'
        control={form.control}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            className='gap-1.5'
          >
            <div className='flex w-full overflow-hidden rounded-sm bg-white/15'>
              <label
                className='sr-only'
                htmlFor='footer-newsletter-email'
              >
                {FOOTER_NEWSLETTER.placeholder}
              </label>
              <Input
                {...field}
                id='footer-newsletter-email'
                type='email'
                autoComplete='email'
                placeholder={FOOTER_NEWSLETTER.placeholder}
                aria-invalid={fieldState.invalid}
                className='h-auto min-w-0 flex-1 rounded-none border-0 bg-transparent px-3.5 py-2.5 font-manrope text-sm text-white shadow-none placeholder:text-white/55 focus-visible:border-0 focus-visible:ring-0 md:text-sm'
              />
              <Button
                type='submit'
                disabled={form.formState.isSubmitting}
                className='h-auto shrink-0 rounded-none border-0 bg-[#E2B570] px-5 py-2.5 font-manrope text-sm font-bold tracking-wide text-[#001E40] hover:bg-[#E2B570]/90 hover:opacity-100 hover:cursor-pointer'
              >
                {FOOTER_NEWSLETTER.submit}
              </Button>
            </div>
            <FieldError
              errors={[fieldState.error]}
              className='text-xs text-[#F4B700]'
            />
          </Field>
        )}
      />
    </form>
  )
}
