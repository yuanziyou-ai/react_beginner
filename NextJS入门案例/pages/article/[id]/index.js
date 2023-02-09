import {server} from '../../../config/index'
import Link from 'next/link'
import {useRouter} from 'next/router'
const article=({article})=>{
    return(
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <Link href='/'>返回</Link>
        </>
    )
}
export const getServerSideProps=async (context)=>{
    const res=await fetch(`${server}/api/articles/${context.params.id}`)
    const article=await res.json()
    return {
        props:{
            article
        }
    }

}
export default article