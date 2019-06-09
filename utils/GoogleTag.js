function GT() { return {__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-141687165-1');
              `}; };



export const GoogleTag = () => {
  const GTCOUNTER = "UA-141687165-1";

  return (
    <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTCOUNTER}`}></script>
        <script type="text/javascript" 
            dangerouslySetInnerHTML={GT()}
        />
    </>
    )
}
