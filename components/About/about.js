import { MyImage } from "./image";
import ClickableImage from "../Helpers/Button";

const links = [
    ["https://www.linkedin.com/in/navomi-s-ramesh/", "/about_me/linkedin.png"],
    ["https://github.com/navomi09", "/tech_stack_icons/github.png"],
];

export default function About() {
    return (
        <div className="w-full border-2 border-gray-500 font-mono text-sm p-4">
            <div className="p-2 text-sm md:text-base leading-relaxed">
                Hey, I'm <MyImage text={"Navomi S Ramesh"} />, a final-year <b>Computer Science Engineering undergrad at VIT</b>.
                <br /><br />
                I’m passionate about <b>software development</b> and <b>machine learning</b>, building systems that are efficient, useful, and scalable. I’ve explored these through experiences like my <b>research internship at DRDO</b> (where I worked on radar target classification), and through building an android application for cosmetic allergen detection which gave me a chance to explore  all the stages of SDLC.
                <br /><br /> 
                Beyond academics, you’ll probably find me experimenting with game design, reading crime thrillers, or sleeping!
                <br /><br />
                I believe technology should be smart, and accessible and that’s exactly what I aim to build.
            </div>
            <p className="p-2 mt-6 text-sm md:text-base font-semibold">Let's connect!</p>

            <div className="p-2 flex flex-wrap gap-4">
                {links.map(([link, path], index) => (
                    <ClickableImage key={index} link={link} path={path} />
                ))}
            </div>

        </div>
    );
}
