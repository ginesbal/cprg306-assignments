import NewItem from './new-item';

export default function Page() {
    return (
        <main>
            <h1 className='flex justify-center font-bold mt-4'>Week 4 Assignment</h1>
            <section className='flex justify-center w-full mt-4'>
            <NewItem />
            </section>
        </main>
    );
}