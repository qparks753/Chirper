import React,{useState} from 'react';
import '../components/Chirpadder.css';
let moment = require('moment');
// import App from './app';




const Chirpadder = () => {
    const initalarr = [
        {username:'@Skywalker',usermessage: "Whats up everybody? Ready for Starwars!",date:"Last Wednesday"},
        {username:'@Elon Musk',usermessage:"Dogecoin to the Moon",date:"Last Thursday"},
        {username:'@LebronJ',usermessage:"Ready for the season to get underway. Definitely going to the ship this year!",date:"Last Friday"}
    ];

    const [username,setUserName]= useState("");
    const [usermessage,setUserMessage]=useState("");
    const [tweetlist, setTweetList] = useState (initalarr);
   
   let date;
   date = moment().format('LL');   
//    moment().format("MMM Do YY")  ; moment().format('LL'); 
    const Submit = (e) =>{
        e.preventDefault();
        console.log(username,usermessage);
        const userinfo = {username:username,usermessage:usermessage,date:date};
        console.log(userinfo);
       if(username&&usermessage){
           setTweetList((tweetlist)=>[...tweetlist,userinfo]);
           setUserName("");  //ls
           setUserMessage("");
       }
       
   
    }

   
 return (
    <div className='chirpdiv'>
        <section className='chirpadd'>
     <form onSubmit={Submit}>
         <h3 >Add Your Chirp to the ChirpVerse Today</h3>
      <input name='username' type="text"  placeholder='Username' value={username} onChange={(e)=>setUserName(e.target.value)} />
      <textarea name="usermessage" placeholder="Your Thoughts" value={usermessage} onChange={(e)=>setUserMessage(e.target.value)} cols="60" rows="5"></textarea>
      <button   className='chirpbtn'>Chirp It</button>
      </form>
      </section>

       
           { 
           tweetlist.map(userinfo=>{
        console.log(userinfo)
            return (
                < >
                <section className='chirpdiv1' >
                    <section className='title'>Latest Chirps</section>
                    <hr></hr>
                    <section className='mainbody'>
                    <li><h2>{userinfo.username}</h2></li>
                    <li><p>{userinfo.usermessage}</p></li>
                  </section>
                  <hr></hr>
                  
                   <section className='footer'><li><h5>{`Date Posted: ${userinfo.date}`}</h5></li> </section>
                </section>
                  
                </>
            )
           })}; 
           
           

    </div>

    
 )

}


export default Chirpadder;