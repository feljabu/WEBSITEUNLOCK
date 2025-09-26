import { Client } from '@microsoft/microsoft-graph-client';
import type { ContactForm } from '@shared/schema';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings?.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!hostname) {
    throw new Error('REPLIT_CONNECTORS_HOSTNAME environment variable not found');
  }

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl - missing REPL_IDENTITY and WEB_REPL_RENEWAL');
  }

  console.log('Fetching Outlook connection settings...');
  
  try {
    const response = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=outlook',
      {
        headers: {
          'Accept': 'application/json',
          'X_REPLIT_TOKEN': xReplitToken
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch connection settings: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    connectionSettings = data.items?.[0];

    if (!connectionSettings) {
      throw new Error('No Outlook connection found. Please set up the Outlook integration in your Replit workspace first.');
    }

    if (!connectionSettings.settings) {
      throw new Error('Outlook connection found but missing settings. The connection may not be properly configured.');
    }

    const accessToken = connectionSettings.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

    if (!accessToken) {
      throw new Error('Outlook connection found but missing access token. Please reconnect the Outlook integration.');
    }

    console.log('Successfully retrieved Outlook access token');
    return accessToken;
  } catch (error) {
    console.error('Error fetching Outlook connection:', error);
    throw error;
  }
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableOutlookClient() {
  const accessToken = await getAccessToken();

  return Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => accessToken
    }
  });
}

export async function sendContactFormEmail(formData: ContactForm): Promise<void> {
  const client = await getUncachableOutlookClient();
  
  const emailContent = `
New Contact Form Submission - The Unlock

From: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}

---
This email was sent automatically from The Unlock website contact form.
  `.trim();

  const message = {
    subject: `New Contact Form Submission from ${formData.name} - ${formData.company}`,
    body: {
      contentType: 'Text',
      content: emailContent
    },
    toRecipients: [{
      emailAddress: {
        address: 'felipe@theunlock.com.au'
      }
    }],
    replyTo: [{
      emailAddress: {
        address: formData.email,
        name: formData.name
      }
    }]
  };

  try {
    await client.api('/me/sendMail').post({
      message,
      saveToSentItems: false
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
}