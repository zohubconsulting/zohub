import { useEffect } from "react";

interface UseScrollViewProps {
  animatedElementsRef: React.RefObject<HTMLDivElement[]>;
}

const useScrollView = ({ animatedElementsRef }: UseScrollViewProps) => {
  // Função para lidar com a interseção (quando o elemento entra ou sai da tela)
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };

  useEffect(() => {
    // Cria o IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.01,
    });

    // Observar todos os elementos referenciados
    animatedElementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    // Limpeza: remover o observer quando o componente for desmontado
    return () => {
      animatedElementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [animatedElementsRef.current]);
};

export default useScrollView;
