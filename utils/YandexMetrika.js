// Manually Add YACOUNTER to function because 
// AMP bind syntax [i]='' is not supported in JSX, use 
// 'data-amp-bind-i' instead. 
// https://err.sh/zeit/next.js/amp-bind-jsx-alt

function YM() { return {__html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                 m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                 ym(53773633, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                 });
              `}; };

export const YandexMetrika = () => {
  const YACOUNTER = 53773633;

  return (
    <>
        <script type="text/javascript" 
            dangerouslySetInnerHTML={YM()}
        />
        <noscript>
          <div><img src={`https://mc.yandex.ru/watch/${YACOUNTER}`} style={{position: 'absolute', left: '-9999px'}} alt="" /></div>
        </noscript>
    </>
    )
}
