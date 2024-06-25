import Article from "./Article"

function ArticleList(props){
    
    const parsedList = props.posts.map((article) => {
        return (
            <Article key={article.id} 
            title={article.title} 
            date={article.date} 
            preview={article.preview}/>
        )
    })
    return (
        <main>
            {parsedList}
        </main>
    )
}
export default ArticleList;