<script setup lang="ts">
import InquiryForm from '~/components/forms/InquiryForm.vue';
import { CONTACT } from '~/utils/contact';

useSeoMeta({
  title: 'Contact Safari Care | Arusha Office, WhatsApp & Inquiries',
  description: 'Get in touch with Safari Care. Headquartered in Arusha, Tanzania. Contact our safari specialists via phone, email, WhatsApp, or online inquiry.'
});
</script>

<template>
  <div class="contact-view py-5">
    <div class="container py-lg-3">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-sc-forest text-decoration-none">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>

      <div class="row g-5 align-items-start">
        <!-- Contact Details Left -->
        <div class="col-lg-5">
          <span class="badge-sc-terracotta d-inline-block mb-2">Get In Touch</span>
          <h1 class="font-serif fw-bold text-sc-forest display-6 mb-3">
            Speak with an Arusha Safari Specialist
          </h1>
          <p class="text-muted mb-4">
            We are here to answer your questions, advise on the best safari seasons, and prepare a custom proposal tailored to your dates and preferences.
          </p>

          <!-- Contact Cards -->
          <div class="d-flex flex-column gap-3 mb-4">
            <div class="card p-3 rounded-3 bg-white border-0 shadow-sm d-flex flex-row align-items-center gap-3">
              <div class="icon-box bg-sc-forest text-white rounded-circle p-3 fs-4 shadow-sm">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <div class="fw-bold text-sc-forest">Arusha Headquarters</div>
                <div class="small text-muted">{{ CONTACT.company }}, {{ CONTACT.address }}</div>
              </div>
            </div>

            <div class="card p-3 rounded-3 bg-white border-0 shadow-sm d-flex flex-row align-items-center gap-3">
              <div class="icon-box bg-sc-gold text-white rounded-circle p-3 fs-4 shadow-sm">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div>
                <div class="fw-bold text-sc-forest">Email Us</div>
                <div class="small text-muted">
                  <a :href="`mailto:${CONTACT.email}`" class="text-decoration-none text-muted">{{ CONTACT.email }}</a>
                </div>
              </div>
            </div>

            <div class="card p-3 rounded-3 bg-white border-0 shadow-sm d-flex flex-row align-items-center gap-3">
              <div class="icon-box bg-success bg-opacity-10 text-success rounded-circle p-3 fs-4">
                <i class="bi bi-whatsapp"></i>
              </div>
              <div>
                <div class="fw-bold text-sc-forest">WhatsApp Chat</div>
                <div class="small text-muted">
                  <a :href="CONTACT.whatsapp" target="_blank" rel="noopener noreferrer" class="text-success text-decoration-none fw-semibold">
                    {{ CONTACT.mobile2Label }} (Click to chat)
                  </a>
                </div>
              </div>
            </div>

            <div class="card p-3 rounded-3 bg-white border-0 shadow-sm d-flex flex-row align-items-center gap-3">
              <div class="icon-box bg-sc-gold text-white rounded-circle p-3 fs-4 shadow-sm">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <div>
                <div class="fw-bold text-sc-forest">Call Our Arusha Office</div>
                <div class="small text-muted">
                  Tel/Fax:
                  <a :href="`tel:${CONTACT.phoneHref}`" class="text-muted text-decoration-none d-block">{{ CONTACT.phoneLabel }}</a>
                  Mobile:
                  <a :href="`tel:${CONTACT.mobile1Href}`" class="text-muted text-decoration-none d-block">{{ CONTACT.mobile1Label }}</a>
                </div>
              </div>
            </div>

            <div class="card p-3 rounded-3 bg-white border-0 shadow-sm d-flex flex-row align-items-center gap-3">
              <div class="icon-box bg-sc-forest text-white rounded-circle p-3 fs-4 shadow-sm">
                <i class="bi bi-clock-fill"></i>
              </div>
              <div>
                <div class="fw-bold text-sc-forest">Office Hours</div>
                <div class="small text-muted">Mon–Sat: 8:00 AM – 6:30 PM (EAT / UTC+3)<br />24/7 emergency safari support for traveling guests</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Inquiry Form Right -->
        <div class="col-lg-7">
          <InquiryForm />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-view {
  background-color: var(--sc-ivory);
}

.icon-box {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
