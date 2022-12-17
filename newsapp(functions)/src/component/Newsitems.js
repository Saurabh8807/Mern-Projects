import React from 'react'

export default function Newsitems(props){
 
    // let {title,desc,imgurl,newsURL,author,time,source} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <span style={{marginLeft:"-30px",zIndex:"1"}} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.source}</span>
          <img src={!props.imgurl?"https://cdn.britannica.com/95/149595-050-760CE7DB/Gateway-of-India-Taj-Mahal-Hotel-Mumbai.jpg":props.imgurl} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">{props.title}...</h5>
              <p className="card-text">{props.desc}...</p>
              <p className="card-text"><small class="text-muted">by {props.author? props.author:"Unknown"} on {new Date(props.time).toGMTString()}</small></p>
              <a href={props.newsURL } target="_main" className="btn btn-primary">Read more</a>
        </div>
      </div>
      </div>
    )
}

