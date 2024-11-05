import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure you have this file for custom styles
import HeroSection from './components/HeroSection';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';
import Pagination from './components/Pagination';
import JobModal from './components/JobModal';
import dummyData from './data/jobs.json';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setJobs(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredJobs = jobs
    .filter(job => job.title.toLowerCase().includes(searchTitle.toLowerCase()))
    .filter(job => job.location.toLowerCase().includes(searchLocation.toLowerCase()))
    .filter(job => (filter ? job.type === filter : true));

  const jobsPerPage = 10;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const displayedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="app">
      <HeroSection />
      <SearchBar
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <JobList jobs={displayedJobs} onClick={setSelectedJob} />
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} setPage={setCurrentPage} />
      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
};

export default App;
