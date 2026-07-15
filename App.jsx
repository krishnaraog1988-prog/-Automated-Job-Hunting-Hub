import React from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Shield, 
  FileText, 
  TrendingUp,
  Briefcase,
  CheckCircle
} from 'lucide-react'
import JobListings from './components/JobListings'

function App() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Automated-Job-Hunting-Hub/GRC Resume.pdf'
    link.download = 'Gedela_Krishna_Rao_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Gedela Krishna Rao</h1>
                <p className="text-slate-600 text-sm">ITGC Auditor & SOX Compliance Specialist</p>
              </div>
            </div>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Professional Profile</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                An <span className="font-semibold text-blue-600">MBA graduate with 3+ years of experience</span> specializing in Internal Audit and Controls, SOX Compliance (302 & 404), IT General Controls (ITGC) auditing, Risk Management, and Finance & Accounting (Accounts Payable / P2P).
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">+91-9293157886</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">krishnaraog1988@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Hyderabad, India</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Open to Opportunities
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Local (Hyderabad)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Remote (India)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Global Freelance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600" />
            Core Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">ITGC & Audit</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Access Management</li>
                <li>• Change Management</li>
                <li>• IT Operations</li>
                <li>• RACM & RCSA</li>
                <li>• Segregation of Duties (SOD)</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Compliance</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• SOX Attestation (302/404)</li>
                <li>• ISO 27001 Audit</li>
                <li>• Internal Controls</li>
                <li>• Risk Assessment</li>
                <li>• Compliance Frameworks</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Finance & AP</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• P2P Invoice Processing</li>
                <li>• 2-way/3-way match</li>
                <li>• GR/IR Reconciliations</li>
                <li>• Duplicate Audit Checks</li>
                <li>• SAP & Oracle ERP</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Target Roles */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Targeted Job Matrix
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Target Roles</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>ITGC Auditor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Internal Audit Senior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>SOX Compliance Analyst</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Risk & Control Specialist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Senior P2P / AP Accountant</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Target Locations</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>India (Bangalore, Hyderabad, Remote)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>United States (Remote)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>United Kingdom (Remote)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Global Freelance Contracts</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-3">Employment Types</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Full-Time Remote</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Part-Time Freelance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Contract / C2C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Hybrid (Hyderabad)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <JobListings />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Gedela Krishna Rao. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Automated Job Hunting Hub - Professional Profile & Job Aggregation System
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
