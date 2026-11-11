
import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const quoteSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().max(40).default(""),
  country: z.string().max(100).default(""),
  dates: z.string().max(150).default(""),
  travelers: z.number().int().min(1).max(30),
  type: z.string().max(100).default(""),
  destinations: z.string().max(300).default(""),
  budget: z.string().max(100).default(""),
  message: z.string().max(3000).default(""),
  lang: z.enum(["fr", "en", "de", "it"]),
});

const contactSchema = z.object({
  fullName: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(3000),
  lang: z.enum(["fr", "en", "de", "it"]),
});

function getTransporter() {
  const user = process.env["SMTP_USER"];
  const pass = process.env["SMTP_PASS"];

  if (!user || !pass) {
    throw new Error("Email service is not configured.");
  }

  return nodemailer.createTransport({
    host: "mail.infomaniak.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

async function sendNotification(subject: string, text: string, replyTo: string) {
  const user = process.env["SMTP_USER"];
  const recipient = process.env["CONTACT_EMAIL"];

  if (!user || !recipient) {
    throw new Error("Email service is not configured.");
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Voyager Autrement" <${user}>`,
      to: recipient,
      replyTo,
      subject,
      text,
    });
  } catch (error) {
    console.error("Email delivery failed:", error);
    throw new Error("Unable to send your request. Please try again later.");
  }
}

export const sendQuoteRequest = createServerFn({ method: "POST" })
  .validator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const text = [
      "Nouvelle demande de devis",
      "",
      `Prénom : ${data.firstName}`,
      `Nom : ${data.lastName}`,
      `Email : ${data.email}`,
      `Téléphone : ${data.phone}`,
      `Pays : ${data.country}`,
      `Dates : ${data.dates}`,
      `Voyageurs : ${data.travelers}`,
      `Type de voyage : ${data.type}`,
      `Destinations : ${data.destinations}`,
      `Budget : ${data.budget}`,
      "",
      "Message :",
      data.message || "Aucun message",
      "",
      `Langue du formulaire : ${data.lang}`,
    ].join("\n");

    await sendNotification(
      "Nouvelle demande de devis - Voyager Autrement",
      text,
      data.email,
    );

    return { success: true };
  });

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const text = [
      "Nouveau message de contact",
      "",
      `Nom : ${data.fullName}`,
      `Email : ${data.email}`,
      "",
      "Message :",
      data.message,
      "",
      `Langue du formulaire : ${data.lang}`,
    ].join("\n");

    await sendNotification(
      "Nouveau message de contact - Voyager Autrement",
      text,
      data.email,
    );

    return { success: true };
  });
