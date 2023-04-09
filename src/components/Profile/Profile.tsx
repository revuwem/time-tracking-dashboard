type ProfileProps = {
  name: string;
  photo: string;
};

const Profile: React.FC<ProfileProps> = ({ name, photo }) => {
  return (
    <div className="px-8 py-9 bg-blue-light rounded flex flex-wrap items-center gap-5 md:flex-col md:items-start md:gap-10">
      <div className="w-16 md:w-20 rounded-full border-2 border-white">
        <img src={photo} alt="Your photo" className="object-cover" />
      </div>
      <h1 className="font-light text-2xl md:text-5xl text-white flex flex-col md:gap-1">
        <span className="text-sm md:text-base text-blue-pale">Report for</span>
        {name}
      </h1>
    </div>
  );
};

export default Profile;
