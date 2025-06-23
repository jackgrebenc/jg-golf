import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useWindowSize } from "@/lib/useWindowSize";

const testimonials = {
  entries: [
    {
      name: "Sarah M.",
      testimonial:
        "Judi made me feel confident from the first lesson. Her patience and clear explanations helped me improve faster than I thought possible.",
    },
    {
      name: "Tina R.",
      testimonial:
        "As a total beginner, I was nervous, but Judi made learning fun. Now I actually look forward to getting on the course!",
    },
    {
      name: "Priya S.",
      testimonial:
        "The indoor simulator was a game-changer — Judi showed me exactly what I needed to work on. Loved every session!",
    },
    {
      name: "Diane W.",
      testimonial:
        "I've taken lessons before, but none as encouraging and tailored as these. Judi really understands how to teach.",
    },
    {
      name: "Jack G.",
      testimonial: "She is a wonderful teacher and mother!",
    },
    {
      name: "Dirk G.",
      testimonial:
        "Solved my slice. Now I'm ready to golf with co-workers confidently.",
    },
    {
      name: "Mark G.",
      testimonial:
        "Always making observations on the course and showing me the right technique.",
    },
    {
      name: "Barbara A.",
      testimonial: "She knows her way around a simulator that's for sure ",
    },
  ],
};

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

const TestimonalsCarousel = () => {
  const { isMobile } = useWindowSize();

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 9000,
        }),
      ]}
    >
      <CarouselContent>
        {chunkArray(testimonials.entries, isMobile ? 2 : 4).map(
          (group, groupIndex) => (
            <CarouselItem key={groupIndex}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {group.map((item, itemIndex) => (
                  <Card key={itemIndex}>
                    <CardContent className="p-6 text-justify">
                      <p className="text-neutral-700 italic mb-4">
                        "{item.testimonial}"
                      </p>
                      <p className="text-sm font-semibold text-neutral-800">
                        {item.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonalsCarousel;
