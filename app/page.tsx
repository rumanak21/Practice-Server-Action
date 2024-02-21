import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border rounded-lg shadow-xl p-10 w-[70vw]">
        <form className="flex flex-col">
          <input type="text" name="input" className="border p-1 border-gray-800" />
          <button className="bg-green-500 rounded-lg mt-2 text-white py-2" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
