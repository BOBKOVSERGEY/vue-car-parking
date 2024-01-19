import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useProfile = defineStore("profile", () => {
  const errors = reactive({});
  const status = ref("");
  const loading = ref(false);
  const form = reactive({
    name: '',
    email: ''
  });

  function resetForm() {
    form.name = "";
    form.email = "";

    errors.value = {};
    status.value = "";
  }

  async function fetchProfile() {
    return window.axios
      .get("profile")
      .then((response) => {
        form.name = response.data.name;
        form.email = response.data.email;
      })
  }

  async function updateProfile() {
    loading.value = true;
  }
});