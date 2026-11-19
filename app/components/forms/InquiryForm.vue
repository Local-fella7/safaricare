<script setup lang="ts">
import { useSafariInquiry } from '~/composables/useSafariInquiry';
import { experienceOptions, experienceLabels, type Experience } from '#shared/schemas/safariInquiry';

const props = withDefaults(defineProps<{
  initialExperience?: string;
  initialSafariName?: string;
  initialMessage?: string;
  initialDuration?: string;
}>(), {
  initialExperience: '',
  initialSafariName: '',
  initialMessage: '',
  initialDuration: ''
});

const {
  formData,
  errors,
  isSubmitting,
  isSuccess,
  submitMessage,
  submitInquiry,
  resetForm
} = useSafariInquiry();

const experienceIcons: Record<Experience, string> = {
  luxury: 'bi bi-gem',
  honeymoon: 'bi bi-heart',
  family: 'bi bi-people',
  photography: 'bi bi-camera',
  'safari-zanzibar': 'bi bi-water',
  trekking: 'bi bi-triangle',
  camping: 'bi bi-fire',
  adventure: 'bi bi-compass'
};

const experienceIconColors: Record<Experience, string> = {
  luxury: 'text-sc-gold',
  honeymoon: 'text-danger',
  family: 'text-info',
  photography: 'text-primary',
  'safari-zanzibar': 'text-primary',
  trekking: 'text-success',
  camping: 'text-warning',
  adventure: 'text-sc-forest'
};

if (props.initialExperience && (experienceOptions as readonly string[]).includes(props.initialExperience)) {
  formData.experience = props.initialExperience as Experience;
}

const prefillNotes: string[] = [];
if (props.initialSafariName) {
  prefillNotes.push(`Inquiry regarding: ${props.initialSafariName}`);
}
if (props.initialMessage) {
  prefillNotes.push(props.initialMessage);
}
if (prefillNotes.length) {
  formData.message = `${prefillNotes.join('. ')}. `;
}

if (props.initialDuration) {
  formData.duration = props.initialDuration;
}

const handleSubmit = async () => {
  await submitInquiry();
};
</script>

