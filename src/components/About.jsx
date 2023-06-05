import aboutImage from "../assets/images/about-image.png"
export const About=()=>{
    return (
        <div className="bg-white">
                <div className="p-24 grid grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-medium">About Us</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dicta odio? Architecto tenetur cum in perferendis obcaecati commodi, quidem, optio aspernatur repellat sit quibusdam quam nesciunt ratione doloremque rerum harum!</p>
                       
                    </div>
                    <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover"/>
                    </div>
                </div>
        </div>
    )
}