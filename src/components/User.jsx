function User(id, name, email, username) {
return (
    <div  style={{ border: '${pixels} solid black'}}>
    <div>{id}</div>
    <div>{name.toUpperCase()}</div>;
    <div>{email}</div>;
    <div>{username}</div>;
</div>
);
}

export default User