import { defineStore } from 'pinia';
import { ref } from 'vue';
import supabase from '@/supabase';

export const useAuthStore = defineStore('auth', () => {

  const user = ref<any>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const signIn = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;

    try {
      const { data: data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      user.value = data.user;

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const signOut = async () => {
    loading.value = true;

    try {
      await supabase.auth.signOut();
      user.value = null;

    } catch (err: any) {
      error.value = err.message;

    } finally {
      loading.value = false;
    }
  };

  const fetchCurrentUser = async () => {
    const currentUser = supabase.auth.getUser();

    if (currentUser) {
      user.value = currentUser;
    }
  };

  return {
    user,
    loading,
    error,
    signIn,
    signOut,
    fetchCurrentUser,
  };
});