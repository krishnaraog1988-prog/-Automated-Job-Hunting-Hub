# 🤖 Automated Job Hunting Hub - Gedela Krishna Rao

Welcome to my automated job-hunting repository. This project serves two purposes: hosting my professional profile for global recruiters and running a **daily automated web scraper** to aggregate the latest relevant job openings across major job boards (Naukri, LinkedIn, Indeed) for remote, freelance, and hybrid contracts.

---

## 🧑‍💼 Professional Profile Summary

**Gedela Krishna Rao**  
📱 +91-9293157886 | ✉️ krishnaraog1988@gmail.com  
📍 Hyderabad, India (Open to Local, Remote, and Global Freelance)

An **MBA graduate with 3+ years of experience** specializing in Internal Audit and Controls, SOX Compliance (302 & 404), IT General Controls (ITGC) auditing, Risk Management, and Finance & Accounting (Accounts Payable / P2P).

### 🛠️ Core Expertise
* **ITGC & Audit:** Access Management, Change Management, IT Operations, RACM (Risk and Control Matrix), RCSA, Segregation of Duties (SOD).
* **Compliance:** SOX Attestation (302/404), ISO 27001 Audit frameworks.
* **Finance & AP:** P2P Invoice Processing (2-way/3-way match), GR/IR Reconciliations, Duplicate Audit Checks, SAP, Oracle ERP.

---

## 🎯 Targeted Job Matrix

This automation script tracks jobs globally and within India matching the following constraints:

| Target Roles | Target Locations | Employment Types |
| :--- | :--- | :--- |
| • ITGC Auditor <br> • Internal Audit Senior <br> • SOX Compliance Analyst <br> • Risk & Control Specialist <br> • Senior P2P / AP Accountant | • India (Bangalore, Hyderabad, Remote) <br> • United States (Remote) <br> • United Kingdom (Remote) <br> • Global Freelance Contracts | • Full-Time Remote <br> • Part-Time Freelance <br> • Contract / C2C <br> • Hybrid (Hyderabad) |

---

## 🚀 Automation System Architecture

This repository uses a **Python-based scraping script** combined with **GitHub Actions** to automate job discovery completely free without hosting fees.

---

## 🌐 Professional Website

A modern React-based professional profile website is included in this repository with the following features:

- **Professional Profile Display**: Showcases expertise in ITGC, SOX Compliance, and Finance
- **Downloadable Resume**: One-click download of the GRC Resume PDF
- **Job Listings Dashboard**: Displays latest job openings from multiple sources (Naukri, LinkedIn, Indeed)
- **Job Application System**: Apply directly to jobs with integrated email functionality
- **Search & Filter**: Filter jobs by location, type, and search keywords
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with React, TailwindCSS, and Lucide icons

### Website Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

### Email Setup for Job Applications

To enable the job application email functionality:

1. **Create a `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```

2. **Configure Gmail App Password**:
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password (Google Account → Security → App Passwords)
   - Add your email and app password to `.env`:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     ```

3. **Run with email server**:
   ```bash
   npm start
   ```

This will start both the React development server and the Express email server on port 3001.

The website will be available at `http://localhost:3000` in development mode.

---

## 🤖 Job Scraper Setup

### Prerequisites

- Python 3.11 or higher
- pip package manager

### Installation

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the scraper manually:**
   ```bash
   python scraper.py
   ```

### GitHub Actions Automation

The repository includes two GitHub Actions workflows:

1. **Daily Job Scraper** (`.github/workflows/job-scraper.yml`):
   - Runs automatically every day at 9:00 AM IST
   - Can be triggered manually via workflow_dispatch
   - Scrapes jobs from Naukri, LinkedIn, and Indeed
   - Filters jobs from the last 30 days
   - Commits results to `public/jobs.json` for website display

2. **Website Deployment** (`.github/workflows/deploy-website.yml`):
   - Automatically builds and deploys the website to GitHub Pages
   - Triggers on push to main/master branch
   - Requires GitHub Pages to be enabled in repository settings

### Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` or `master` → `/ (root)`
4. Save settings

---

## 📁 Project Structure

```
Automated-Job-Hunting-Hub/
├── src/                    # React application source
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── public/                # Static assets
│   └── GRC Resume.pdf     # Downloadable resume
├── .github/workflows/     # GitHub Actions
│   ├── job-scraper.yml    # Daily job scraping
│   └── deploy-website.yml # Website deployment
├── scraper.py             # Job scraping script
├── requirements.txt       # Python dependencies
├── package.json          # Node.js dependencies
└── README.md             # This file
```

---

## 🎯 Next Steps

1. **Customize the scraper**: Update `scraper.py` with actual API endpoints and parsing logic for each job board
2. **Add job filtering**: Implement filtering based on your specific criteria
3. **Set up notifications**: Configure email or Slack notifications for new job matches
4. **Deploy website**: Push to GitHub and enable GitHub Pages for live deployment

