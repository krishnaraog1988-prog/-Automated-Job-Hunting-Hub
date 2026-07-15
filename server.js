const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Email configuration - using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Job application endpoint
app.post('/api/apply', async (req, res) => {
  try {
    const { job, formData } = req.body;
    
    // Email to the company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: job.company_email || 'hr@company.com', // This would need to be configured per job
      subject: `Application for ${job.title} - ${formData.name}`,
      html: `
        <h2>Job Application</h2>
        <p><strong>Position:</strong> ${job.title}</p>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Applicant Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <h3>Cover Letter:</h3>
        <p>${formData.coverLetter}</p>
        <p><strong>Job URL:</strong> <a href="${job.url}">View Job Posting</a></p>
        <hr>
        <p><em>This application was sent via Automated Job Hunting Hub</em></p>
      `
    };

    // Confirmation email to applicant
    const applicantMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: `Application Confirmation - ${job.title} at ${job.company}`,
      html: `
        <h2>Application Received</h2>
        <p>Dear ${formData.name},</p>
        <p>Your application for the position of <strong>${job.title}</strong> at <strong>${job.company}</strong> has been successfully submitted.</p>
        <p><strong>Position Details:</strong></p>
        <ul>
          <li>Company: ${job.company}</li>
          <li>Location: ${job.location}</li>
          <li>Type: ${job.type}</li>
          <li>Salary: ${job.salary}</li>
        </ul>
        <p>We will send your resume directly to the hiring team. You should expect to hear from them within 1-2 business days.</p>
        <p><strong>Job URL:</strong> <a href="${job.url}">View Original Posting</a></p>
        <hr>
        <p><em>Good luck with your application!</em></p>
        <p><em>Automated Job Hunting Hub</em></p>
      `
    };

    // Send emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(applicantMailOptions);

    res.json({ success: true, message: 'Application sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send application' });
  }
});

// Serve the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
