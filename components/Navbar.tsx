import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
const [activeId, setActiveId] = useState("");
const [isOpen, setIsOpen] = useState(false);


const sections = [
{ id: "1", label: "Beranda" },
{ id: "3", label: "Mitra" },
{ id: "4", label: "Fitur" },
{ id: "5", label: "Sistem" },
{ id: "6", label: "Layanan" },
];

useEffect(() => {
const observer = new IntersectionObserver(
(entries) => {
let visibleSection = "";
entries.forEach((entry) => {
if (entry.isIntersecting) {
visibleSection = entry.target.id;
}
});
setActiveId(visibleSection); // Kosongkan jika tidak ada yang terlihat
},
{ threshold: 0.6 }
);

sections.forEach((section) => {
const el = document.getElementById(section.id);
if (el) observer.observe(el);
});

return () => observer.disconnect();
}, []);

return (
<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white w-[95%] z-50 px-5 py-3 rounded-md shadow">
    <div className="flex justify-between items-center relative">
        <Image src="/img/logo/logo.png" alt="logo" width={100} height={60}
            className="object-contain w-[100px] h-auto md:w-[100px]" priority />

        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <button className="text-2xl cursor-pointer block md:hidden" onClick={()=> setIsOpen(!isOpen)}
            >
            &#9776;
        </button>


        <ul className={`${ isOpen ? "flex" : "hidden" } flex-col md:flex md:flex-row md:gap-6 gap-2 md:static absolute
            top-[60px] right-5 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none px-5 py-3
            md:py-0 md:px-0 z-50 list-none text-start transition-all duration-300`}>
            {sections.map((item) => (
            <li key={item.id}>
                <a href={`#${item.id}`} className={`text-black font-medium px-4 py-3 border-0 md:border-b-4 transition
                    ${ activeId===item.id ? "md:border-[#7eb1cf]" : "md:border-transparent md:hover:border-[#7eb1cf]"
                    }`}>
                    {item.label}
                </a>
            </li>
            ))}
        </ul>
    </div>
</nav>
);
};

export default Navbar;