function GA() { return {__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-141687165-1');
              `}; };
function GTM() { return {__html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TNVSPXW')
              `}; };



export const GoogleAnalitics = () => {
  const GACOUNTER = "UA-141687165-1";
  return (
    <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GACOUNTER}`}></script>
        <script type="text/javascript" 
            dangerouslySetInnerHTML={GA()}
        />
    </>
    )
}

export const GoogleTagManager = () => {
  const GTMCOUNTER = "GTM-TNVSPXW";
  return (
    <>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTMCOUNTER}`}
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        <script type="text/javascript" 
            dangerouslySetInnerHTML={GTM()}
        />
    </>
    )
}