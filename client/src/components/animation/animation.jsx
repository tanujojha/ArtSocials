
export default function Animation(){
  return(
  <div className="col-md-6">

    <div className="compdiv">
      <img className="compimg" src="pics/monitor2.png" alt="computer"/>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="pics/forest.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="pics/tree.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="pics/mask.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    </div>
</div>
)
}
