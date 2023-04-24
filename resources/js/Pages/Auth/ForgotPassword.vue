<script setup>
import { useForm, Head, Link } from '@inertiajs/vue3'
import { mdiEmail } from '@mdi/js'
import LayoutGuest from '@/Layouts/LayoutGuest.vue'
import SectionFullScreen from '@/Components/SectionFullScreen.vue'
import CardBox from '@/Components/CardBox.vue'
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseDivider from '@/Components/BaseDivider.vue'
import BaseButton from '@/Components/BaseButton.vue'
import FormValidationErrors from '@/Components/FormValidationErrors.vue'
import NotificationBarInCard from '@/Components/NotificationBarInCard.vue'
import BaseLevel from '@/Components/BaseLevel.vue'

defineProps({
  status: {
    type: String,
    default: null
  }
})

const form = useForm({
  email: ''
})

const submit = () => {
  form.post(route('password.email'))
}
</script>

<template>
  <LayoutGuest>
    <Head title="Forgot Password" />

    <SectionFullScreen
      v-slot="{ cardClass }"
      bg="gradientBgDark"
    >
      <CardBox
        :class="cardClass"
        form
        @submit.prevent="submit"
      >
        <FormValidationErrors />

        <NotificationBarInCard
          v-if="status"
          color="info"
        >
          {{ status }}
        </NotificationBarInCard>

        <FormField>
          <div class="mb-4 text-sm text-gray-600">
            ¿Olvidaste tu contraseña? Ningún problema. Solo háganos saber su dirección de correo electrónico y le enviaremos un correo electrónico a un enlace de restablecimiento de contraseña que le permitirá elegir una nueva.
          </div>
        </FormField>

        <FormField
          label="Correo electrónico"
          help="Por favor introduzca su correo electrónico"
        >
          <FormControl
            v-model="form.email"
            :icon="mdiEmail"
            autocomplete="email"
            type="email"
            required
          />
        </FormField>

        <BaseDivider />

        <BaseLevel>
          <BaseButton
            type="submit"
            color="info"
            label="Restablecer"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          />
          <Link
            :href="route('login')"
          >
            Volver a inicio de sesión
          </Link>
        </BaseLevel>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
