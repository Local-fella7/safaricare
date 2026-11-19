import { safariInquirySchema } from '~~/shared/schemas/safariInquiry';

export function useSafariInquiry() {
  const isSubmitting = ref(false);
  const isSuccess = ref(false);
  const submitMessage = ref('');
  const errors = ref<Record<string, string>>({});

  const formData = reactive({
    fullName: '',
    email: '',
    phone: '',
    experience: 'luxury' as const,
    travelers: 2,
    arrivalDate: '',
    duration: '6-8 days',
    budget: 'luxury',
    message: '',
    consent: true,
    website: ''
  });

  const resetForm = () => {
    formData.fullName = '';
    formData.email = '';
    formData.phone = '';
    formData.experience = 'luxury';
    formData.travelers = 2;
    formData.arrivalDate = '';
    formData.duration = '6-8 days';
    formData.budget = 'luxury';
    formData.message = '';
    formData.consent = true;
    formData.website = '';
    errors.value = {};
    isSuccess.value = false;
    submitMessage.value = '';
  };

  const submitInquiry = async () => {
    errors.value = {};
    submitMessage.value = '';

    // 1. Client-Side Validation via Zod Schema
    const result = safariInquirySchema.safeParse(formData);

    if (!result.success) {
      const flattened = result.error.flatten().fieldErrors;
      for (const [key, messages] of Object.entries(flattened)) {
        if (messages && messages.length > 0) {
          errors.value[key] = messages[0];
        }
      }
      return { ok: false, error: 'Validation failed' };
    }

    // 2. Submit to Nitro Server Endpoint
    isSubmitting.value = true;
    try {
      const response = await $fetch<{ ok: boolean; message: string; inquiryId: string }>('/api/inquiries', {
        method: 'POST',
        body: result.data
      });

      isSuccess.value = true;
      submitMessage.value = response.message;
      return { ok: true, data: response };
    } catch (err: any) {
      if (err.data?.data?.errors) {
        const serverErrors = err.data.data.errors;
        for (const [key, messages] of Object.entries(serverErrors)) {
          if (Array.isArray(messages) && messages.length > 0) {
            errors.value[key] = messages[0];
          }
        }
      } else {
        submitMessage.value = 'Failed to submit inquiry. Please try again or message us on WhatsApp.';
      }
      return { ok: false, error: err };
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitMessage,
    submitInquiry,
    resetForm
  };
}
