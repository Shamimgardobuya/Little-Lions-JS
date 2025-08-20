import React from "react";
import programsImage from "./assets/rectangle131.png"
import activtiesImage from "./assets/group29.png"
import literacy from "./assets/literacy.png"
import math from "./assets/bx_math.png"
import environment from "./assets/tree.png"
import swahili from "./assets/palm-tree.png"
import art from "./assets/mdi_art.png"
import exercise from "./assets/exercise.png"



const Programs = () => {

    return (
        <div style={{ fontFamily: "Rubik" }}>
                <div
                    className="h-64 md:h-96 mt-8 w-full md:ml-20"
                    style={{
                        backgroundImage: `url(${programsImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        marginLeft: "-1.8%",
                        width:'102%'
                    
                    }}
                ></div>

                <div
                    className="h-40 md:h-96 md:ml-20 -mt-10 md:-mt-20"
                    style={{
                        backgroundImage: `url(${activtiesImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>

                <div className="grid place-items-center py-6 md:py-8 px-4">
                    <h1 className="text-black text-xl md:text-2xl">What we Offer</h1>
                    <p className="text-black text-sm md:text-base text-center">
                        At Little Lion Junior School, we offer a dynamic CBC curriculum that blends traditional and
                        <br className="hidden md:block" />
                        innovative learning, empowering students to excel and thrive in a global society.
                    </p>
                </div>

                <div
                    className="mx-2 md:ml-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center"
                    style={{ textAlign: "left" }}
                >
                    <div>
                        <img className="h-10 md:h-12" src={literacy} alt="" />
                        <p>Literacy classes</p>
                        <p>
                            Enhances reading, writing, and <br className="hidden md:block" />
                            communication skills through <br className="hidden md:block" />
                            interactive activities.
                        </p>
                    </div>
                    <div>
                        <img className="h-10 md:h-12" src={math} alt="" />
                        <p>Math class</p>
                        <p>
                            Focuses on hands-on problem-solving <br className="hidden md:block" />
                            and numeracy skills <br className="hidden md:block" />
                            using real-life examples.
                        </p>
                    </div>
                    <div>
                        <img className="h-10 md:h-12" src={environment} alt="" />
                        <p>Environmental classes</p>
                        <p>
                            Teaches students about nature,<br className="hidden md:block" />
                            sustainability, and <br className="hidden md:block" />
                            environmental conservation.
                        </p>
                    </div>
                </div>

                <div
                    className="mx-2 md:ml-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2"
                    style={{ textAlign: "left" }}
                >
                    <div>
                        <img className="h-10 md:h-12" src={swahili} alt="" />
                        <p>Kiswahili classes</p>
                        <p>
                            Develops communication skills <br className="hidden md:block" />
                            in Kiswahili through interactive <br className="hidden md:block" />
                            learning and storytelling.
                        </p>
                    </div>
                    <div>
                        <img className="h-10 md:h-12" src={art} alt="" />
                        <p>Creative Arts</p>
                        <p>
                            Encourages creativity and <br className="hidden md:block" />
                            imagination through drawing, <br className="hidden md:block" />
                            music, drama, and other forms <br className="hidden md:block" />
                            of artistic expression.
                        </p>
                    </div>
                    <div>
                        <img className="h-10 md:h-12" src={exercise} alt="" />
                        <p>Physical & Health Education (PHE)</p>
                        <p>
                            Promotes physical fitness and <br className="hidden md:block" />
                            healthy living through sports, <br className="hidden md:block" />
                            exercises, and health awareness <br className="hidden md:block" />
                            activities.
                        </p>
                    </div>
                </div>
        </div>
    );

}
export default Programs;