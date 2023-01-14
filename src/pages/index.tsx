import Head from '@/infra/components/Head'
import Header from './components/Header'


export default function Home() {

  const title = 'o que eu quiser bebezão!'

  return (
    <>
        <Head title={title} />
        <Header />
        <div className='text-slate-50 underline'>hello</div>
    </>
  )
}
