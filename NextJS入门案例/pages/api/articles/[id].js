import {articles} from '../../../data'

export default function hander({query: {id}},res){
    const filtered=articles.filter(article=>article.id===id)
    if(filtered.length>0){
        res.status(200).json(filtered[0])
    }else{
        res.status(404).json(`文章${id}没找到`)
    }
}