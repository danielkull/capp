<template>
  <div>
    <!-- Standard Input Feld benötigt mindestens eine :inputID -->
    <!-- Das InputText hat ein Fallback slot mit einem default Text -->
    <InputText :inputId="'you-need-an-ID'"></InputText>

    <!-- Wenn man ein anderes Input Feld haben möchte dann kann man noch den :inputTypen -->
    <!-- festlegen und z.B. auch den :inputPlaceholder -->
    <InputText
      :inputId="'email'"
      :inputType="'email'"
      :inputPlaceholder="'beispiel@provider.com'"
      >Email</InputText
    >

    <!-- Hier wurde als Beispiel der slot mit dem default Text überschrieben mit "Another Mail"-->
    <InputText
      :inputId="'another-mail'"
      :inputType="'email'"
      :inputPlaceholder="'dontTrust@Rabbits.com'"
      >Another Mail</InputText
    >

    <!-- Wenn man ein Password input element benutz ohne form darum gibt er eine -->
    <!-- Warnmeldung.  -->
    <form action="#">
      <InputText :inputId="'first-password'" :inputType="'password'"
        >Password</InputText
      >
    </form>
  </div>
</template>

<script>
import InputText from "@/components/input-elements/InputText.vue";
export default {
  components: { InputText },
};
</script>

<style scoped></style>
