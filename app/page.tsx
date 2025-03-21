"use client";
import React from "react";
import Header from "@/components/Header";
import useStoredNumber from '../hooks/useStoredNumber';

import {useRouter} from 'next/navigation'

export default function Home() {
  const [, , , removeStoredNumber] = useStoredNumber([]); 

  const router = useRouter();

  const handleRedirect = () => {
    router.push('/quiz/1');
    removeStoredNumber();
  }
  return (
    <div>
    <Header/>
    <main className="md:min-h-screen flex mt-[70px] md:mt-[0px] justify-start items-start md:justify-center md:items-center">
    <div className="flex flex-col md:flex-row text-center md:text-left justify-center items-center md:items-start md:justify-between container">
    <div className="max-w-lg">
    <h1 className="font-poppins text-4xl">Der<strong> Droste Wahl-O-Mat</strong></h1>
    <p className="font-inter my-5 md:mt-5 md:mb-0">Mache das Quiz und finde heraus, welche Partei am ehesten deinen 
    Meinungen entspricht!</p>

    <p className="mt-5 mb-5 md:mb-0 font-inter font-semibold">Site developed by Luca Machiedo</p>
    <button onClick={handleRedirect} className="group relative hidden md:inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 mt-5"><a className="font-inter font-bold">Quiz starten</a><div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
    </div>
    <div className="flex-shrink-0">
    <img className="w-[400px] rounded-lg shadow-lg" src="/images/wahl.png"/>
    <button onClick={handleRedirect} className="group relative inline-flex md:hidden h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 my-5"><a className="font-inter font-bold">Quiz starten</a><div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>

    </div>
    </div>
    </main>
    </div>
  );
}
