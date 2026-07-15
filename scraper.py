#!/usr/bin/env python3
"""
Automated Job Hunting Hub - Job Scraper
Scrapes job listings from Naukri, LinkedIn, and Indeed for targeted roles and locations.
"""

import requests
from bs4 import BeautifulSoup
import json
import os
from datetime import datetime, timedelta
import time
import re

# Target job roles and keywords
TARGET_ROLES = [
    "ITGC Auditor",
    "Internal Audit Senior",
    "SOX Compliance Analyst",
    "Risk and Control Specialist",
    "Senior P2P Accountant",
    "AP Accountant",
    "Internal Auditor",
    "Compliance Analyst",
    "IT Auditor",
    "SOX Analyst"
]

# Target locations
TARGET_LOCATIONS = [
    "Bangalore",
    "Hyderabad", 
    "Remote India",
    "Remote",
    "United States Remote",
    "UK Remote"
]

# Employment types
EMPLOYMENT_TYPES = [
    "Remote",
    "Freelance",
    "Contract",
    "C2C",
    "Hybrid"
]

class JobScraper:
    def __init__(self):
        self.jobs = []
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        self.one_month_ago = datetime.now() - timedelta(days=30)
    
    def is_within_last_month(self, job_date_str):
        """Check if job posting date is within the last month"""
        try:
            # Parse various date formats
            job_date = self.parse_date(job_date_str)
            if job_date:
                return job_date >= self.one_month_ago
            return True  # If date can't be parsed, include it
        except:
            return True  # If error, include job
    
    def parse_date(self, date_str):
        """Parse various date formats from job postings"""
        if not date_str:
            return None
        
        # Handle "X days ago" format
        days_match = re.search(r'(\d+)\s+days?\s+ago', date_str, re.IGNORECASE)
        if days_match:
            days = int(days_match.group(1))
            return datetime.now() - timedelta(days=days)
        
        # Handle "X hours ago" format
        hours_match = re.search(r'(\d+)\s+hours?\s+ago', date_str, re.IGNORECASE)
        if hours_match:
            hours = int(hours_match.group(1))
            return datetime.now() - timedelta(hours=hours)
        
        # Try standard date parsing
        for fmt in ['%Y-%m-%d', '%d-%m-%Y', '%m/%d/%Y', '%d %b %Y', '%b %d, %Y']:
            try:
                return datetime.strptime(date_str, fmt)
            except:
                continue
        
        return None
    
    def scrape_naukri(self):
        """Scrape jobs from Naukri.com"""
        print("Scraping Naukri...")
        try:
            # Mock data for demonstration - replace with actual API calls
            mock_jobs = [
                {
                    'id': 'naukri_1',
                    'title': 'ITGC Auditor',
                    'company': 'Tech Corp India',
                    'location': 'Bangalore',
                    'type': 'Remote',
                    'posted_date': '2 days ago',
                    'url': 'https://www.naukri.com/job-listing',
                    'description': 'Looking for ITGC Auditor with 3+ years experience in SOX compliance and IT general controls.',
                    'salary': '₹12-18 LPA',
                    'source': 'Naukri'
                },
                {
                    'id': 'naukri_2',
                    'title': 'SOX Compliance Analyst',
                    'company': 'Financial Services Ltd',
                    'location': 'Hyderabad',
                    'type': 'Hybrid',
                    'posted_date': '5 days ago',
                    'url': 'https://www.naukri.com/job-listing',
                    'description': 'SOX Compliance Analyst role for internal audit team. Experience with SOX 404 required.',
                    'salary': '₹10-15 LPA',
                    'source': 'Naukri'
                }
            ]
            
            for job in mock_jobs:
                if self.is_within_last_month(job['posted_date']):
                    self.jobs.append(job)
            
            print(f"Found {len(mock_jobs)} jobs on Naukri")
        except Exception as e:
            print(f"Error scraping Naukri: {e}")
    
    def scrape_linkedin(self):
        """Scrape jobs from LinkedIn"""
        print("Scraping LinkedIn...")
        try:
            # Mock data for demonstration - replace with actual API calls
            mock_jobs = [
                {
                    'id': 'linkedin_1',
                    'title': 'Internal Audit Senior',
                    'company': 'Global Consulting Firm',
                    'location': 'Remote India',
                    'type': 'Remote',
                    'posted_date': '1 day ago',
                    'url': 'https://www.linkedin.com/jobs/view',
                    'description': 'Senior Internal Auditor role for multinational clients. SOX compliance experience required.',
                    'salary': '₹15-20 LPA',
                    'source': 'LinkedIn'
                },
                {
                    'id': 'linkedin_2',
                    'title': 'Risk and Control Specialist',
                    'company': 'Banking Solutions Inc',
                    'location': 'United States Remote',
                    'type': 'Remote',
                    'posted_date': '3 days ago',
                    'url': 'https://www.linkedin.com/jobs/view',
                    'description': 'Risk Management Specialist for banking sector. ITGC and SOX experience preferred.',
                    'salary': '$60,000-80,000',
                    'source': 'LinkedIn'
                }
            ]
            
            for job in mock_jobs:
                if self.is_within_last_month(job['posted_date']):
                    self.jobs.append(job)
            
            print(f"Found {len(mock_jobs)} jobs on LinkedIn")
        except Exception as e:
            print(f"Error scraping LinkedIn: {e}")
    
    def scrape_indeed(self):
        """Scrape jobs from Indeed"""
        print("Scraping Indeed...")
        try:
            # Mock data for demonstration - replace with actual API calls
            mock_jobs = [
                {
                    'id': 'indeed_1',
                    'title': 'Senior P2P Accountant',
                    'company': 'Manufacturing Giant',
                    'location': 'UK Remote',
                    'type': 'Contract',
                    'posted_date': '7 days ago',
                    'url': 'https://www.indeed.com/view-job',
                    'description': 'Senior P2P Accountant with experience in SAP and Oracle. 2-way/3-way matching experience required.',
                    'salary': '£40,000-55,000',
                    'source': 'Indeed'
                },
                {
                    'id': 'indeed_2',
                    'title': 'IT Auditor',
                    'company': 'Tech Startup',
                    'location': 'Remote',
                    'type': 'Freelance',
                    'posted_date': '10 days ago',
                    'url': 'https://www.indeed.com/view-job',
                    'description': 'IT Auditor for freelance project. ISO 27001 and ITGC experience required.',
                    'salary': '$50-70/hour',
                    'source': 'Indeed'
                }
            ]
            
            for job in mock_jobs:
                if self.is_within_last_month(job['posted_date']):
                    self.jobs.append(job)
            
            print(f"Found {len(mock_jobs)} jobs on Indeed")
        except Exception as e:
            print(f"Error scraping Indeed: {e}")
    
    def save_jobs(self):
        """Save scraped jobs to JSON file"""
        output_file = 'public/jobs.json'
        os.makedirs('public', exist_ok=True)
        with open(output_file, 'w') as f:
            json.dump({
                'scraped_at': datetime.now().isoformat(),
                'total_jobs': len(self.jobs),
                'jobs': self.jobs
            }, f, indent=2)
        print(f"Saved {len(self.jobs)} jobs to {output_file}")
    
    def run(self):
        """Run all scrapers"""
        print("Starting job scraping...")
        print(f"Target roles: {', '.join(TARGET_ROLES[:3])}...")
        print(f"Target locations: {', '.join(TARGET_LOCATIONS[:3])}...")
        
        self.scrape_naukri()
        time.sleep(2)  # Rate limiting
        
        self.scrape_linkedin()
        time.sleep(2)  # Rate limiting
        
        self.scrape_indeed()
        
        self.save_jobs()
        print("Job scraping completed!")

if __name__ == "__main__":
    scraper = JobScraper()
    scraper.run()
