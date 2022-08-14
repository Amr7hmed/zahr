import React from 'react';

function Categories(props) {
  return (
    <div className='fillter__categories'>
      <div className="title">
         <h4>الفئات</h4>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample">

          <div className="accordion-item" >
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target={`#test`} aria-expanded="false" aria-controls="test1">

                <input type="radio" value="test3" name="filter" id="test2" 
                />
                <label htmlFor="test2">زهور </label> 
              </button>
            </h2>

              <div id="test" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample" key="1">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <input type="radio" value="test1" name="sub_filter"
                        id="2" />
                        <label htmlFor="test">نباتات منزليه</label>
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>


          <div className="accordion-item" >
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target={`#test2`} aria-expanded="false" aria-controls="test1">

                <input type="radio" value="test3" name="filter" id="test2" 
                />
                <label htmlFor="test2">أوانى منزليه </label> 
              </button>
            </h2>

              <div id="test2" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample" key="1">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <input type="radio" value="test1" name="sub_filter"
                        id="2" />
                        <label htmlFor="test">
                          منتج 1
                        </label>
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>



          <div className="accordion-item" >
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target={`#test3`} aria-expanded="false" aria-controls="test1">

                <input type="radio" value="test3" name="filter" id="test2" 
                />
                <label htmlFor="test2">
                  تحف </label> 
              </button>
            </h2>

              <div id="test3" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample" key="1">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <input type="radio" value="test1" name="sub_filter"
                        id="2" />
                        <label htmlFor="test">
                          منتج 1
                        </label>
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>
      </div>
    </div>
  )
}

export default Categories;