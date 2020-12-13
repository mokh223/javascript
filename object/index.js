const APPLE = {
    type: 'red delicious',
    color: 'red',
    size: 'large'
  }
  
  const { type, color } = APPLE;
  console.log(color);
  
  let firstName = 'John', lastName = 'Doe';
  let user = { firstName, lastName };
  console.log(user); 
  
  console.log(`The following user, ${user.firstName} has encountered an error`);