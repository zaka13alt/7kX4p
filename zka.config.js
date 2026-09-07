(function () {
    var _href = self.location.href;
    // tung tung tung tung tung tung tung tung tung tung tung tung tung tung tung sahur
    var _svc = _href.indexOf('/ixl/');
    var _base = _svc !== -1 ? _href.slice(0, _svc) + '/' : new URL('./', _href).href;
    self.__uv$config = {
        prefix: new URL('ixl/', _base).pathname,
        encodeUrl: Ultraviolet.codec.xor.encode,
        decodeUrl: Ultraviolet.codec.xor.decode,
        handler: new URL('zka.handler.js', _base).href,
        client:  new URL('zka.client.js',  _base).href,
        bundle:  new URL('zka.bundle.js',  _base).href,
        config:  new URL('zka.config.js',  _base).href,
        sw:      new URL('zkadagoat.js',         _base).href,
        theBadKeywords: ["pornhub","xvideos","xnxx","xhamster","redtube","youporn","tube8","spankbang","eporner","tnaflix","txxx","pornone","beeg","4tube","drtuber","brazzers","naughtyamerica","realitykings","bangbros","mofos","babes.com","onlyfans","fansly","chaturbate","livejasmin","myfreecams","cam4","stripchat","bongacams","streamate","jerkmate","camsoda","sexier","imlive","porn","xxx","hentai","nsfw","nude","nudes","naked","erotic","fetish","milf","camgirl","sexcam","liveshow","escort","callgirl"],
    };
})();
