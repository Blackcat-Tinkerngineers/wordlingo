## Testing

To test a mutation:

```
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    _id
    username
    email
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
