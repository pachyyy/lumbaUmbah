import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { LuWashingMachine } from "react-icons/lu";
import { IoFlash } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

function Price() {
  const cardStyle = "rounded-4xl drop-shadow-xl/30 w-[400] h-auto";
  const serviceCards = [
    /* Regular Service*/
    {
      logo: <LuWashingMachine className="w-10 h-10" />,
      title: "Regular Service",
      subtitle: "Best for regular needs",
      items: [
        "Up to 10kg per load*",
        "Free pickup & delivery",
        "3 Days services",
        "Ironing Included",
      ],
      price: "Rp. 5.000 per kg",
      note: "*Minimum load of 5kg",
      bgColor: "bg-white",
    },

    /* Ultimate Service*/
    {
      logo: <IoFlash className="w-10 h-10 text-[#fff700]" />,
      title: "Ultimate Service",
      subtitle: "Best for ultimate needs",
      items: [
        "Up to 10kg per load*",
        "Free pickup & delivery",
        "1 Days services",
        "Ironing & Softener Included",
      ],
      price: "Rp. 9.000 per kg",
      note: "*Minimum load of 5kg",
      bgColor: "bg-sky-200",
    },

    /* Medium Service*/
    {
      logo: <LuWashingMachine className="w-10 h-10" />,
      title: "Medium Service",
      subtitle: "Best for fast needs",
      items: [
        "Up to 10kg per load*",
        "Free pickup & delivery",
        "2 Days services",
        "Ironing & Softener Included",
      ],
      price: "Rp. 7.000 per kg",
      note: "*Minimum load of 5kg",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="bg-[#EFF9FF]">
      <NavBar />
      <div className="flex flex-col justify-center min-h-screen pt-12 md:pt-8 gap-15 items-center">
        {/* Title Section */}
        <div className="mx-auto flex flex-col items-center justify-center -mt-25">
          <h1 className="text-5xl md:text-5xl font-bold text-sky-700">
            Services & Price
          </h1>
        </div>

        {/* Card Section */}
        <div className="flex flex-row gap-7 items-center justify-center">
          {serviceCards.map((card, index) => (
            <div key={index} className={`${card.bgColor} ${cardStyle} p-6`}>
              {/* Title & Icon */}
              <div className="flex items-center gap-4 mb-2">
                {card.logo}
                <div>
                  <h1 className="text-2xl font-bold text-sky-700 font-rubik">
                    {card.title}
                  </h1>
                  <p className="text-xs text-gray-500 font-rubik">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* What's Included */}
              <h2 className="text-xl font-semibold font-jakarta text-gray-500 mb-3">
                What's Included?
              </h2>
              <ul className="flex flex-col gap-3 mb-4">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FaCircleCheck className="w-6 h-6" />
                    <span className="px-2 font-jakarta text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Dotted Line */}
              <hr className="h-px border border-dashed border-gray-400 mb-4" />

              {/* Price */}
              <div className="text-center">
                <p className="font-rubik font-semibold mt-5 text-4xl">
                  {card.price}
                </p>
              </div>
              <p className="text-xs text-gray-400 font-rubik">{card.note}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Price;