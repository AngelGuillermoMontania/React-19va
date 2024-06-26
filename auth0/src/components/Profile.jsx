import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )
      )}
    </>
  );
};

export default Profile;
