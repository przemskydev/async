console.log('Start')

function login(email, password, callback) {
  setTimeout(() => {
    console.log('Got data')
    callback({ userEmail: email })
  }, 2000)
}

const userData = login('brzemeg@op.pl', '123123', user => console.log(user))


console.log('End')