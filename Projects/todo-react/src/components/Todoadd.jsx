function Todoadd() {
     return <><div>
          <div className="row g-3">
               <div className="col">
                    <input type="text" className="form-control" placeholder="Enter todo..." aria-label="First name" />
               </div>
               <div className="col">
                    <input type="date" className="form-control" aria-label="Last name" />
               </div>
               <div className="col-auto">
                    <button type="submit" className="btn btn-danger mb-3"><i className="ri-add-circle-line"></i> Add</button>
               </div>
          </div>

     </div>
     </>

}
export default Todoadd;