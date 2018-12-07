const axios = require('axios');

let jobsList = [];
let jobsWithDescriptions = [];
let matches = [];

function getJob(jobId) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`);
}

function checkJobsForMatches () {
    for(let job of jobsWithDescriptions) {

        let title = job.title.toLowerCase();
        let text = (job.text) ? job.text.toLowerCase() : false;
        let url = (job.url) ? job.url.toLowerCase() : false;

        let titleIncludes = {
            front: title.includes('front'),
            remote: title.includes('remote')
        };

        let textIncludes = {
            front: (text) ? text.includes('front') : false,
            remote: (text) ? text.includes('remote') : false
        }

        let urlIncludes = {
            remote: (url) ? url.includes('remote') : false
        }

        if(titleIncludes.front && titleIncludes.remote) {
            matches.push(job);
        } else if (textIncludes.front && textIncludes.remote) {
            matches.push(job);
        } else if (urlIncludes.remote && (titleIncludes.front || textIncludes.front)) {
            matches.push(job);
        }

    }
    if(matches.length) {
        console.log('matches', matches.map((value, index, array) => {
            return {
                title: value.title,
                url: value.url
            }
        }));
    } else {
        console.log('no matches');
    }
}

axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json')
    .then((response) => {
        jobsList = response.data;
        if(jobsList.length) {
            let jobRequests = [];
            for(let jobId of jobsList) {
                jobRequests.push(getJob(jobId));
            }
            axios.all(jobRequests)
                .then((results) => {
                    jobsWithDescriptions = results.map((value, index, array) => {
                        return value.data;
                    });
                    console.log(jobsWithDescriptions);
                    checkJobsForMatches();
                });
        }
    })
    .catch((err) => {
        console.error('error: ', err);
    });
