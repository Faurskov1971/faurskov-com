import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'
import Game from './quiz/Game'
import {data} from './quiz/data/quizData';

export default function QuizIntro() {
  return (
    <>
    <Layout>
      <Head>
        <title>Case med quiz</title>
      </Head>
      <Game data={data} />
    </Layout>
    </>
  )
}