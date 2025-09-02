import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maya Soora",
    rating: 5,
    text: "We visited Jhasvik Restaurant in Düsseldorf and amazed at their menu. It’s definitely AUTHENTIC SOuth Indian. Best Briyani ever tasted in Germany, well cooked mutton, spices used for Briyani was just like we use it at home. Easter menu was too good, it had: Prawn sothi with Iddiyapam, mutton Briyani, Fish fry 🤩, Chicken fry, Easter Cake.",
  },
  {
    name: "VEER soni",
    rating: 5,
    text: "I tried veg biryani, idly, and dosa at a South Indian restaurant in Düsseldorf – and everything was amazing! The food tasted very authentic, just like in South India. The dosa was crispy, the idly was soft and fresh, and the veg biryani was full of flavor. I really enjoyed it and will definitely come back!",
  },
  {
    name: "Pradeep Chillakuru",
    rating: 5,
    text: "5 stars are unfortunately the maximum we can give.. I could give 10 stars for this restaurant. Truly authentic and very delicious food. Very big menu and everything is made with passion I could simply say this is the best truly authentic Indian restaurant in Germany. When ever you are around Düsseldorf, don’t miss to visit here.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-black  py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-[#FD6D00] text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          What Our Customers Say
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              <p className="text-white text-justify font-semibold mb-6">
                “{review.text}”
              </p>
              <div className="flex justify-center mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zinc-600" />
                ))}
              </div>
              <h3 className="font-semibold text-lg">{review.name}</h3>
              {/* <p className="text-sm text-gray-400">{review.location}</p> */}
            </div>
          ))}
        </div>
        <div className="my-10 mx-10 flex flex-col gap-2 text-center md:text-right">
          <p className="text-2xl font-semibold text-white">
            More google reviews!{" "}
          </p>
          <a
            href="https://share.google/0vhmKJvTx8UjKW5pc"
            target="_blank"
            className="text-[#FD6D00] md:text-lg font-medium"
          >
            Visit
          </a>
        </div>
      </div>
    </section>
  );
}
