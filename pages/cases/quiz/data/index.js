import { data2} from './quizData';

export const getStaticProps = async () =>{
  return{
    props:{
      quizData:data2,
    },
  }
}
export default({ quizData})=>{
  <>
    {quizData.map(quiz=>(
      <p></p>
    ))}
  </>
}