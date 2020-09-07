console.log('Start')

function login(email, password, callback) {
  setTimeout(() => {
    console.log('Got data')
    callback({ userEmail: email })
  }, 2000)
}

function getUserHobby(callback) {
  setTimeout(() => {
    callback(['music', 'movies', 'sport'])
  }, 2000)
}

function hobbyDetails(callback) {
  setTimeout(() => {
    callback(['pop', 'jazz', 'rap'])
  }, 2000);
}

const userData = login('brzemeg@op.pl', '123123', user => {
  console.log(user)
  getUserHobby(hobby => {
    console.log(hobby)
    hobbyDetails(detail => console.log(detail))
  })
})


console.log('End')