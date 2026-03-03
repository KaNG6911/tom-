import { boxes } from "@/Utils/boxes";

export const Page3 = () => {
  return (
    <div>
      <div className="flex flex-col w-320 h-140 items-center pt-8 gap-4">
        <div className="flex bg-gray-300 rounded-2xl justify-center items-center h-7 w-18 ">
          Skills
        </div>
        <main>The skills, tools and technologies I am really good at:</main>
        <div className="flex flex-wrap gap-10 justify-center w-full h-100 overflow-y-auto">
        {boxes.map((box) => (
          <div key={box.name} className="flex flex-col items-center ">
            <img src={`/images/${box.image}`} />
            <p>{box.name}</p>
          </div>
        ))}</div>
      </div>
    </div>
  );
};
