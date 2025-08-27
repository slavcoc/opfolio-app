import React from "react";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Контакт | Opfolio",
  description: "Странка за контакт со Opfolio",
};

export default function KontaktPage() {
  return (
    <main className="w-full theme-background">
      {/* <div className="w-full">
        <KontaktHeader />
      </div> */}
      <div className="w-full">
        <ContactForm />
      </div>
    </main>
  );
}
