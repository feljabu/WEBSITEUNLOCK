// Contact form validation schema
const validateContactForm = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 1) {
    errors.push('Name is required');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.company || data.company.trim().length < 1) {
    errors.push('Company is required');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Please provide a detailed message (minimum 10 characters)');
  }
  
  return errors;
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    // Validate form data
    const formData = req.body;
    const validationErrors = validateContactForm(formData);
    
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please check your form data and try again.',
        errors: validationErrors 
      });
    }

    // Prepare form data for Web3Forms
    const web3formsData = new FormData();
    web3formsData.append('access_key', 'db800c0e-da86-4fcb-a5c4-c7b57d61b742');
    web3formsData.append('name', formData.name);
    web3formsData.append('email', formData.email);
    web3formsData.append('company', formData.company);
    web3formsData.append('message', formData.message);
    web3formsData.append('from_name', 'The Unlock Website');
    web3formsData.append('subject', `New Contact Form Submission from ${formData.name} - ${formData.company}`);
    web3formsData.append('replyto', formData.email);
    // Honeypot spam protection
    web3formsData.append('botcheck', formData.botcheck || false);
    
    // Send to Web3Forms
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: web3formsData
    });

    const result = await web3formsResponse.json();

    if (result.success) {
      console.log('Email sent successfully via Web3Forms to felipe@theunlock.com.au');
      return res.status(200).json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you within 24 hours." 
      });
    } else {
      console.error('Web3Forms submission failed:', result);
      return res.status(500).json({ 
        success: false, 
        message: "Sorry, there was an issue sending your message. Please try again later." 
      });
    }

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return res.status(500).json({ 
      success: false, 
      message: "Sorry, there was an issue sending your message. Please try again later." 
    });
  }
}