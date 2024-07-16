import Button from "@/components/Button";
export default function ProfileId() {
    return (
        <div className="flex-1 p-32 items-center justify-center">

            {/* <!-- Card start --> */}
            <div className="max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-300 shadow-lg flex items-center justify-center">
                <div className="px-4 pb-6">
                    <div className="text-center my-4">
                        <img className="h-32 w-32 rounded-full mx-auto my-4"
                            src={`https://randomuser.me/api/portraits/women/21.jpg`} alt="" width={128} height={128} />
                        <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800 mb-1">Cait Genevieve</h3>
                            <div className="inline-flex text-gray-700 items-center">
                                New York, NY Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                    <Button
                        className="bg-blue-400 hover:bg-blue-500 w-full"
                        title="Send Message"
                    />
                </div>
            </div>
            {/* <!-- Card end --> */}
        </div>
    );
}