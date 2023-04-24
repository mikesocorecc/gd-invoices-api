<script setup>
import { useForm, usePage, Head } from '@inertiajs/vue3'
import { computed } from 'vue'
import { mdiAccount, mdiEmail, mdiFormTextboxPassword } from '@mdi/js'
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

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  terms: [],
})

const hasTermsAndPrivacyPolicyFeature = computed(() => usePage().props.value?.jetstream?.hasTermsAndPrivacyPolicyFeature )

const submit = () => {
  form
    .transform(data => ({
      ... data,
      terms: form.terms && form.terms.length
    }))
    .post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
  <LayoutGuest>
    <Head title="Register" />

    <SectionFullScreen
      v-slot="{ cardClass }"
      bg="gradientBgDark"
    >
      <CardBox
        :class="cardClass"
        class="my-24"
        form
        @submit.prevent="submit"
      >
        <FormValidationErrors />

        <FormField
          label="Nombre"
          label-for="name"
          help="por favor, escriba su nombre"
        >
          <FormControl
            v-model="form.name"
            id="name"
            :icon="mdiAccount"
            autocomplete="name"
            type="text"
            required
          />
        </FormField>

        <FormField
          label="Correo electrónico"
          label-for="email"
          help="Por favor introduzca su correo electrónico"
        >
          <FormControl
            v-model="form.email"
            id="email"
            :icon="mdiEmail"
            autocomplete="email"
            type="email"
            required
          />
        </FormField>

        <FormField
          label="Contraseña"
          label-for="password"
          help="Ingrese una nueva contraseña"
        >
          <FormControl
            v-model="form.password"
            id="password"
            :icon="mdiFormTextboxPassword"
            type="password"
            autocomplete="new-password"
            required
          />
        </FormField>

        <FormField
          label="Confirmar Contraseña"
          label-for="password_confirmation"
          help="Por favor, confirme su contraseña"
        >
          <FormControl
            v-model="form.password_confirmation"
            id="password_confirmation"
            :icon="mdiFormTextboxPassword"
            type="password"
            autocomplete="new-password"
            required
          />
        </FormField>

        <FormCheckRadioGroup
          v-if="hasTermsAndPrivacyPolicyFeature"
          v-model="form.terms"
          name="remember"
          :options="{ agree: 'Acepto los términos' }"
        />

        <BaseDivider />

        <BaseButtons>
          <BaseButton
            type="submit"
            color="info"
            label="Registro"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          />
          <BaseButton
            :route-name="route('login')"
            color="info"
            outline
            label="Iniciar sesion"
          />
        </BaseButtons>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
