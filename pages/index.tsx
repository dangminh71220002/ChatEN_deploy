import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  >
        <div className='min-h-[90vh] bg-[#F7F8FA]'>
          <div className='text-[black] w-[80vw] container  m-auto p-[50px]'>
            <h1 className='text-[38px] font-[700] font-mono'>ChatEN</h1>
            <h2 className='text-[20px] font-[500] font-mono'> Unlock the power of English and embark on a journey of language mastery.</h2>
            <div className="grid grid-cols-3 gap-4 mt-[20px]">
              <a href= '/chat' className='h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md'>
                <div className='flex items-center h-[25vh]'>
                <img title='img' src='https://cdn-icons-png.flaticon.com/512/1698/1698535.png' className=' mx-[20px] h-[20vh] w-[20vh] rounded-[20px] '>
                    
                    </img>
                  <div className='flex self-start my-[2.5vh] mx-[4px]'>
                    <div>
                    <p className='text-[18px] font-[600]'> Text Chat </p>
                    <p className='text-[13px] ml-[5px]'>Engage in interactive conversations with our intelligent chatbot.  </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href= '/voice' className='h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md'>
                <div className='flex items-center h-[25vh]'>
                <img title='img' src='/voice.jpg' className=' mx-[20px] h-[20vh] w-[20vh] rounded-[20px] '>
                    
                    </img>
                  <div className='flex self-start my-[2.5vh] mx-[4px]'>
                    <div>
                    <p className='text-[18px] font-[600]'>Voice Chat with Bot </p>
                    <p className='text-[13px] ml-[5px]'>Language learning to the next level by having voice-based </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href= '/searchword' className='h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md'>
                <div className='flex items-center h-[25vh]'>
                  <img title='img' src='https://cdn-icons-png.flaticon.com/512/1698/1698535.png' className=' mx-[20px] h-[20vh] w-[20vh] rounded-[20px] '>
                    
                  </img>
                  <div className='flex self-start my-[2.5vh] mx-[4px]'>
                    <div>
                    <p className='text-[18px] font-[600]'> Sentence Word And Video Search </p>
                    <p className='text-[12px] ml-[5px]'>Discover words in sentences with our word search tool</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href= '/flipvocab' className='h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md'>
                <div className='flex items-center h-[25vh]'>
                  <img title='sg' src='https://images.squarespace-cdn.com/content/v1/5d577d5ad3fea90001736e05/1618901038734-D9X7HTDS83C9QT6ILWRG/03-VOCAB-MATCH-B.jpg?format=1500w' className=' mx-[20px] h-[20vh] w-[20vh] rounded-[20px] '>
                  </img>
                  <div className='flex self-start my-[2.5vh] mx-[4px]'>
                    <div>
                    <p className='text-[18px] font-[600]'> FlipVocab </p>
                    <p className='text-[13px] ml-[5px]'> Master vocabulary through interactive flashcards. </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href= '/login' className='h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md'>
                <div className='flex items-center h-[25vh]'>
                  <img title='sg' src='./login.jpg' className=' mx-[20px] h-[20vh] w-[20vh] rounded-[20px] '>
                  </img>
                  <div className='flex self-start my-[2.5vh] mx-[4px]'>
                    <div>
                    <p className='text-[18px] font-[600]'> FlipVocab </p>
                    <p className='text-[13px] ml-[5px]'> Master vocabulary through interactive flashcards. </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href= '/signup' className='h-[25vh] m-[5px] rounded-[20px] my-[30px] bg-[#FFFFFF] border-[1px] border-[#b2b0b0] shadow-md'>
                <div className='flex items-center h-[25vh]'>
                  <img title='sg' src='./signup.jpg' className=' mx-[20px] h-[20vh] w-[20vh] rounded-[20px] '>
                  </img>
                  <div className='flex self-start my-[2.5vh] mx-[4px]'>
                    <div>
                    <p className='text-[18px] font-[600]'> FlipVocab </p>
                    <p className='text-[13px] ml-[5px]'> Master vocabulary through interactive flashcards. </p>
                    </div>
                  </div>
                </div>
              </a>
             

            </div>
          </div>
        </div>
      </main>
    </>
  )
}