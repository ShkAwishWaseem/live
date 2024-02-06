import React, {useState} from 'react'
import Link from 'next/link'
import LoadingBar from 'react-top-loading-bar'
import { hasCookie } from 'cookies-next'
import { useRouter } from 'next/router'


const Hero = () => {
  const router = useRouter();
  const clickHandler = () => {

    if(!hasCookie("token")){
      router.push("/login");
      setProgress(100)
        }
        else{
          router.push("/home");
          setProgress(100)
        }
  }
  const [progress, setProgress] = useState(0); 
  return (
    <>
      <LoadingBar
        color='#001f3f'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <div className="hero h-96 ">
                    <div className="container mx-auto hero_child pt-16">
                    <h1>Stay curious.</h1>
                    <p>Discover stories, thinking, and expertise from writers on any topic.</p>
                    <Link href="/login"><button className='btn' onClick={clickHandler}>Start Reading</button></Link>
                    </div>
          </div> 
          </>
  )
}

export default Hero
