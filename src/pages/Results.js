import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import moment from 'moment';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetResults } from '../redux/actions/search';


const useStyles = makeStyles({
  root: {
    marginTop: "32px",
    maxWidth: "1900px",
    height: "475px",
    padding: "16px"
  },
  paper: {
    width: "525px",
    textAlign: "center",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "16px 8px 8px 8px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    }
  },
  title: {
    width: "480px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.2em",
    height: "3em",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    paddingBottom: "12px",
    paddingLeft: "20px"
  },
  author: {
    margin: "0"
  },
  image: {
    width: "450px",
    maxHeight: "300px",
    border: "2px solid #666",
    borderRadius: "4px",
    margin: "8px"
  }, 
  description: {
  },
  linkOverride: {
    color: "black",
    textDecoration: "none"
  }
})


export default function Results() {
  const { startDate, endDate, searchTerm } = useParams();

  const results = useSelector(state => state.search.results);
  const dispatch = useDispatch();
  // const newsData = [
  //   {
  //       "source": {
  //           "id": "the-washington-post",
  //           "name": "The Washington Post"
  //       },
  //       "author": "Hannah Knowles",
  //       "title": "Covid-19 live updates: WHO Europe head says vaccine booster shots 'not a luxury' and help protect the vulnerable - The Washington Post",
  //       "description": "The World Health Organization has previously urged wealthy nations to hold off on booster shots of the coronavirus vaccine until people in poorer countries can get their first doses.",
  //       "url": "https://www.washingtonpost.com/nation/2021/08/30/covid-delta-variant-live-updates/",
  //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DD3ZIHAHKQI6ZM6EYRRLD3OPZA.jpg&w=1440",
  //       "publishedAt": "2021-08-30T16:07:30Z",
  //       "content": "BRUSSELS The European Union is recommending that its 27 member countries reinstate restrictions on American travelers, a change that would primarily affect unvaccinated people, as soaring rates of ne??? [+1457 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "WLS-TV"
  //       },
  //       "author": "Alexis McAdams and Maher Kawash",
  //       "title": "Chicago police officer accused of attacking Black woman walking dog near North Avenue Beach; COPA investigating - WLS-TV",
  //       "description": "Video showing an altercation between a Chicago police officer and a Black woman walking her dog at North Avenue Beach is under investigation by COPA.",
  //       "url": "https://abc7chicago.com/chicago-police-north-avenue-beach-video-black-woman/10986831/",
  //       "urlToImage": "https://cdn.abcotvs.com/dip/images/10987518_083021-wls-maher-cd-altercation-video1130-vid.jpg?w=1600",
  //       "publishedAt": "2021-08-30T15:56:15Z",
  //       "content": "CHICAGO (WLS) -- The Civilian Office of Police Accountability is investigating a video that appears to show an altercation between a Black woman walking her dog and a Chicago police officer along the??? [+4302 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "New York Times"
  //       },
  //       "author": "Elian Peltier",
  //       "title": "Unvaccinated U.S. Visitors Could Face New Restrictions on Travel to Europe - The New York Times",
  //       "description": "The European Union???s leaders removed the United States from a ???safe list.??? Individual countries in the bloc are not obliged to follow suit, however.",
  //       "url": "https://www.nytimes.com/2021/08/30/world/eu-us-tourists-restrictions.html",
  //       "urlToImage": "https://static01.nyt.com/images/2021/08/30/world/30virus-briefing-eu-travel/30virus-briefing-eu-travel-facebookJumbo.jpg",
  //       "publishedAt": "2021-08-30T15:50:13Z",
  //       "content": "Most countries in the bloc do not require Americans to isolate upon arrival, but a few have kept quarantine requirements in place this summer, including, in some cases, for inoculated visitors.\r\nStil??? [+1339 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "The Guardian"
  //       },
  //       "author": "Jon Henley",
  //       "title": "US intercepts rockets targeting Kabul airport as key diplomats fly out - The Guardian",
  //       "description": "Islamic State claims responsibility for attacks in final hours of western evacuation of Afghanistan",
  //       "url": "https://amp.theguardian.com/world/2021/aug/30/us-intercepts-rockets-targeting-kabul-airport-as-key-diplomats-fly-out",
  //       "urlToImage": null,
  //       "publishedAt": "2021-08-30T15:05:00Z",
  //       "content": "Rockets fired at Kabul airport as US approaches withdrawal deadline video \r\nAfghanistanIslamic State claims responsibility for attacks in final hours of western evacuation of Afghanistan\r\nUS anti-mis??? [+5797 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Investor's Business Daily"
  //       },
  //       "author": "Investor's Business Daily",
  //       "title": "Vaccine Stocks Dip Ahead Of CDC Meeting To Discuss Booster Shots - Investor's Business Daily",
  //       "description": "Vaccine stocks Pfizer, BioNTech and Moderna dipped Monday ahead of a key CDC meeting of medical experts to discuss booster shots.",
  //       "url": "https://www.investors.com/news/technology/vaccine-stocks-dip-ahead-of-cdc-meeting-to-discuss-booster-shots/",
  //       "urlToImage": "https://www.investors.com/wp-content/uploads/2021/04/Stock-vaccineshot-04-adobe.jpg",
  //       "publishedAt": "2021-08-30T14:49:00Z",
  //       "content": "Vaccine stocks BioNTech (BNTX) and Moderna (MRNA) dipped Monday ahead of a key Centers for Disease Control and Prevention meeting to discuss booster shots.\r\nXThe meeting is the next step toward Covid??? [+2707 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "KOMO News"
  //       },
  //       "author": "Gerald Tracy, KOMONews.com Digital Producer",
  //       "title": "Boeing 777s, which had engine blow apart after takeoff, grounded until 2022 - KOMO News",
  //       "description": "SEATTLE &ndash; Boeing has grounded a group of 777 planes until 2022 as it works with the Federal Aviation Administration to fix flaws. The flaws were exposed last February when a United Airlines jet&rsquo;s engine cover ripped off over Colorado. RELATED:Boei???",
  //       "url": "https://komonews.com/news/local/boeing-777s-which-had-engine-blow-apart-after-takeoff-grounded-until-2022",
  //       "urlToImage": "https://static-23.sinclairstoryline.com/resources/media/da4f1b6f-4d87-4253-b305-1b17c608a1f4-large16x9_AP21053608988065.jpg?1630334256631",
  //       "publishedAt": "2021-08-30T14:38:14Z",
  //       "content": null
  //   },
  //   {
  //       "source": {
  //           "id": "ars-technica",
  //           "name": "Ars Technica"
  //       },
  //       "author": "Andrew Cunningham",
  //       "title": "Microsoft may withhold security updates from unsupported Windows 11 PCs - Ars Technica",
  //       "description": "MS would really, really like you to use an officially supported PC.",
  //       "url": "https://arstechnica.com/gadgets/2021/08/microsoft-may-withhold-security-updates-from-unsupported-windows-11-pcs/",
  //       "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/06/introducing-windows-11-760x380.png",
  //       "publishedAt": "2021-08-30T14:34:08Z",
  //       "content": "Enlarge/ The latest Windows focuses heavily on improved task management, prettier UI, and a much more ambitious Microsoft Store.\r\n130 with 67 posters participating\r\nThere are still a lot of question ??? [+2301 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Www.https"
  //       },
  //       "author": "New York Post",
  //       "title": "'RHOA' alum NeNe Leakes says husband Gregg is 'transitioning to the other side' amid cancer battle - Fox News",
  //       "description": "The couple first married in 1997 and divorced in 2011 before remarrying in 2013.",
  //       "url": "https://www.https://pagesix.com/2021/08/29/nene-leakes-husband-transitioning-to-the-other-side-amid-cancer-battle/",
  //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/nene-gregg.jpg",
  //       "publishedAt": "2021-08-30T14:13:13Z",
  //       "content": "\"The Real Housewives of Atlanta\" alum NeNe Leakes was recently recorded telling patrons of her Atlanta lounge, The Linnethia, that husband Gregg Leakes could possibly be losing his battle with cancer??? [+1395 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "The Guardian"
  //       },
  //       "author": "Martin Pengelly",
  //       "title": "Rand Paul: ???Hatred for Trump??? blocks Covid study of horse drug ivermectin - The Guardian",
  //       "description": "Kentucky senator tells constituents he is ???in the middle??? on use of anti-parasitic FDA has implored Americans not to take",
  //       "url": "https://amp.theguardian.com/us-news/2021/aug/30/rand-paul-ivermectin-covid-donald-trump",
  //       "urlToImage": null,
  //       "publishedAt": "2021-08-30T14:02:00Z",
  //       "content": "Rand PaulKentucky senator tells constituents he is in the middle on use of deworming medication FDA has implored Americans not to take\r\nFederal researchers will not objectively study ivermectin as a ??? [+3960 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "usa-today",
  //           "name": "USA Today"
  //       },
  //       "author": "Farah Hannoun",
  //       "title": "VIDEO: Jake Paul, Tommy Fury react to their backstage confrontation, discuss potential fight - MMA Junkie",
  //       "description": "Tommy Fury wants Jake Paul next, but Paul wants to see enticing numbers out of the Brit.",
  //       "url": "https://mmajunkie.usatoday.com/2021/08/video-jake-paul-tommy-fury-reaction-backstage-confrontation-fight-boxing-mma-tyron-woodley",
  //       "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2021/08/tommy-fury-jake-paul-video.jpg?w=1000&h=576&crop=1",
  //       "publishedAt": "2021-08-30T14:01:01Z",
  //       "content": "CLEVELAND Tommy Fury wants Jake Paul next, but Paul wants to see enticing numbers out of the Brit.\r\nFollowing his win over Anthony Taylor on Sunday, Fury called out Paul, who outpointed former UFC he??? [+3689 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Investor's Business Daily"
  //       },
  //       "author": "Investor's Business Daily",
  //       "title": "Dow Jones Today, Stocks Mixed As Strong August Winds Down; Facebook, Chipotle Near Buy Points; Generac Rises On Hurricane Ida - Investor's Business Daily",
  //       "description": "Generac received a hurricane boost, as chips and software showed strength while the Dow Jones today lagged.",
  //       "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-today-futures-edge-higher-in-a-strong-august-facebook-chipotle-near-buy-points-china-clamps-down-on-video-games/",
  //       "urlToImage": "https://www.investors.com/wp-content/uploads/2019/04/stock-NYSE-exterior-03-adobe.jpg",
  //       "publishedAt": "2021-08-30T14:00:00Z",
  //       "content": "Tech stocks led the market higher Monday, with the S&amp;P 500 edging out a new high as investors moved to wrap up a solid August performance. Chip and software names showed early strength. Dynavax a??? [+7807 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "the-jerusalem-post",
  //           "name": "The Jerusalem Post"
  //       },
  //       "author": "By  MICHAEL STARR,  TAL SPUNGIN",
  //       "title": "Border policeman dies from Gaza riot shooting injury - The Jerusalem Post",
  //       "description": "St.-Sgt. Barel Shmueli was shot by a Gazan gunman during border riots, and despite multiple surgeries to save his life, he succumbed to the injuries.",
  //       "url": "https://www.jpost.com/israel-news/border-policeman-dies-from-gaza-riot-shooting-injury-677482",
  //       "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/481889",
  //       "publishedAt": "2021-08-30T13:45:00Z",
  //       "content": null
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "The Guardian"
  //       },
  //       "author": "Erin MacLeod",
  //       "title": "Lee ???Scratch??? Perry: 10 of his greatest recordings - The Guardian",
  //       "description": "From Bob Marley to the Congos, Junior Murvin and his own outstanding work on the mic, we celebrate the work of a man who seemed to dissolve time",
  //       "url": "https://amp.theguardian.com/music/2021/aug/30/lee-scratch-perry-10-of-his-greatest-recordings",
  //       "urlToImage": null,
  //       "publishedAt": "2021-08-30T13:42:00Z",
  //       "content": "Lee 'Scratch' PerryFrom Bob Marley to the Congos, Junior Murvin and his own outstanding work on the mic, we celebrate the work of a man who seemed to dissolve time\r\nMon 30 Aug 2021 13.52 BST\r\nWhen I ??? [+7074 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "CNBC"
  //       },
  //       "author": "Jessica Bursztynsky",
  //       "title": "Shares of Globalstar soar 40% on rumor iPhone 13 will use satellites directly - CNBC",
  //       "description": "Shares of Globalstar, a satellite services provider, surged following a report that the newest iPhone will have the ability to utilize satellite communications.",
  //       "url": "https://www.cnbc.com/2021/08/30/iphone-13-rumored-to-have-satellite-phone-connectivity.html",
  //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/106890411-1622469214911-gettyimages-1233110710-BC_Apple_7737.jpeg?v=1624273142",
  //       "publishedAt": "2021-08-30T13:30:09Z",
  //       "content": "Shares of Globalstar, a satellite services provider, soared more than 40% Monday following a report that the next iPhone will have the ability to utilize satellite communications.\r\nTFI Securities ana??? [+897 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "BuzzFeed News"
  //       },
  //       "author": "Tasneem Nashrulla",
  //       "title": "At Least One Person Is Dead As Ida Leaves A Million People Without Power In Louisiana - BuzzFeed News",
  //       "description": "The hurricane weakened to a tropical storm early Monday morning as nearly half the state is without power.",
  //       "url": "https://www.buzzfeednews.com/article/tasneemnashrulla/hurricane-ida-power-outages-new-orleans-louisiana",
  //       "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2021-08/30/16/campaign_images/f75d4827f9e4/at-least-one-person-is-dead-as-ida-leaves-a-milli-2-450-1630342393-27_dblbig.jpg?resize=1200:*",
  //       "publishedAt": "2021-08-30T13:27:00Z",
  //       "content": "At least one person died as Hurricane Ida slammed Louisiana on Sunday with 150 mph winds, damaging homes and businesses, uprooting trees and power lines, causing 911 outages, and leaving a million pe??? [+4560 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "fox-news",
  //           "name": "Fox News"
  //       },
  //       "author": "Tyler McCarthy",
  //       "title": "Celebrities pay tribute to Ed Asner following news of his death - Fox News",
  //       "description": "Celebrities were quick to take to social media to celebrate the life and career of late television icon Ed Asner.",
  //       "url": "https://www.foxnews.com/entertainment/celebrities-pay-tribute-ed-asner-death",
  //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/Ed-Asner-Getty.jpg",
  //       "publishedAt": "2021-08-30T13:20:37Z",
  //       "content": "Celebrities were quick to take to social media to celebrate the life and career of late television icon Ed Asner.??\r\nThe actors death was announced through his official Twitter account Sunday, which n??? [+5187 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "the-verge",
  //           "name": "The Verge"
  //       },
  //       "author": "Russell Brandom",
  //       "title": "How police laid down a geofence dragnet for Kenosha protestors - The Verge",
  //       "description": "After the shooting of Jacob Blake in Kenosha, Wisconsin, ATF investigators used controversial geofence warrants to investigate arson incidents connected to the ensuing protests.",
  //       "url": "https://www.theverge.com/22644965/kenosha-protests-geofence-warrants-atf-android-data-police-jacob-blake",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/QvFCaTZxfUzO2W1oPZcu4mCMplo=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22814480/acastro_4731_210827_mixed.jpg",
  //       "publishedAt": "2021-08-30T13:20:04Z",
  //       "content": "On August 23rd, 2020, police shot Jacob Blake four times in the back in Kenosha, Wisconsin and within hours, the streets were full of protestors. The National Guard was activated the following mornin??? [+6428 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "cnn",
  //           "name": "CNN"
  //       },
  //       "author": "Ryan Nobles, Zachary Cohen, Annie Grayer and Whitney Wild, CNN",
  //       "title": "January 6 committee to ask telecommunications companies to preserve phone records of members of Congress who participated in 'Stop the Steal' rally - CNN",
  //       "description": "The House Select Committee investigating the deadly January 6 riot is set to request that a group of telecommunications companies preserve the phone records of a group of GOP members of Congress and former President Donald Trump, as well as members of the Tru???",
  //       "url": "https://www.cnn.com/2021/08/30/politics/january-6-phone-records-members-of-congress/index.html",
  //       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/181019110142-01-capitol-building-file-super-tease.jpg",
  //       "publishedAt": "2021-08-30T13:00:00Z",
  //       "content": "(CNN)The House Select Committee investigating the deadly January 6 riot is set to request that a group of telecommunications companies preserve the phone records of a group of GOP members of Congress??? [+4207 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": "the-verge",
  //           "name": "The Verge"
  //       },
  //       "author": "Dieter Bohn",
  //       "title": "Fossil announces new smartwatches for 2021 without latest software - The Verge",
  //       "description": "Fossil???s new lineup of Wear OS smartwatches have a new processor but an older OS. Unlike the Samsung Galaxy Watch 4, these watches are running the current Wear OS 2 software, with an update promised for sometime in 2022.",
  //       "url": "https://www.theverge.com/2021/8/30/22647941/fossil-announces-new-gen-6-wear-os-smartwatches-2021-update",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/L1HeJ8L3fKz7mB0OslaSVVIeFyU=/0x147:2040x1215/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22814253/FSL4013827_FA21_AD_09_2.jpg",
  //       "publishedAt": "2021-08-30T13:00:00Z",
  //       "content": "A new Qualcomm processor promises better battery life\r\nFossil Gen 6 watches\r\nFossil\r\nFossil has announced its fall 2021 smartwatch lineup running Wear OS, which it is calling the Gen 6 Touchscreen. A??? [+2783 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "ESPN"
  //       },
  //       "author": "ESPN staff",
  //       "title": "College football season preview - CFP picks, Heisman favorites and more - ESPN",
  //       "description": "ESPN staff reporters give their picks on the biggest topics in CFB for 2021. Who will make the playoff and win the title? Who will take home the Heisman?",
  //       "url": "https://www.espn.com/college-football/story/_/id/32103036/college-football-season-preview-cfp-picks-heisman-favorites-more",
  //       "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0828%2Fr901620_1296x729_16%2D9.jpg",
  //       "publishedAt": "2021-08-30T12:22:41Z",
  //       "content": "Week 1 is finally here. So let's get right into the thick of it.\r\nWhat coaches are already under pressure? Which players do we think are going to become stars this season? Is there any chance of an u??? [+22773 chars]"
  //     }
  //   ];
  const classes = useStyles();

  useEffect(() => {
    const search = encodeURIComponent(searchTerm)
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=${startDate}&to=${endDate}&apiKey=c2791b40ded74e80945c31d37b320e2a`)
      .then(res => res.json())
      .then(data => {
        dispatch(actionSetResults(data.articles))
      })
  }, [startDate, endDate, searchTerm, dispatch])

  function renderImage(image) {
    if (!image) {
      return "/images/no-image-available.png"
    } else {
      return image
    }
  }

  return (
    <>
      <NavBar />
        <Container className={classes.root}>
          <Grid item xs={12}>
              <Grid container direction="row" justifyContent="center" spacing={5}>
                {results.map((result, index) => {
                  return (<Grid key={index} item>
                    <Paper className={classes.paper}>
                      <a href={result.url} className={classes.linkOverride}>
                      <span>
                        <Typography variant="h6" className={classes.title} title={result.title}>
                          {result.title}</Typography>
                        <img className={classes.image} src={renderImage(result.urlToImage)} alt=""/>
                        <Typography variant="subtitle2">By: {result.author} on {moment(`${result.publishedAt}`).format('LLL')}</Typography>
                      </span>
                      <span>
                        <Typography variant="body" className={classes.description}>{result.description}</Typography> 
                      </span>
                      </a>
                    </Paper>
                  </Grid>
                )})}
              </Grid>
            </Grid>
        </Container>
    </>
  )
}
