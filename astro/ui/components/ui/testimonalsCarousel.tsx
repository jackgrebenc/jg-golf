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
      name: "Sherry L.",
      testimonial: `Judi introduced me to the game of golf and gave me the confidence to step out onto the course by teaching me the basics in a very relaxed private setting at the indoor simulator.  She puts lots of thought and preparation into her lessons and is highly engaged in her lessons. The simulator data allows instant feedback to help you see results and areas for improvement, while Judi's attention detail, hands-on approach, and fun props made it easy to follow and pick up this very detailed and fussy little game. Judi’s love for golf is great - and her passion comes through in her instruction! She is determined to make a golfer out of you too!`,
    },
    {
      name: "Renee W.",
      testimonial: `Judi is an incredible golf instructor - truly gifted at making the game feel simple and approachable. Her creative teaching style and practical tips have made a huge difference in every part of my game. I always leave a lesson feeling more confident and excited to play.`,
    },
    {
      name: "Nancy E.",
      testimonial: `I have been working with Judi on my game for a number of years, gaining confidence and now love to play and play with others.  When my husband explained golf tips to me, I just looked at him and was like 'what do you mean', with Judi she was able to identify small step wise changes that made a big impact without overwhelming me.  She was good at 'she-splaining'... and this helped me improve my swing and love of the game.`,
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
        {chunkArray(testimonials.entries, isMobile ? 1 : 2).map(
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
                        - {item.name}
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
