import * as React from "react";
import Head from 'next/head';
import Category from './Category';
import { useState } from 'react';
import utilStyles from '../../../styles/utils.module.css';
import { log } from "console";

export default function Game(props) {
  let jeopardyData = props.data;
  const [gamePoint, setGamePoint] = useState<number>(0);  
  const gamePointF=(point:number)=>{
    setGamePoint(gamePoint+point);
  }
  
  return (
    <>
    <Head>
      <title>QUIZ | GAME</title>
    </Head>
      <p>Point: {gamePoint}</p>
      {
      jeopardyData.map((game, index:number) => {
        return(
        <Category 
          key             = {index}
          category        = {game.category}
          question_array  = {game.question_array}
          gamePointF      = {gamePointF}
          />
        )  
      }
    )}
    </>
  )
}