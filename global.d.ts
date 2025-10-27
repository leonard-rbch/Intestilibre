// Déclare la balise custom Wistia pour TypeScript
declare namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }