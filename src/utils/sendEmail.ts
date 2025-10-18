export const sendEmail = async (form: HTMLFormElement) => {

  const formData = new FormData(form);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch(`https://ns-autos-backend.vercel.app/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return { success: data.success, message: data.message };
  } catch (error) {
    return { success: false, message: "Network or server error" };
  }
};
