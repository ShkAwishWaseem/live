import React, { useState , useEffect } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Content from "@/components/Content";
import image3 from "../Images/3.png";
import image4 from "../Images/4.png";
import Image from "next/image";
import Bloglayout from "@/components/Bloglayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Progress from "@/components/Progress";



const home = () => {

  //    }
  return (
    <>
        <Header />
        <Progress/>
    
      <div className="mt-[70px] container mx-auto py-5 ">
        <div className="parent_home flex flex-row justify-between flex-wrap">
          <div className="main  flex justify-center items-center p-4 flex-wrap flex-row w-[50%]">
            <div className="home_image">
              <Image className="right_home_image" src={image3} alt="image" />
            </div>
            <div className="home_content">
              <h1 className="home_content">Hot Topics</h1>
              <p className="home_content_paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam necessitatibus culpa nobis illo, sapiente aut molestias
                aspernatur atque assumenda iure ipsam iste ipsa eum, ullam vero
                est! Porro, ex laborum.
              </p>
            </div>
            </div>
            
            <div className="right_home_content main flex justify-center items-center p-4 flex-wrap flex-row w-[50%]">
            <div className="home_image">
              <Image className="right_home_image" src={image4} alt="image" />
            </div>
            <div className="home_content">
              <h1 className="home_content">Hot Topics</h1>
              <p className="home_content_paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam necessitatibus culpa nobis illo, sapiente aut molestias
                aspernatur atque assumenda iure ipsam iste ipsa eum, ullam vero
                est! Porro, ex laborum.
              </p>
            </div>
          </div>
        </div>
        </div>
           
        <div>
      <Bloglayout/>
          </div>
    </>
  );
};

export default home;
