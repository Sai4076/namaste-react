const ContactUs = () => {
    return(
        <div>
            <h1 className="font-bold text-2xl m-2 p-2">Contact Us page</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2" placeholder="name"/>
                <input type="text" className="border border-black m-2 p-2" placeholder="message" />
                <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;