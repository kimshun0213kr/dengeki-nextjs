export type UserProps = {
  id: number;
  name: string;
  school: string;
  isStudent: boolean;
};

const User: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <p>
      {user.name},{user.school}
    </p>
  );
};

export default User;
