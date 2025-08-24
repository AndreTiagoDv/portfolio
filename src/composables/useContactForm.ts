import { ref } from "vue";

export function useContactForm() {
  const name = ref("");
  const email = ref("");
  const message = ref("");
  const loading = ref(false);
  
  const sendForm = async () => {
    if (!name.value || !email.value || !message.value) {
      alert("Preencha todos os campos!");
      return;
    }
  
    loading.value = true;
  
    try {
      const response = await fetch(
        "https://lxrzkspegyjlgmfsgkli.supabase.co/functions/v1/resend-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value,
          }),
        }
      );
  
      const result = await response.json();
  
      if (response.ok && result.success) {
        alert("Mensagem enviada com sucesso!");
        name.value = "";
        email.value = "";
        message.value = "";
      } else {
        alert("Erro ao enviar email: " + (result.error || "Erro desconhecido"));
      }
    }  catch (err) {
      if (err instanceof Error) {
        alert("Erro ao enviar formulário: " + err.message);
      } else {
        alert("Erro ao enviar formulário: " + String(err));
      }
    } finally {
      loading.value = false;
  }
}
return{
    name,
    email,
    message,
    loading,
    sendForm
  }

};
