import Head from 'next/head'

const Meta=({title,keywords,description})=>{
    return(
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/logo.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps={
    title:'有个小院',
    keywords:'每天学习一点点',
    description:'让你不再枯燥，不再孤单'
}



export default Meta