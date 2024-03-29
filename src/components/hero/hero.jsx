export const Hero = (props) => {
  const { HeroSection } = props;
  return (
    <div className="w-full py-4 md:py-12 lg:py-24 xl:py-32">
      {HeroSection.map((elemento, index) => (
        <div key={index} className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  {elemento.title}
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  {elemento.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
