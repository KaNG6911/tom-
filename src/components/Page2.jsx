export const Page2 = () => {
  return (
    <div className="flex w-dvw justify-center h-[720]">
      <div className="flex flex-col items-center gap-15 pt-10 w-[1280] bg-gray-100">
        <div className="bg-gray-300 pl-4 pr-4 text-[2] rounded-2xl">
          About me
        </div>
        <div className="flex justify-center items-center gap-30 pr-20 pl-50">
          <img
            src="page2.jpg"
            className="Drop1 flex w-70 h-90 object-cover p-2"
          />
          <div className="flex gap-4 flex-col">
            <h1 className="font-bold text-2xl">
              Curious about me? Here you have it:
            </h1>
            <main>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </main>
            <main>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </main>
            <main>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </main>
            <main className="flex gap-4 flex-col">
              Finally, some quick bits about me.
              <div className="flex gap-15 flex-wrap pl-5 ">
                <li>B.E. in Computer Engineering</li>
                <li>Avid learner</li>
                <li>Full time freelancer</li>
              </div>
            </main>
            <main>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
