import './Contact.css'

function Contact (){
    function stop(event){
        event.preventDefault()
    }
    return(
        <div className="Contact" id='Contact'> 
            <p className='main-header'>contact me</p>
            <form action="#" onSubmit={stop}>
                <input type="text" name="" id=""  placeholder='Your Name'/>
                <input type="text" name="" id="" placeholder='Your Email'/>
                <textarea name="" id="" cols="70" rows="8"placeholder='Write Something'></textarea>
                <button>send message</button>
            </form>
        </div>
    )
}

export default Contact