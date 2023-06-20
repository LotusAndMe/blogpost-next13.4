
import Posts from './components/Posts';
export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='my-12 text-3xl text-center dark:text-white'>
        Hello and Welcome👍&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Andrew</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
