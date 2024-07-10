import { AiOutlineSend, AiOutlineHistory, AiTwotoneMessage  } from 'react-icons/ai';

export default function ChatBox() {
    return (
        <div>
            <div className="bg-blue-400 text-gray-50 container p-2 rounded-md my-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam, consequuntur commodi, sequi amet nihil tempora voluptatibus in vel fugiat quod inventore asperiores neque. Laboriosam veritatis accusamus voluptate magnam quia.</p>
                <div className="flex justify-between text-sm py-1 text-gray-200 font-bold">
                    <p>Sent by Birusha</p>
                    <p>{new Date().getFullYear()}</p>
                </div>
            </div>
            <div className="bg-blue-500 text-gray-50 container p-2 rounded-md my-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam, consequuntur commodi, sequi amet nihil tempora voluptatibus in vel fugiat quod inventore asperiores neque. Laboriosam veritatis accusamus voluptate magnam quia.</p>
                <div className="flex justify-between text-sm py-1 text-gray-200 font-bold">
                    <p>Sent by Birusha</p>
                    <p>{new Date().getFullYear()}</p>
                </div>
            </div>
            <div className="container bg-blue-500 my-2 flex p-2 px-4 items-center rounded-md">
                <input
                    type="text"
                    placeholder="your message"
                    className='flex-1 outline-none bg-transparent'
                />
                <AiOutlineSend size={24} />
            </div>
        </div>
    )
}