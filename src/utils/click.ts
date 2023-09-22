export const handleHrefClick =
    (href: string, target = "_blank") =>
    () => {
        window.open(href, target);
    };
