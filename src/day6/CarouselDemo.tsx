import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function CarouselDemo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla carousel is ready ✅");
    }
  }, [emblaApi]);

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-lg font-bold mb-3 text-center">
        Image / Content Carousel
      </h2>

      {/* VIEWPORT */}
      <div
        ref={emblaRef}
        className="overflow-hidden border rounded-lg cursor-grab active:cursor-grabbing"
      >
        {/* CONTAINER */}
        <div className="flex">
          {["Slide 1", "Slide 2", "Slide 3", "Slide 4"].map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] h-40 flex items-center justify-center text-xl font-bold bg-gray-200 select-none"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