<template>
  <div class="inquiry-form-card bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light">
    <div v-if="isSuccess" class="success-state text-center py-4">
      <div class="success-icon-box bg-success bg-opacity-10 text-success rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
        <i class="bi bi-check-circle-fill display-6"></i>
      </div>
      <h3 class="font-serif fw-bold text-sc-forest h4 mb-2">Safari Inquiry Received!</h3>
      <p class="text-muted mb-4" style="max-width: 500px; margin: 0 auto;">
        {{ submitMessage }}
      </p>
      <div class="d-flex justify-content-center gap-3">
        <button type="button" class="btn btn-sc-outline-forest btn-sm" @click="resetForm">Submit Another Request</button>
        <NuxtLink to="/safaris" class="btn btn-sc-primary btn-sm">Explore More Safaris</NuxtLink>
      </div>
    </div>

    <form v-else @submit.prevent="handleSubmit" novalidate>
      <div class="form-intro mb-4">
        <span class="badge-sc-gold d-inline-block mb-2">Bespoke Proposal</span>
        <h3 class="font-serif fw-bold text-sc-forest h4 mb-1">Tell Us About Your Ideal Tanzania Safari</h3>
        <p class="small text-muted mb-0">
          No commitment required. Receive a detailed customized day-by-day itinerary and price quote within 24 hours.
        </p>
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold small text-sc-forest mb-2">
          1. What style of safari experience do you envision? *
        </label>
        <div class="experience-options row g-2" :class="{ 'is-invalid': errors.experience }">
          <div v-for="option in experienceOptions" :key="option" class="col-6 col-md-4">
            <input
              :id="`exp-${option}`"
              v-model="formData.experience"
              type="radio"
              class="btn-check"
              :value="option"
            />
            <label
              class="btn btn-outline-secondary w-100 text-start p-2 small"
              :for="`exp-${option}`"
              :class="{ 'border-danger': errors.experience }"
            >
              <i :class="[experienceIcons[option], experienceIconColors[option]]" class="me-1"></i>
              {{ experienceLabels[option] }}
            </label>
          </div>
        </div>
        <div v-if="errors.experience" class="invalid-feedback d-block">
          {{ errors.experience }}
        </div>
      </div>

      <div class="row g-3 mb-3">
        <div class="col-md-4">
          <label for="travelers" class="form-label small fw-bold text-sc-forest">Number of Travelers *</label>
          <input
            id="travelers"
            v-model.number="formData.travelers"
            type="number"
            min="1"
            max="30"
            class="form-control"
            :class="{ 'is-invalid': errors.travelers }"
          />
          <div v-if="errors.travelers" class="invalid-feedback">{{ errors.travelers }}</div>
        </div>

        <div class="col-md-4">
          <label for="arrivalDate" class="form-label small fw-bold text-sc-forest">Approximate Travel Date</label>
          <input
            id="arrivalDate"
            v-model="formData.arrivalDate"
            type="date"
            class="form-control"
            :class="{ 'is-invalid': errors.arrivalDate }"
          />
          <div v-if="errors.arrivalDate" class="invalid-feedback">{{ errors.arrivalDate }}</div>
        </div>

        <div class="col-md-4">
          <label for="duration" class="form-label small fw-bold text-sc-forest">Estimated Duration</label>
          <select id="duration" v-model="formData.duration" class="form-select">
            <option value="3-5 days">3–5 Days (Quick Discovery)</option>
            <option value="6-8 days">6–8 Days (Classic Circuit)</option>
            <option value="9-12 days">9–12 Days (In-depth Journey)</option>
            <option value="13+ days">13+ Days (Grand Tanzania & Zanzibar)</option>
          </select>
        </div>
      </div>

      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <label for="fullName" class="form-label small fw-bold text-sc-forest">Your Full Name *</label>
          <input
            id="fullName"
            v-model="formData.fullName"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.fullName }"
            placeholder="e.g. Sarah Jenkins"
          />
          <div v-if="errors.fullName" class="invalid-feedback">{{ errors.fullName }}</div>
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label small fw-bold text-sc-forest">Email Address *</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            placeholder="sarah@example.com"
          />
          <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
        </div>

        <div class="col-12">
          <label for="phone" class="form-label small fw-bold text-sc-forest">Phone / WhatsApp Number (with Country Code)</label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            class="form-control"
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label small fw-bold text-sc-forest">Special Requests, Wildlife Interests or Questions</label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="3"
          class="form-control"
          :class="{ 'is-invalid': errors.message }"
          placeholder="Tell us what you would love to experience: Big cat tracking, balloon flight, specific lodges, dietary requirements..."
        ></textarea>
        <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
      </div>

      <div class="form-check mb-4">
        <input
          id="consentCheck"
          v-model="formData.consent"
          type="checkbox"
          class="form-check-input"
          :class="{ 'is-invalid': errors.consent }"
        />
        <label class="form-check-label small text-muted" for="consentCheck">
          I consent to Safari Care contacting me regarding this custom safari proposal. Your information will never be shared with third parties.
        </label>
        <div v-if="errors.consent" class="invalid-feedback d-block">{{ errors.consent }}</div>
      </div>

      <input
        id="website"
        name="website"
        v-model="formData.website"
        type="text"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
        style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;"
      />

      <button
        type="submit"
        class="btn btn-sc-gold btn-lg w-100 py-3 text-white fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status"></span>
        <i v-else class="bi bi-send-fill"></i>
        <span>{{ isSubmitting ? 'Sending Inquiry...' : 'Submit Safari Inquiry' }}</span>
      </button>

      <div class="text-center mt-3 text-muted small">
        <i class="bi bi-lock-fill text-sc-gold me-1"></i>
        100% Privacy Guaranteed &bull; Arusha Direct Support
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.inquiry-form-card {
  background-color: #ffffff;
}

.experience-options.is-invalid {
  border: 1px solid var(--bs-danger);
  border-radius: 0.5rem;
  padding: 0.25rem;
}
</style>
