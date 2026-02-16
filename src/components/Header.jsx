import { DownloadCV } from "./DownloadCV";
import { Theme } from "./Theme";

export const Header = () => {
  return (
    <div className="flex w-dvw h-17 justify-center items-center pr-10 pl-10">
      <div className="flex w-[1280] h-9 justify-between items-center ">
        <h1 className="text-[90] font-bold">TOM</h1>
        <div className="flex gap-9 items-center">
          <div>About</div>
          <div>Work</div>
          <div> Testimonials</div>
          <div>Contact</div>
          <Theme />
          <DownloadCV />
        </div>
      </div>
    </div>
  );
};
