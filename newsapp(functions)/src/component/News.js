import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import Scroll from './Scroll'



export class News extends Component {
    static defaultProps ={
        country:"in",
    }
    static propTypes ={
        country: PropTypes.string,
        category: PropTypes.string,
    }
  articles =[
    {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Jesse Pound, Yun Li",
      "title": "Stock futures rise following S&P 500's third winning week in a row - CNBC",
      "description": "Investors shifted focus to a key inflation report this week for more clarification about the Fed's next move at its policy meeting in September.",
      "url": "https://www.cnbc.com/2022/08/07/stock-market-news-futures-open-to-close.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107098182-1659539861336-trad4.jpg?v=1659539890&w=1920&h=1080",
      "publishedAt": "2022-08-08T12:21:00Z",
      "content": "Stock futures rose on Monday morning, following the S&amp;P 500's third straight weekly gain, as investors shifted focus to a key inflation report this week.\r\nFutures on the Dow Jones Industrial Aver… [+1352 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Peter Schacknow",
      "title": "Stocks making the biggest moves in the premarket: Palantir, Signify Health, Global Blood Therapeutics and more - CNBC",
      "description": "The stocks making the biggest moves in premarket trading include Palantir, Signify Health, Global Blood Therapeutics, and more.",
      "url": "https://www.cnbc.com/2022/08/08/stocks-making-the-biggest-moves-in-the-premarket-palantir-signify-health-global-blood-therapeutics-and-more.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107099728-1659713406098-nyse.jpg?v=1659713428&w=1920&h=1080",
      "publishedAt": "2022-08-08T11:43:52Z",
      "content": "Take a look at some of the biggest movers in the premarket:\r\nPalantir (PLTR) The data analytics company's stock plunged 15.6% in premarket trading after it reported an unexpected quarterly loss, and … [+2149 chars]"
  },
  {
      "source": {
          "id": "ars-technica",
          "name": "Ars Technica"
      },
      "author": "Andrew Cunningham",
      "title": "Rumors, delays, and early testing suggest Intel’s Arc GPUs are on shaky ground - Ars Technica",
      "description": "Possible outcomes run the gamut from \"more delays\" to outright cancellation.",
      "url": "https://arstechnica.com/gadgets/2022/08/rumors-delays-and-early-testing-suggest-intels-arc-gpus-are-on-shaky-ground/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/08/FXt1C91VQAEe-xW-760x380.jpg",
      "publishedAt": "2022-08-08T11:00:56Z",
      "content": "Enlarge/ Arc is Intel's attempt to shake up the GPU market. \r\n39 with 33 posters participating\r\nAlmost a year ago, Intel made a big announcement about its push into the dedicated graphics business. I… [+3729 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Megan Marples, CNN",
      "title": "Earth broke the record for the shortest day since atomic clocks were invented - CNN",
      "description": "The planet's rotation was completed 1.59 milliseconds short of a 24-hour day on June 29, breaking the record for the world's shortest day in modern history.",
      "url": "https://www.cnn.com/2022/08/08/world/earth-shortest-day-rotation-scn/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220805024945-01-earth-shortest-day-rotation-super-tease.jpg",
      "publishedAt": "2022-08-08T10:41:00Z",
      "content": null
  },
  {
      "source": {
          "id": "financial-times",
          "name": "Financial Times"
      },
      "author": "Eri Sugiura, Leo Lewis",
      "title": "Masayoshi Son 'ashamed' of focus on profits after SoftBank logs record $23bn loss - Financial Times",
      "description": "Conglomerate will begin ‘dramatic’ cost-cutting after flagship Vision Funds hit by tech rout and weak yen",
      "url": "https://www.ft.com/content/8d84b488-8f97-4742-ab46-154d3b312a82",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F39b4b7ae-535a-4fde-b843-e9165daac253.jpg?source=next-opengraph&fit=scale-down&width=900",
      "publishedAt": "2022-08-08T10:39:54Z",
      "content": "Huge losses at SoftBanks flagship Vision Funds will force the company to begin dramatic cost-cutting after plunging technology valuations and a weak yen drove Masayoshi Sons embattled conglomerate in… [+3895 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "Ryan Gaydos",
      "title": "Oklahoma's Cale Gundy resigns after reading 'shameful and hurtful' word during film session - Fox News",
      "description": "Oklahoma assistant head football coach Cale Gundy resigned on Sunday after an incident in which he read a player's iPad and uttered a word he shouldn't have said.",
      "url": "https://www.foxnews.com/sports/oklahomas-cale-gundy-resigns-reading-shameful-hurtful-word-during-film-session",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/Cale-Gundy2.jpg",
      "publishedAt": "2022-08-08T10:21:35Z",
      "content": "The Oklahoma Sooners had a shake up on their football staff Sunday with the start of the 2022 season against UTEP just a few days out.\r\nCale Gundy, an assistant head coach for the Sooners, resigned a… [+2961 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Times"
      },
      "author": "Michael Wines",
      "title": "Maps in Four States Were Ruled Illegal Gerrymanders. They’re Being Used Anyway. - The New York Times",
      "description": "A Supreme Court shift, frowning on changes close to elections, gives House Republicans a big advantage in November.",
      "url": "https://www.nytimes.com/2022/08/08/us/elections/gerrymandering-maps-elections-republicans.html",
      "urlToImage": "https://static01.nyt.com/images/2022/08/05/us/00redistrict/merlin_197276739_f896b536-e33e-4a4b-98a8-7a929e24c8aa-facebookJumbo.jpg",
      "publishedAt": "2022-08-08T09:00:25Z",
      "content": "Slow-walking redistricting issues is not confined to federal courts. In Ohio, both congressional and legislative elections this year are being run under maps that the state Supreme Court has ruled ar… [+1454 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Guardian"
      },
      "author": "Adam Gabbatt",
      "title": "Has the love affair between Trump and Fox News gone sour? - The Guardian US",
      "description": "The rightwing channel has not covered its former sweetheart with its regular fervour – could a billion-dollar lawsuit be why?",
      "url": "https://amp.theguardian.com/us-news/2022/aug/08/trump-fox-news-presidential-run-2024",
      "urlToImage": "https://i.guim.co.uk/img/media/4abd13d5356ee4d1f736bf7fb8ffa7ee0064d734/0_0_7484_4491/master/7484.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6c0ca0fe41215999a99f2330112d68a8",
      "publishedAt": "2022-08-08T08:01:00Z",
      "content": "For years, Donald Trump and Fox News were smitten.\r\nThe former president would call into the rightwing news channel seemingly whenever he liked. Fox News hosts pumped up every Trump utterance. Trump … [+4437 chars]"
  },
  {
      "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Brazil’s jiujitsu world champion Leandro fatally shot - Al Jazeera English",
      "description": "Eight-time world champion shot in the head in a Sao Paulo club following an altercation.",
      "url": "https://www.aljazeera.com/sports/2022/8/8/brazils-jiu-jitsu-world-champion-leandro-fatally-shot",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/08/GettyImages-485331443-1.jpg?resize=1200%2C630",
      "publishedAt": "2022-08-08T07:56:16Z",
      "content": "Brazils eight-time jiujitsu world champion Leandro Lo has been fatally shot in a Sao Paulo club, his familys lawyer said.\r\nLo was out with friends on Sunday for a concert at the Clube Siria, a sport … [+1916 chars]"
  },
  {
      "source": {
          "id": "reuters",
          "name": "Reuters"
      },
      "author": null,
      "title": "UN chief demands international access to Ukraine nuclear plant after new attack - Reuters",
      "description": "U.N. Secretary-General Antonio Guterres called on Monday for international inspectors to be given access to the Zaporizhzhia nuclear plant after Ukraine and Russia traded accusations over the shelling of Europe's largest atomic plant at the weekend.",
      "url": "https://www.reuters.com/world/europe/un-chief-demands-international-access-ukraine-nuclear-plant-after-new-attack-2022-08-08/",
      "urlToImage": "https://www.reuters.com/resizer/IhEeDvDraukrUv_J8GA5aWrTPAA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JX5RIREEQ5INTNWHV4TC7QQKOA.jpg",
      "publishedAt": "2022-08-08T07:45:00Z",
      "content": "Aug 8 (Reuters) - U.N. Secretary-General Antonio Guterres called on Monday for international inspectors to be given access to the Zaporizhzhia nuclear plant after Ukraine and Russia traded accusation… [+5361 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Athletic"
      },
      "author": "Sam Lee",
      "title": "Erling Haaland, welcome to the Premier League - The Athletic",
      "description": "On his Premier League debut for Manchester City, Erling Haaland scored two goals but his link-up play and movement were also impressive",
      "url": "https://theathletic.com/3485119/2022/08/08/erling-haaland-manchester-city/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2022/08/07154123/GettyImages-1413461598-1024x683.jpg",
      "publishedAt": "2022-08-08T07:05:44Z",
      "content": "As far as introductions go, Erling Haaland gave us a pretty good preview of whats in store over the next few months.\r\nThe two goals, sure. Truly explosive pace, smart movement, the uncanny knack whic… [+6470 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Post"
      },
      "author": "Joe Tacopino",
      "title": "Roger E. Mosley, 'Magnum, P.I.' star, dies after car crash - New York Post ",
      "description": "Roger E. Mosley, an actor who appeared in the iconic 1980s crime drama “Magnum, P.I.,” died due to injuries he sustained in a car accident.",
      "url": "https://nypost.com/2022/08/08/roger-e-mosley-magnum-p-i-star-dies-after-car-crash/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/newspress-collage-23367712-1659941165909.jpg?quality=75&strip=all&1659926800&w=1024",
      "publishedAt": "2022-08-08T06:56:00Z",
      "content": "Roger E. Mosley, an actor who appeared in the iconic 1980s crime drama Magnum, P.I., died Sunday due to injuries suffered in a car accident last week, his daughter announced. He was 83.\r\nMosley, who … [+845 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Post"
      },
      "author": "Associated Press",
      "title": "Girl, 15, shot and killed by boy, 9, playing with loaded gun - New York Post ",
      "description": "A 15-year-old girl was killed after a 9-year-old boy shot her in the head while playing with a gun.",
      "url": "https://nypost.com/2022/08/08/baltimore-girl-15-shot-and-killed-by-boy-9-playing-with-loaded-gun/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/police-tape-stock-1.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-08-08T06:26:00Z",
      "content": "A 15-year-old girl was accidentally shot and killed by a 9-year-old boy who was playing with a loaded gun, Baltimore police said Sunday.\r\nThe girl was playing on her front porch Saturday night in Wes… [+907 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Times"
      },
      "author": "Neelam Bohra, Vimal Patel",
      "title": "Muslim Community Expresses Fear After Killings of Men in Albuquerque - The New York Times",
      "description": "As the authorities appeal to the public for help in their investigation, many Muslim residents are experiencing a “managed panic.”",
      "url": "https://www.nytimes.com/2022/08/07/us/muslim-killings-albuquerque.html",
      "urlToImage": "https://static01.nyt.com/images/2022/08/07/us/07muslim-fear-1/07muslim-fear-1-facebookJumbo.jpg",
      "publishedAt": "2022-08-08T06:03:00Z",
      "content": "Now, I look outside the window and think, Oh, this is the place where my brother was killed. Should we move? he said.\r\nMr. Hussain said that he had initially hoped to send his brothers body back to b… [+974 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "Maureen Mackey",
      "title": "NJ woman who survived lightning strike details her shocking experience: 'I was doing the laundry' - Fox News",
      "description": "A lightning strike survivor in Burlington County, N.J., recounted to Fox News Digital her experiences of being injured by a lightning strike — she was indoors at the time, she explained.",
      "url": "https://www.foxnews.com/lifestyle/nj-woman-survived-lightning-strike-details-shocking-experience-doing-laundry",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/FL-Lightning.jpg",
      "publishedAt": "2022-08-08T06:00:52Z",
      "content": "Lightning strikes took the lives of three people recently who were outside the White House in Washington, D.C. \r\nJames Mueller and Donna Mueller of Janesville, Wisc., both in their 70s, succumbed to … [+14864 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Israel-Gaza: Ceasefire holds overnight after days of violence - BBC",
      "description": "Israel and Palestinian militants agreed to a Egyptian-mediated truce that took effect late on Sunday.",
      "url": "https://www.bbc.com/news/world-middle-east-62457780",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10D31/production/_126231986_gettyimages-1242361666.jpg",
      "publishedAt": "2022-08-08T04:40:31Z",
      "content": "A ceasefire between Israel and Palestinian militants held overnight, following three days of violence.\r\nIsolated weapons fire from both sides in the minutes before and just after the Sunday night dea… [+3467 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "CNBC"
      },
      "author": "Abigail Ng",
      "title": "Hong Kong cuts hotel quarantine for travelers to 3 days, plus 4 days of home medical surveillance - CNBC",
      "description": "After completing the hotel quarantine, travelers can stay at home or in a hotel for the four days of surveillance.",
      "url": "https://www.cnbc.com/2022/08/08/hong-kong-reduces-hotel-quarantine-for-overseas-visitors-to-three-days.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107100123-1659927205624-gettyimages-1412200813-vcg111394518417.jpeg?v=1659927508&w=1920&h=1080",
      "publishedAt": "2022-08-08T03:05:00Z",
      "content": "Hong Kong is reducing the amount of time travelers will need to serve hotel quarantine, from seven days down to three starting Friday.\r\n\"The seven-day quarantine hotel arrangement will be changed to … [+1674 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Nicki Brown, Samantha Beech, Emily Chang and Alaa Elassar, CNN",
      "title": "At least 68 migrants arrived in NYC over the weekend on buses sent by Texas Gov. Abbott - CNN",
      "description": "New York Mayor Eric Adams has claimed that some migrants are being \"forced\" on buses from Texas, as 14 more asylum seekers arrived in the city Sunday on another bus sent by Texas Gov. Greg Abbott.",
      "url": "https://www.cnn.com/2022/08/07/us/new-york-migrants-buses-texas/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220807182238-new-york-migrants-forced-buses-texas-super-tease.jpg",
      "publishedAt": "2022-08-08T01:30:00Z",
      "content": null
  },
  {
      "source": {
          "id": "the-verge",
          "name": "The Verge"
      },
      "author": "Chris Welch",
      "title": "LG's latest earbuds include head-tracking spatial audio - The Verge",
      "description": "LG’s new Tone Free T90 earbuds offer Dolby Head Tracking for immersive spatial audio, and they also have redesigned drivers for improved bass. The company is also releasing a pair of fitness earbuds called the Tone Free Fit.",
      "url": "https://www.theverge.com/2022/8/7/23295905/lg-tone-free-t90-tf8-announced-features",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Rsdf1ZyIGYnmWOg7r-hvBw4nvY4=/0x127:1868x1105/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23928666/LG.jpg",
      "publishedAt": "2022-08-08T01:00:00Z",
      "content": "The company is also adding a sporty option to the Tone Free lineup\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nImage: LG\r\nLG is today announci… [+2295 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Times"
      },
      "author": "Kenneth Chang",
      "title": "South Korea Launch Scouts the Moon, With More Missions to Come - The New York Times",
      "description": "The Danuri spacecraft, which launched on Thursday, aims to provide a lunar scientific bounty while preparing the country’s small space program for future exploration.",
      "url": "https://www.nytimes.com/2022/08/05/science/korea-moon-danuri.html",
      "urlToImage": "https://static01.nyt.com/images/2022/08/09/science/05korea-moon1/05korea-moon1-facebookJumbo.jpg",
      "publishedAt": "2022-08-08T00:46:00Z",
      "content": "If you dont look at it carefully, you might not be able to see it, Dr. Li said.\r\nJean-Pierre Williams, a planetary scientist at the University of California, Los Angeles, and another participating sc… [+1797 chars]"
  }
  ]
   capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles:this.articles,
      loading:false,
      page:1,
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
  }
  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd2680145ccb4f38a92fe20cb612c6d9&page=1&pageSize=21`;
    this.setState({loading:true})
    let data =await fetch(url)
    console.log(data)
    let dataparsed = await data.json()
    this.setState({loading:false})

    console.log(dataparsed)
    this.setState({articles:dataparsed.articles})
   }
 handleNextClick =async()=>{
    console.log("next")
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd2680145ccb4f38a92fe20cb612c6d9&page=${this.state.page+1}&pageSize=21`;
    this.setState({loading:true})
    let data =await fetch(url)
    console.log(data)
    let dataparsed = await data.json()
    this.setState({loading:false})
    console.log(dataparsed)
    this.setState({
        page:this.state.page+1,
        articles:dataparsed.articles
    })
    
  }
  handlePrevClick =async()=>{
    console.log("next")
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd2680145ccb4f38a92fe20cb612c6d9&page=${this.state.page-1}&pageSize=21`;
    this.setState({loading:true})
    let data =await fetch(url)
    console.log(data)
    let dataparsed = await data.json()
    this.setState({loading:false})

    console.log(dataparsed)
    this.setState({
        page:this.state.page-1,
        articles:dataparsed.articles
    })
  }
  
  render() {
    return (
        <>
        {this.state.loading&&<Scroll/>}
      <div className='container'>
        <br />
        <h2 style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading&&<Spinner/>}
        <div>
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="row" key={element.url}>
          <Newsitems title={element.title?element.title.slice(0,44):""} desc ={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsURL={element.url}author={element.author} time={element.publishedAt}source={element.source.name}/>
          </div>
        })}
        </div>
        <button disabled={this.state.page<=1} style={{float:"left",width:"7vw"}}onClick={this.handlePrevClick}>&larr; Previous</button>
        <button style={{float:"right",width:"6vw"}} onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
        </>
    )
  }
}

export default News
