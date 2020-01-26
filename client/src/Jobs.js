import React from 'react';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Job from './Job';
import JobModal from './JobModal';

const Jobs = ({ jobs }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedJob, setJob] = React.useState({});
  const jobsToDisplay = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  // modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // pagination
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div>
      <JobModal job={selectedJob} open={open} handleClose={handleClose} />
      <Typography variant="h3">Software Engineering Jobs</Typography>
      {jobsToDisplay.map((job, i) => {
        return (
          <Job
            key={i}
            job={job}
            onClick={() => {
              handleClickOpen();
              setJob(job);
            }}
          />
        );
      })}
      <MobileStepper
        steps={Math.ceil(jobs.length / 50)}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={jobsToDisplay.length !== 50}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Jobs;
