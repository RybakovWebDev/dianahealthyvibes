interface AnimationOptions {
  staggerDelay?: number;
  threshold?: number;
  selector?: string;
}

export function initListAnimation(options: AnimationOptions = {}) {
  const { staggerDelay = 0.4, threshold = 0.5, selector = "[data-animate]" } = options;

  console.log("Received options:", options);
  console.log("Using values:", { staggerDelay, threshold, selector });

  if (typeof window !== "undefined") {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            "Entry intersecting:",
            entry.isIntersecting,
            "ratio:",
            entry.intersectionRatio
          );
          if (entry.isIntersecting) {
            const children = entry.target.children;

            Array.from(children).forEach((child, index) => {
              if (child instanceof HTMLElement) {
                child.style.setProperty("--stagger-delay", `${index * staggerDelay}s`);
              }
            });

            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });
  }
}
