import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;


// axios.get('https://api.themoviedb.org/3')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
// });