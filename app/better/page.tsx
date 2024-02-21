
import { create, deleteItem, edit } from '../action';
import prisma from '../db'


async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            input: true,
            id: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return data;
}


export default async function BetterExample() {
    const data = await getData()

    return (
        <div className=" w-screen flex items-center justify-center">
            <div className="border rounded-lg shadow-xl p-10 w-[70vw]">
                <form action={create} className="flex flex-col">
                    <input type="text" name="input" className="border p-1 border-gray-800" />
                    <button className="bg-green-500 rounded-lg mt-2 text-white py-2" type="submit">Submit</button>
                </form>
                <div className="mt-5 flex flex-col gap-y-2">
                    {
                        data.map((todo) => (
                            <form action={edit} className="flex" key={todo.id}>
                                <input type="hidden" name="inputId" value={todo.id} />

                                <input className="border p-1" type="text" name="input" defaultValue={todo.input} />

                                <button type="submit" className="border bg-green-400">Save</button>

                                <button formAction={deleteItem} className="border bg-red-400">Delete</button>
                            </form>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}