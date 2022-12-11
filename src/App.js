import { motion } from "framer-motion";
import profilePicture from "../src/media/profile.jpg"

function App() {
  return (
    <motion.div className="grid grid-cols-3 bg-slate-300 max-h-screen max-w-screen" initial={{opacity:0}} animate={{opacity:1,transition:{duration:2}}}>
      {/* Profile info */}
      <div className="col-start-1 col-end-3 grid grid-cols-2 gap-y-6 bg-red-600">
        {/* Title */}
        <div className="flex flex-col col-span-2 text-center">
          <span>Ramiro Millan</span>
          <span>Industrial engineer - Data analyst </span>
        </div>
        <div className="col-span-2 flex flex-row place-items-center justify-evenly">
          {/* Profile picture */}
          <img className="w-40 h-40" src={profilePicture} alt="profile picture"/>
          {/* About me Section */}
          <div className="w-1/2 border p-3">
            <span>
            I am an advanced student of industrial engineering. Now I find my self finishing my studies and working as a Data Analyst of the production area in a metallurgical company.
            I also really like computer programming and, for this reason, I seek to focus my career in the IT area. 
            </span>
          </div>
        </div>
        {/* Skills */}
        <div className="row-start-3 col-span-2 flex flex-col text-center">
          <span>skills</span>
          <div className="p-5 border flex flex-row place-content-evenly">
            <div className="p-5 border">
              owo
            </div>
            <div className="p-5 border">
              owo
            </div>
            <div className="p-5 border">
              owo
            </div>
            <div className="p-5 border">
              owo
            </div>
            <div className="p-5 border">
              owo
            </div>
          </div>
        </div>
        {/* Courses */}
        <div className="row-start-4 col-span-2 text-center">
          <ul className="list-disc">         
            <li>Databases and SQL for Data Science with Python in IBM 👉 Credential</li>
            <li>Python Total - Advanced Programmer in 16 days in Escuela Directa 👉 Credential</li>
            <li>Power BI in Coderhouse 👉 Credential</li>
          </ul>
        </div>
      </div>
      {/* Proyects */}
      <div className="col-start-3 flex flex-col gap-y-4 py-5 px-16 row-span-1 h-screen overflow-auto">
        <span className="text-center">Proyects</span>
        <span className="py-32 border border-red-600 place-items-center text-center">Proyecto</span>
        <span className="py-32 border border-red-600 place-items-center text-center">Proyecto</span>
        <span className="py-32 border border-red-600 place-items-center text-center">Proyecto</span>
      </div>
    </motion.div>
  );
}

export default App;
