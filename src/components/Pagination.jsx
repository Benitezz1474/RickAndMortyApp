export const Pagination =({nextPage, backPage, counter})=>{


    return <div className="pagination">
      <button onClick={backPage} > Back </button>
      <h2>Page: {counter}</h2>
        <button onClick={nextPage} > Next </button>
    </div>
}