import Avatar from "@/components/Avatar";
import Navbar from "@/components/Navbar";
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    description: 'Software developer and tech enthusiast.',
    avatarUrl: '', // Add your avatar URL here
    followers: [
        { name: 'Jane Smith', description: 'Graphic Designer' },
        { name: 'Jane Smith', description: 'Graphic Designer' },
        // Add more followers
    ],
    following: [
        { name: 'Paul Walker', description: 'Product Manager' },
        // Add more following
    ],
};


export default function ProfileId({ params }: {
    params: {
        profileId: string;
    }
}) {
    return (
        <div className="">
            <Navbar path="/home/contacts" />
            <div className="flex flex-col items-center mt-2">
                <Avatar
                    avatarURL={user.avatarUrl}
                    name={params.profileId}
                />
                <h1 className="text-2xl font-semibold mt-4">{params.profileId}</h1>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-center mt-2">{user.description}</p>


                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                //    onClick={() => setEditModalOpen(true)}
                >
                    FOLLOW
                </button>
                <div className="flex space-x-4 mt-4">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded"
                    //   onClick={() => setFollowersModalOpen(true)}
                    >
                        Followers
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-200 rounded"
                    //   onClick={() => setFollowingModalOpen(true)}
                    >
                        Following
                    </button>
                </div>
            </div>
            {/* <EditProfileModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} user={user} />
         <ListModal isOpen={isFollowersModalOpen} onClose={() => setFollowersModalOpen(false)} title="Followers" list={user.followers} />
         <ListModal isOpen={isFollowingModalOpen} onClose={() => setFollowingModalOpen(false)} title="Following" list={user.following} /> */}
        </div>

    )
}