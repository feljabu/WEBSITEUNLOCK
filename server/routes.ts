import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { sendContactFormEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Send email using Outlook integration
      await sendContactFormEmail(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you within 24 hours." 
      });
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
