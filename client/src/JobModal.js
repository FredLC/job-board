import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const JobModal = ({ job, open, handleClose }) => {
  console.log(job);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {job.title}
          <br />
          {job.company}, {job.location}
          <img
            className="companyLogo"
            src={job.company_logo}
            alt="company logo"
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button color="primary" autoFocus>
            <a target="_blank" href={job.url}>
              Apply
            </a>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobModal;
