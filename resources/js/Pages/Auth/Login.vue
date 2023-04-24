<script setup>
import { useForm, Head, Link } from '@inertiajs/vue3'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import LayoutGuest from '@/Layouts/LayoutGuest.vue'
import SectionFullScreen from '@/Components/SectionFullScreen.vue'
import CardBox from '@/Components/CardBox.vue'
import FormCheckRadioGroup from '@/Components/FormCheckRadioGroup.vue'
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseDivider from '@/Components/BaseDivider.vue'
import BaseButton from '@/Components/BaseButton.vue'
import BaseButtons from '@/Components/BaseButtons.vue'
import FormValidationErrors from '@/Components/FormValidationErrors.vue'
import NotificationBarInCard from '@/Components/NotificationBarInCard.vue'
import BaseLevel from '@/Components/BaseLevel.vue'

const props = defineProps({
  canResetPassword: Boolean,
  status: {
    type: String,
    default: null
  }
})

const form = useForm({
  email: '',
  password: '',
  remember: []
})

const submit = () => {
  form
    .transform(data => ({
      ... data,
      remember: form.remember && form.remember.length ? 'on' : ''
    }))
    .post(route('login'), {
      onFinish: () => form.reset('password'),
    })
}
</script>

<template>
  <LayoutGuest>
    <Head title="Login" />

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

        <FormField
          label="Correo electrónico"
          label-for="email"
          help="Por favor introduzca su correo electrónico"
        >
          <FormControl
            v-model="form.email"
            :icon="mdiAccount"
            id="email"
            autocomplete="email"
            type="email"
            required
          />
        </FormField>

        <FormField
          label="Contraseña"
          label-for="password"
          help="Por favor, introduzca su contraseña"
        >
          <FormControl
            v-model="form.password"
            :icon="mdiAsterisk"
            type="password"
            id="password"
            autocomplete="current-password"
            required
          />
        </FormField>

        <FormCheckRadioGroup
          v-model="form.remember"
          name="remember"
          :options="{ remember: 'Recordar' }"
        />

        <BaseDivider />

        <BaseLevel>
          <BaseButtons>
            <BaseButton
              type="submit"
              color="info"
              label="Iniciar Sesion"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
            />
            <BaseButton
              v-if="canResetPassword"
              :route-name="route('password.request')"
              color="info"
              outline
              label="Restablecer"
            />
          </BaseButtons>
          <Link
            :href="route('register')"
          >
            Registro
          </Link>
        </BaseLevel>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
