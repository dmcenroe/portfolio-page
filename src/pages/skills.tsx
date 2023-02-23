export default function Skills() {
  return (
    <div className="flex flex-col font-Jaldi">
      <h1 className="text-7xl lg:text-8xl font-Jaldi text-slate-800 m-auto my-8 ">
        SKILLS
      </h1>
      <div className="flex flex-col gap-20 items-center relative">
        <div className="flex flex-row gap-4 w-full">
          <div className="flex flex-col gap-1 items-end w-full tracking-widest">
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-1/4 hover:bg-teal-500">
              React
            </div>
            <div className=" text-white bg-slate-800 text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-1/4 hover:bg-slate-700">
              Next.js
            </div>
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-1/4 hover:bg-teal-500">
              Redux
            </div>
            <div className=" text-white bg-slate-800 text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-1/4 hover:bg-slate-700">
              Javascript
            </div>
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-1/4 hover:bg-teal-500">
              Typescript
            </div>
            <div className=" text-white bg-slate-800 text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-1/4 hover:bg-slate-700">
              Tailwind
            </div>
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-end pr-2 h-10 w-1/4 hover:bg-teal-500">
              CSS
            </div>
          </div>
          <div className="flex w-full text-5xl font-bold justify-beginning items-center">
            <span className="material-symbols-outlined material-icons md-48 ml-12 text-teal-600">
              devices
            </span>
            <p className="ml-4 text-slate-800">Front End</p>
          </div>
        </div>
        <div className="h-full w-0 border-r-slate-800 border-l-transparent border-y-transparent border-8 rounded-full absolute left-1/2 transform -translate-x-1/2 hidden lg:block"></div>
        <div className="flex flex-row gap-4 w-full">
          <div className="flex w-full text-5xl font-bold justify-end items-center">
            <p className="mr-4 text-slate-800">Back End</p>
            <span className="material-symbols-outlined material-icons md-48 mr-12 text-teal-600">
              database
            </span>
          </div>
          <div className="flex flex-col gap-1 items-start w-full tracking-widest ml-4">
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-beginning pl-2 h-10 w-1/4 hover:bg-teal-500">
              Next.js
            </div>
            <div className=" text-white bg-slate-800 text-2xl rounded-sm flex items-center justify-beginning pl-2 h-10 w-1/4 hover:bg-slate-700">
              PostgreSQL
            </div>
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-beginning pl-2 h-10 w-1/4 hover:bg-teal-500">
              Supabase
            </div>
            <div className=" text-white bg-slate-800 text-2xl rounded-sm flex items-center justify-beginning pl-2 h-10 w-1/4 hover:bg-slate-700">
              Prisma
            </div>
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-beginning pl-2 h-10 w-1/4 hover:bg-teal-500">
              Sequelize
            </div>
            <div className=" text-white bg-slate-800 text-2xl rounded-sm flex items-center justify-beginning pl-2 h-10 w-1/4 hover:bg-slate-700">
              Express
            </div>
            <div className=" text-white bg-teal-600 text-2xl rounded-sm flex items-center justify-beginning pl-2 h-10 w-1/4 hover:bg-teal-500">
              Axios
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>Next.js</div>
<div>PostgreSQL</div>
<div>Supabase</div>
<div>Prisma</div>
<div>Sequelize</div>
<div>Express</div>
<div>Axios</div> */
}
