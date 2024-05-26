// import DeployButton from "../components/DeployButton";
// import AuthButton from "../components/AuthButton";
// import { createClient } from "@/utils/supabase/server";
// import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
// import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import { Header } from "@/components/Header";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Index() {
  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r ">
      <h1 className="text-5xl font-bold mb-4 dark:text-white">
        Welcome to Note App
      </h1>
      <p className="text-xl mb-8 dark:text-white">
        The best place to keep all your notes organized.
      </p>
      <a className="bg-white  text-slate-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer transition duration-300">
        Get Started
      </a>
    </div>
  );
}
