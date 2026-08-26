"use client";

import { useState } from "react";

import Button from "@/components/button";

export default function FreebieForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    societyStatus: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Honeypot
    if (formData.website) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/freebie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors du téléchargement");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "SoStudio-guide.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>
        <label htmlFor="lastName" className="flex flex-col">
          <span className="text-nuit text-xs font-public">Nom</span>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
            className="block w-full mt-1 p-1 border border-orange rounded-sm focus:ring-1 focus:ring-orange focus:outline-none bg-blanc duration-300"
          />
        </label>
        <label htmlFor="firstName" className="flex flex-col">
          <span className="text-nuit text-xs font-public">Prénom</span>

          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
            className="block w-full mt-1 p-1 border border-orange rounded-sm focus:ring-1 focus:ring-orange focus:outline-none bg-blanc duration-300"
          />
        </label>
        <label htmlFor="email" className="flex flex-col">
          <span className="text-nuit text-xs font-public">Email</span>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="block w-full mt-1 p-1 border border-orange rounded-sm focus:ring-1 focus:ring-orange focus:outline-none bg-blanc duration-300"
          />
        </label>
        <label htmlFor="societyStatus" className="flex flex-col">
          <span className="text-nuit text-xs font-public">Statut de votre entreprise</span>
          <input
            type="text"
            value={formData.societyStatus}
            onChange={(e) => setFormData({ ...formData, societyStatus: e.target.value })}
            required
            className="block w-full mt-1 p-1 border border-orange rounded-sm focus:ring-1 focus:ring-orange focus:outline-none bg-blanc duration-300"
          />
        </label>

        <Button variant="tertiary" disabled={loading}>
          {loading ? "Téléchargement..." : "Je récupère mon freebie"}
        </Button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>⚠️ {error}</p>}
    </div>
  );
}
