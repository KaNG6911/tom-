export const Page1 = () => {
  return (
    <div className="flex w-dvw h-139 justify-center items-center ">
      <div className="flex w-[1280] h-91 justify-between pr-32 pl-32">
        <div className="flex w-125 h-91 gap-12 flex-col">
          <div className="text-6xl font-bold ">Hi, I'm Tom</div>
          <main>
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </main>
          <div>
            <main className="flex ">
              <img src="Icon.png" className="mt-1 w-4 h-4 mr-1" />
              Ulaanbaatar, Mongolia
            </main>
            <main className="flex gap-2 pl-1"> <div className="bg-green-500 w-2 h-2 rounded-4xl mt-2"></div>Available for new projects</main>
          </div>
          <div>
            <img src="Links.png" />
          </div>
        </div>
        <div>
          <img src="Pic.png" className="Drop w-70 h-85 " />
        </div>
      </div>
    </div>
  );
};
