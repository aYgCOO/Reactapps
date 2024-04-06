function List() {
     let todo_text = "this is a todo list";
     let todo_date = "10/2/2022";
     return (
          <div className="d-flex align-items-center">
          <div className="col bg-light border me-3">
              <label className="visually-hidden">Todo</label>
              <span className="form-control-plaintext" id="staticEmail2">{todo_text}</span>
          </div>
          <div className="col bg-secondary px-5 me-3">
              <label className="visually-hidden">date</label>
              <span className="form-control-plaintext text-light" id="staticEmail2">{todo_date}</span>
          </div>
          <div className="col">
              <button type="submit" className="btn btn-danger mb-3"><i className="ri-delete-bin-2-fill"></i> Delete</button>
          </div>
      </div>
      
     )

}
export default List;