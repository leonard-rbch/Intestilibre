"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Vérification que tous les champs sont remplis
    const allFilled = Object.values(form).every(value => value.trim() !== "");
    if (!allFilled) {
      alert("Veuillez remplir tous les champs avant d'envoyer le message !");
      return;
    }
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      if (res.ok) {
        alert("Message envoyé ✅");
        setForm({ nom: "", prenom: "", email: "", telephone: "", message: "" });
      } else {
        alert("Erreur ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur ❌");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="nom" value={form.nom} onChange={handleChange} placeholder="Nom" className="border p-2 rounded text-[3vw] lg:text-[1.5vw]" style={{ backgroundColor: "#fefaee" }}/>
      <input name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prénom" className="border p-2 rounded text-[3vw] lg:text-[1.5vw]" style={{ backgroundColor: "#fefaee" }}/>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="border p-2 text-[3vw] rounded lg:text-[1.5vw]" style={{ backgroundColor: "#fefaee" }}/>
      <input name="telephone" value={form.telephone} onChange={handleChange} placeholder="Téléphone" className="border p-2 text-[3vw] rounded lg:text-[1.5vw]" style={{ backgroundColor: "#fefaee" }}/>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="border p-2 rounded h-32 resize-none text-[3vw] lg:text-[1.5vw]" style={{ backgroundColor: "#fefaee" }}/>
      <button type="submit" className="p-2 rounded text-black font-bold text-[3vw] lg:text-[1.5vw]" style={{ backgroundColor: "#f06a3d", cursor: "pointer" }} >Envoyer</button>
    </form>
  );
}
