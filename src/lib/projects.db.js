/*jshint esversion: 6 */

import React from 'react';
const projectsFromFakeDB = [{

    id : 1,
    title : 'Renovations to Part-Time Room',
    address : '2800 Woodlawn Dr, Honolulu, HI 96822',
    job_number: 1010,
    client_name: 'DevLeague',

  },
  {
    id : 2,
    title : 'New Lab Workspace',
    address : '2800 Woodlawn Dr, Honolulu, HI 96822',
    job_number: 2020,
    client_name: 'DevLeague',
  },
  {
    id : 3,
    title : 'Student Residence',
    address : '2800 Woodlawn Dr, Honolulu, HI 96822',
    job_number: 3030,
    client_name: 'DevLeague',
  }
];

export const getProjectsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(projectsFromFakeDB), 500);
});
