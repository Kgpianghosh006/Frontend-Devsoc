import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import Pagination from './Pagination';
import JobModal from './JobModal';
import dummyData from './jobs.json';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
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
    .filter(job => job.title.includes(search) || job.location.includes(search))
    .filter(job => (filter ? job.type === filter : true));

  const jobsPerPage = 10;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const displayedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="app">
      <SearchBar search={search} setSearch={setSearch} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <JobList jobs={displayedJobs} />
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} setPage={setCurrentPage} />
      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </div>
  );
};

export default App;