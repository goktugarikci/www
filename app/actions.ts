"use server";

import { connectDB } from "@/lib/mongodb";
import Application from "@/models/Application";

export async function submitApplication(formData: FormData) {
  try {
    await connectDB();
    
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      expertise: formData.get("expertise"),
      github: formData.get("github"),
      linkedin: formData.get("linkedin"),
      coverLetter: formData.get("coverLetter"),
    };

    // Boş alan kontrolü
    if (Object.values(data).some(value => !value)) {
      return { success: false, error: "Tüm alanları doldurmanız gerekmektedir." };
    }

    await Application.create(data);
    return { success: true };
  } catch (error) {
    console.error("MongoDB Kayıt Hatası:", error);
    return { success: false, error: "Veritabanına bağlanılamadı." };
  }
}