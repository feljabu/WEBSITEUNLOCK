import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, type ContactForm } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'db800c0e-da86-4fcb-a5c4-c7b57d61b742');
      formData.append('name', validatedData.name);
      formData.append('email', validatedData.email);
      formData.append('company', validatedData.company);
      formData.append('message', validatedData.message);
      formData.append('from_name', 'The Unlock Website');
      formData.append('subject', `New Contact Form Submission from ${validatedData.name} - ${validatedData.company}`);
      formData.append('replyto', validatedData.email);
      
      // Send to Web3Forms
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await web3formsResponse.json();

      if (result.success) {
        console.log('Email sent successfully via Web3Forms to felipe@theunlock.com.au');
        res.status(200).json({ 
          success: true, 
          message: "Thank you for your message! We'll get back to you within 24 hours." 
        });
      } else {
        console.error('Web3Forms submission failed:', result);
        res.status(500).json({ 
          success: false, 
          message: "Sorry, there was an issue sending your message. Please try again later." 
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data and try again.",
          errors: error.issues 
        });
      } else {
        // Email sending error or other server error
        res.status(500).json({ 
          success: false, 
          message: "Sorry, there was an issue sending your message. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
