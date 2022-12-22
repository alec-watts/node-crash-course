const axiosRequest = require('axios');
const { response } = require('express');

// axiosRequest
//     .get('https://www.boredapi.com/api/activity/')
//     //.get('https://httpstat.us/404')
//     .then(response => {
//         console.log(`You could ${response.data.activity}`);
//     })
//     .catch(err => {
//         console.error(`ERROR: ${err}`);
//     }) 
// console.log('jawndice')


async function getActivity() {
    try {
        let response = await axiosRequest.get('https://www.boredapi.com/api/activity/')
        console.log(`You could ${response.data.activity}`)
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }
}

getActivity()
console.log('jawndice')
