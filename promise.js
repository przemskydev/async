console.log('Start')

function login(email, password) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Got data')
      res({ userEmail: email })
    }, 2000)
  })
}

function getUserHobby(emial) {
  return new Promise((res, rej) => {
    console.log('Got user hobby')
    setTimeout(() => {
      res(['music', 'movies', 'sport'])
    }, 2000)
  })
}

function hobbyDetails(hobby) {
  return new Promise((res, rej) => {
    console.log('Got hobby details')
    setTimeout(() => {
      res(['pop', 'jazz', 'rap'])
    }, 2000);
  })
}

login('bob@bob.pl', 'Bob18')
  .then(data => getUserHobby())
  .then(hobby=> hobbyDetails())
  .then(detail=>console.log(detail))
  .catch(err=>console.log(err))

console.log('End')