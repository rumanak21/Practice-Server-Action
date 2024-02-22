
import { create, deleteItem, edit } from '../action';
import DeleteButton from '../components/DeleteButton';
import FormElement from '../components/Form';
import Savebutton from '../components/Savebutton';
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
        <div className=" h-screen w-screen flex items-center justify-center">
            <div className="border rounded-lg shadow-xl p-10 w-[70vw]">
                <FormElement />
                <div className="mt-5 flex flex-col gap-y-2">
                    {
                        data.map((todo) => (
                            <div key={todo.id} className='w-full h-full flex items-center'>
                                <form action={edit} className="flex">
                                    <input type="hidden" name="inputId" value={todo.id} />

                                    <input className="border p-1" type="text" name="input" defaultValue={todo.input} />

                                    <Savebutton />


                                </form>
                                <form action={deleteItem}>
                                    <input type="hidden" name="inputId" value={todo.id} />
                                    <DeleteButton />
                                </form>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}