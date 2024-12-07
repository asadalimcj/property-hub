import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";

const data = [
  {
    title: "Buy a home",
    description:
      "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
    image:
      "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp",
    button: "Browse Homes",
  },
  {
    title: "Sell a home",
    description:
      "No matter what path you take to sell your home, we can help you navigate a successful sale.",
    image:
      "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp",
    button: "See Your Options",
  },
  {
    title: "Rent A Home",
    description:
      "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
    image:
      "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp",
    button: "Find rentals",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex items-center justify-center bg-gray-200 py-5">
        <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((service, index) => (
            <Services
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              button={service.button}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

