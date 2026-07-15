import React, { useState, useEffect } from 'react'
import { Briefcase, MapPin, Clock, DollarSign, ExternalLink, Filter, Search } from 'lucide-react'

const JobListings = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  useEffect(() => {
    fetchJobs()
  }, [])

  useEffect(() => {
    filterJobs()
  }, [jobs, searchTerm, selectedLocation, selectedType])

  const fetchJobs = async () => {
    try {
      const response = await fetch('/Automated-Job-Hunting-Hub/jobs.json')
      const data = await response.json()
      setJobs(data.jobs || [])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching jobs:', error)
      setLoading(false)
    }
  }

  const filterJobs = () => {
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedLocation !== 'All') {
      filtered = filtered.filter(job => job.location === selectedLocation)
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(job => job.type === selectedType)
    }

    setFilteredJobs(filtered)
  }

  const locations = ['All', ...new Set(jobs.map(job => job.location))]
  const types = ['All', ...new Set(jobs.map(job => job.type))]

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-slate-600">Loading job listings...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-600" />
          Latest Job Openings
        </h2>
        <div className="text-sm text-slate-600">
          {filteredJobs.length} jobs found
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Location Filter */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid gap-4">
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-xl p-8 border border-slate-200 text-center">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No jobs found matching your criteria.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>
    </div>
  )
}

const JobCard = ({ job }) => {
  const [showApplication, setShowApplication] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-800 mb-1">{job.title}</h3>
            <p className="text-slate-600 font-medium">{job.company}</p>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
            {job.source}
          </span>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {job.posted_date}
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {job.salary}
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {job.type}
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Job
          </a>
          <button
            onClick={() => setShowApplication(!showApplication)}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            {showApplication ? 'Cancel' : 'Apply Now'}
          </button>
        </div>
      </div>

      {showApplication && (
        <ApplicationForm job={job} onClose={() => setShowApplication(false)} />
      )}
    </div>
  )
}

const ApplicationForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: 'Gedela Krishna Rao',
    email: 'krishnaraog1988@gmail.com',
    phone: '+91-9293157886',
    coverLetter: '',
    resume: null
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/Automated-Job-Hunting-Hub/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job: job,
          formData: formData
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setSubmitting(false)
        setSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setSubmitting(false)
        alert('Failed to send application. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmitting(false)
      alert('Error sending application. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 p-6 border-t border-green-200">
        <div className="text-green-700 font-medium text-center">
          ✓ Application submitted successfully!
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 p-6 border-t border-slate-200">
      <h4 className="font-semibold text-slate-800 mb-4">Apply for {job.title}</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Cover Letter</label>
          <textarea
            value={formData.coverLetter}
            onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
            rows={4}
            placeholder="Explain why you're a good fit for this role..."
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {submitting ? 'Sending...' : 'Send Application'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobListings
