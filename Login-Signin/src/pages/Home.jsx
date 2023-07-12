import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-lg font-bold">Nhóm 9</h2>
            <div className="grid grid-cols-5 gap-15 gap-4 mt-10">
                <div className="w-[100px] h-[100px] bg-red-500 rounded-full">
                    <img
                        src="/phong.png"
                        alt=""
                        className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                </div>
                <div className="w-[100px] h-[100px] bg-blue-500  rounded-full">
                    <img
                        src="/member.png"
                        alt=""
                        className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                </div>
                <div className="w-[100px] h-[100px] bg-green-500 rounded-full ">
                    <img
                        src="/member3.png"
                        alt=""
                        className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                </div>
                <div className="w-[100px] h-[100px] bg-yellow-500 rounded-full">
                    <img
                        src="/member2.png"
                        alt=""
                        className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                </div>
                <div className="w-[100px] h-[100px] bg-purple-500 rounded-full">
                    <img
                        src="https://images.unsplash.com/photo-1627373574888-dbcdefdafc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
