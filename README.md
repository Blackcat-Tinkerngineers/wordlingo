## Testing

To test addUser mutation:
```
mutation addUser($username: String!, $password: String!, $email: String!) {
   addUser(username: $username, password: $password, email: $email) {
		user {
      _id
      username
     email
    }
  }
 }
```

To test login mutation:
```
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
```

Using the folowing variables:

```
{
  "username": "tester2",
  "password": "test12345",
  "email": "test2@test.com"
}
```
